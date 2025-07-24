import { useState, useEffect } from "react";
import axios from "axios";
import "./Adminpanel.css";

export default function AdminPanel() {
  const [donations, setDonations] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/donate");
        setDonations(response.data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };
    fetchDonations();
  }, []);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/volunteers");
        setVolunteers(response.data);
      } catch (error) {
        console.error("Error fetching volunteers:", error);
      }
    };
    fetchVolunteers();
  }, []);

  const assignDonation = async (donationId, donationLocation) => {
    try {
      const matchingVolunteer =
        volunteers.find((v) =>
          v.address.toLowerCase().includes(donationLocation.toLowerCase())
        ) || volunteers[0];

      if (!matchingVolunteer) {
        console.log("No volunteers available");
        return;
      }

      await axios.put(`http://localhost:5000/donate/${donationId}/assign`, {
        volunteerId: matchingVolunteer._id,
      });

      setDonations(
        donations.map((donation) =>
          donation._id === donationId
            ? { ...donation, assignedTo: matchingVolunteer._id }
            : donation
        )
      );
    } catch (error) {
      console.error("Error assigning donation:", error);
    }
  };

  const deleteDonation = async (donationId) => {
    try {
      await axios.delete(`http://localhost:5000/donate/${donationId}`);
      setDonations(donations.filter((donation) => donation._id !== donationId));
    } catch (error) {
      console.error("Error deleting donation:", error);
    }
  };

  const deleteVolunteer = async (volunteerId) => {
    try {
      await axios.delete(`http://localhost:5000/volunteers/${volunteerId}`);
      setVolunteers(volunteers.filter((v) => v._id !== volunteerId));
    } catch (error) {
      console.error("Error deleting volunteer:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Admin Panel</h2>

      <div className="mt-4">
        <h3 className="font-semibold">Donations</h3>
        {donations.map((donation) => {
          const assignedVolunteer = volunteers.find(
            (v) => v._id === donation.assignedTo
          );

          return (
            <div key={donation._id} className="p-2 border mb-2">
              <p>Donor: {donation.donorName}</p>
              <p>Item: {donation.item}</p>
              <p>Location: {donation.location}</p>
              <p>Description: {donation.description}</p>
              <p>
                Assigned To:{" "}
                {assignedVolunteer ? assignedVolunteer.userName : "Not Assigned"}
              </p>
              <button
                className={`px-2 py-1 m-1 ${
                  assignedVolunteer
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() =>
                  !assignedVolunteer &&
                  assignDonation(donation._id, donation.location)
                }
                disabled={!!assignedVolunteer}
              >
                {assignedVolunteer
                  ? `Assigned to ${assignedVolunteer.userName}`
                  : "Assign to Volunteer"}
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 m-1"
                onClick={() => deleteDonation(donation._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Volunteers</h3>
        {volunteers.map((volunteer) => (
          <div key={volunteer._id} className="p-2 border mb-2">
            <p>Name: {volunteer.userName}</p>
            <p>Address: {volunteer.address}</p>
            <button
              className="bg-red-500 text-white px-2 py-1"
              onClick={() => deleteVolunteer(volunteer._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
