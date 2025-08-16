const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

dotenv.config();

const services = [
  { name: 'Haircut', description: 'A professional haircut', price: 25, category: 'Hair' },
  { name: 'Facial', description: 'Relaxing facial treatment', price: 40, category: 'Skin' },
  { name: 'Manicure', description: 'Classic manicure service', price: 20, category: 'Nails' },
  { name: 'Pedicure', description: 'Pampering pedicure', price: 30, category: 'Nails' },
  { name: 'Hair Coloring', description: 'Vibrant hair coloring', price: 60, category: 'Hair' },
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  await Service.deleteMany();
  await Service.insertMany(services);
  console.log('Services seeded!');
  mongoose.disconnect();
}).catch((err) => {
  console.error('Seeding error:', err);
});