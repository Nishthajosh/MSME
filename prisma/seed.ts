import { PrismaClient } from '@prisma/client';
import * as crypto from 'crypto';

const prisma = new PrismaClient();

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

async function main() {
  // Create default admin user
  const adminEmail = 'admin@ewolyn.co.in';
  
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail }
  });

  if (!existingAdmin) {
    await prisma.admin.create({
      data: {
        email: adminEmail,
        password: hashPassword('admin123'),
        name: 'Admin'
      }
    });
    console.log('✅ Default admin user created');
    console.log('   Email: admin@ewolyn.co.in');
    console.log('   Password: admin123');
  } else {
    console.log('ℹ️  Admin user already exists');
  }

  // Create some sample data for testing
  const contactCount = await prisma.contactSubmission.count();
  if (contactCount === 0) {
    await prisma.contactSubmission.createMany({
      data: [
        {
          name: 'Rahul Sharma',
          email: 'rahul@example.com',
          phone: '+91 9876543210',
          company: 'Tech Innovations Pvt Ltd',
          message: 'Interested in startup registration services. Please provide more details.',
          status: 'new'
        },
        {
          name: 'Priya Patel',
          email: 'priya@example.com',
          phone: '+91 9876543211',
          company: 'Green Energy Solutions',
          message: 'Need help with MSME registration and government certifications.',
          status: 'read'
        }
      ]
    });
    console.log('✅ Sample contact submissions created');
  }

  const fundingCount = await prisma.fundingApplication.count();
  if (fundingCount === 0) {
    await prisma.fundingApplication.createMany({
      data: [
        {
          businessName: 'AgroTech India',
          contactName: 'Amit Kumar',
          email: 'amit@agrotech.com',
          phone: '+91 9876543212',
          businessType: 'Private Limited',
          fundingRequired: '₹25-50 Lakhs',
          businessStage: 'early',
          annualRevenue: '₹10-25 Lakhs',
          employees: '5-10',
          industry: 'Agriculture',
          state: 'Maharashtra',
          description: 'Developing IoT solutions for smart farming',
          status: 'pending'
        },
        {
          businessName: 'EduLearn Platform',
          contactName: 'Sneha Reddy',
          email: 'sneha@edulearn.com',
          phone: '+91 9876543213',
          businessType: 'LLP',
          fundingRequired: '₹50 Lakhs - 1 Crore',
          businessStage: 'growth',
          annualRevenue: '₹50 Lakhs - 1 Crore',
          employees: '10-25',
          industry: 'Education Technology',
          state: 'Karnataka',
          description: 'Online learning platform for K-12 students',
          status: 'reviewing'
        }
      ]
    });
    console.log('✅ Sample funding applications created');
  }

  const consultationCount = await prisma.consultationBooking.count();
  if (consultationCount === 0) {
    await prisma.consultationBooking.createMany({
      data: [
        {
          name: 'Vikram Singh',
          email: 'vikram@example.com',
          phone: '+91 9876543214',
          service: 'Startup Registration',
          preferredDate: '2024-02-15',
          message: 'Looking to register a new tech startup',
          status: 'pending'
        },
        {
          name: 'Anita Desai',
          email: 'anita@example.com',
          phone: '+91 9876543215',
          service: 'Funding Assistance',
          preferredDate: '2024-02-18',
          message: 'Need guidance on applying for MSME loans',
          status: 'confirmed'
        }
      ]
    });
    console.log('✅ Sample consultation bookings created');
  }

  console.log('\n🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
