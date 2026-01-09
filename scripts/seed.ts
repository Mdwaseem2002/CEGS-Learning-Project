// scripts/seed.ts
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hrms';

// Define schemas inline for seeding
const EmployeeSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  phone: String,
  department: String,
  position: String,
  salary: Number,
  joinDate: String,
  username: String,
  password: String,
  status: String
});

const Employee = mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Employee.deleteMany({});
    console.log('🗑️  Cleared existing employees');

    // Create sample employees
    const sampleEmployees = [
      {
        id: 'EMP001',
        name: 'John Doe',
        email: 'john.doe@academy.com',
        phone: '+1234567890',
        department: 'Science',
        position: 'Senior Faculty',
        salary: 75000,
        joinDate: '2024-01-15',
        username: 'john.doe@academy.com',
        password: await bcrypt.hash('password123', 10),
        status: 'active'
      },
      {
        id: 'EMP002',
        name: 'Jane Smith',
        email: 'jane.smith@academy.com',
        phone: '+1234567891',
        department: 'Arts',
        position: 'Department Head',
        salary: 65000,
        joinDate: '2024-02-01',
        username: 'jane.smith@academy.com',
        password: await bcrypt.hash('password123', 10),
        status: 'active'
      },
      {
        id: 'EMP003',
        name: 'Mike Johnson',
        email: 'mike.johnson@academy.com',
        phone: '+1234567892',
        department: 'History',
        position: 'Lecturer',
        salary: 55000,
        joinDate: '2024-03-10',
        username: 'mike.johnson@academy.com',
        password: await bcrypt.hash('password123', 10),
        status: 'active'
      }
    ];

    await Employee.insertMany(sampleEmployees);
    console.log('✅ Sample employees created');
    console.log('\n📝 Login Credentials:');
    console.log('Faculty: admin@academy.com / admin123');
    console.log('Student: john.doe@academy.com / password123');
    console.log('Student: jane.smith@academy.com / password123');
    console.log('Employee: mike.johnson / password123');

    await mongoose.connection.close();
    console.log('\n✅ Seeding completed successfully');
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
}

seed();