import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Check if admin user already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'admin@lensbydamiano.com' }
  });

  if (existingAdmin) {
    console.log('✅ Admin user already exists');
    return;
  }

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123456', 12);
  
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@lensbydamiano.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      isActive: true,
    },
  });

  console.log('✅ Created admin user:', {
    id: adminUser.id,
    email: adminUser.email,
    firstName: adminUser.firstName,
    lastName: adminUser.lastName,
    role: adminUser.role,
  });

  console.log('\n📧 Default Admin Credentials:');
  console.log('Email: admin@lensbydamiano.com');
  console.log('Password: admin123456');
  console.log('\n⚠️  Please change the default password after first login!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
