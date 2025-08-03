require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin'); // uses the schema you pasted

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

async function createAdmin() {
  try {
    const admin = new Admin({
      firstName: "Test",
      lastName: "Admin",
      email: "admin@example.com",
      password: "admin123", // Plain password; will be hashed by pre-save hook
      role: "admin"
    });

    await admin.save(); // triggers pre('save') → hashes password
    console.log("✅ Admin inserted with hashed password");
  } catch (err) {
    console.error("❌ Error inserting admin:", err.message);
  } finally {
    mongoose.connection.close();
  }
}

createAdmin();
