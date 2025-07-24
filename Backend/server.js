const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./Models/User");
const Volun = require("./Models/Volun");
<<<<<<< HEAD
const Adminster = require("./Models/Adminster");
const Donation = require("./Models/Donation"); 

=======
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async() =>{ console.log("Connected to MongoDB");
    const adminDb = mongoose.connection.db.admin();
    const info = await adminDb.serverStatus();
    console.log("MongoDB Info:", info.version);
})
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

<<<<<<< HEAD
app.post("/donate", async (req, res) => {
  const { donorName, item, location, description } = req.body;

  try {
    const newDonation = new Donation({
      donorName,
      item,
      location,
      description,
    });

    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (error) {
    console.error("Error creating donation:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// GET /api/donations - Retrieve all donations
app.get("/donate", async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/donate/:id/assign", async (req, res) => {
  const { id } = req.params;
  const { volunteerId } = req.body;

  try {
    const donation = await Donation.findByIdAndUpdate(
      id,
      { assignedTo: volunteerId },
      { new: true }
    );
    res.json(donation);
  } catch (error) {
    console.error("Error assigning donation:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/donate/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDonation = await Donation.findByIdAndDelete(id);
    if (!deletedDonation) {
      return res.status(404).json({ message: "Donation not found" });
    }
    res.status(200).json({ message: "Donation deleted successfully" });
  } catch (error) {
    console.error("Error deleting donation:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get donations assigned to a specific volunteer
app.get("/donate/assigned/:volunteerId", async (req, res) => {
  const { volunteerId } = req.params;

  try {
    const assignedDonations = await Donation.find({ assignedTo: volunteerId }).populate("assignedTo", "userName");
    res.status(200).json(assignedDonations);
  } catch (error) {
    console.error("Error fetching assigned donations:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Accept donation
app.post("/donate/accept/:donationId", async (req, res) => {
  const { donationId } = req.params;
  const { volunteerId } = req.body;

  try {
    const donation = await Donation.findByIdAndUpdate(
      donationId,
      { status: "Accepted", assignedTo: volunteerId },
      { new: true }
    );

    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.status(200).json({ message: "Donation accepted successfully!", donation });
  } catch (error) {
    console.error("Error accepting donation:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Decline donation
app.post("/donate/decline/:donationId", async (req, res) => {
  const { donationId } = req.params;
  const { volunteerId } = req.body;

  try {
    const donation = await Donation.findByIdAndUpdate(
      donationId,
      { status: "Declined", assignedTo: null },
      { new: true }
    );

    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.status(200).json({ message: "Donation declined successfully!", donation });
  } catch (error) {
    console.error("Error declining donation:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// Get all volunteers
app.get("/volunteers", async (req, res) => {
  try {
    const volunteers = await Volun.find({}, "userName address");
    res.status(200).json(volunteers);
  } catch (error) {
    console.error("Error fetching volunteers:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/volunteers/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedVolunteer = await Volun.findByIdAndDelete(id);
    if (!deletedVolunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }
    res.status(200).json({ message: "Volunteer deleted successfully" });
  } catch (error) {
    console.error("Error deleting volunteer:", error);
    res.status(500).json({ message: "Server error" });
  }
});

async function assignVolunteerToDonation(donationId) {
  try {
    // Find the donation by ID
    const donation = await Donation.findById(donationId);
    if (!donation) {
      console.log('Donation not found');
      return;
    }

    // Find an available volunteer based on location
    const volunteer = await Volun.findOne({
      address: { $regex: new RegExp(donation.location, 'i') } // Case-insensitive match
    });

    if (!volunteer) {
      console.log('No volunteer available at this location');
      return;
    }

    // Assign volunteer to donation
    donation.assignedVolunteer = volunteer._id;
    await donation.save();

    console.log(`Volunteer ${volunteer.userName} assigned to donation by ${donation.donorName}`);
  } catch (err) {
    console.error('Error assigning volunteer:', err);
  }
}


=======
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
app.get("/verify", authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json({ username: user.username });
});


app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;


  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  

  try {
    // Find user by email
    const { username, password } = req.body;
    console.log("Incoming Login Request:", req.body);

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    console.log("User found:", user);
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    console.log("Password match");
    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h"});
    console.log("Token generated:", token);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


//Volun
app.get("/verifyVolun", authMiddleware, async (req, res) => {
  const user = await Volun.findById(req.userId);
  res.json({ username: user.username });
});


//volun signup
app.post("/volsignup", async (req, res) => {
  try {
<<<<<<< HEAD
    const { userName, firstName, lastName, email, contact, password, address } = req.body;
=======
    const { userName, firstName, lastName, email, contact, password } = req.body;
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb

    if (!userName || !email || !contact || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check for duplicates
    const existingUser = await Volun.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Volun({
      userName,
      firstName,
      lastName,
      email,
      contact,
      password: hashedPassword,
<<<<<<< HEAD
      address,
=======
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error during volsignup:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});


//volun login

app.post("/vollogin", async (req, res) => {
  try {
    // Extract the username and password from the request body
    const { userName, password } = req.body;

    // Log incoming request (for debugging)
    console.log("Incoming Login Request:", req.body);

    // Validate request body (ensure both userName and password are provided)
    if (!userName || !password) {
      return res.status(400).json({ message: "Both username and password are required" });
    }

    // Find the user by username
    const user = await Volun.findOne({ userName});
    console.log("Request Body:", userName);
    console.log("Database Response:", user);

    // If user not found, return error
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }


    // Log the found user (for debugging)
    console.log("User found:", user);

    // Compare the provided password with the stored password
    const isMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return error
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Log the password match success (for debugging)
    console.log("Password match");

    // Generate a JWT token with user ID (valid for 24 hours)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h"
    });

    // Log the generated token (for debugging)
    console.log("Token generated:", token);

    // Return the success response with the JWT token
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });

  } catch (error) {
    // Log the error (for debugging)
    console.error("Error during login:", error);

    // Return a server error response if something goes wrong
    return res.status(500).json({ message: "Server error" });
  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
<<<<<<< HEAD


// admin
app.get("/verifyadmin", authMiddleware, async (req, res) => {
  const user = await Adminster.findById(req.userId);
  res.json({ username: user.username });
});



// Admin Signup Route
app.post("/adminsignup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingAdmin = await Adminster.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Adminster({
      username,
      email,
      password: hashedPassword,
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin registered successfully!" });
  } catch (error) {
    console.error("Admin signup error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Admin Login Route
app.post("/admin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Adminster.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "24h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Admin login error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});
=======
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
