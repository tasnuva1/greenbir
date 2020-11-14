const bcrypt = require('bcryptjs');

// const hashPassword = async (plaintext) => {
//   const salt = await bcrypt.genSalt(10);
//   const password = await bcrypt.hash(plaintext, salt);
//   return password;
// };

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('90590255', 10),
    isAdmin: true,
  },
  {
    name: 'Fahmida Mashura',
    email: 'fahmida@example.com',
    password: bcrypt.hashSync('90590255', 10),
    isAdmin: true,
  },
  {
    name: 'Jobair Tahsin',
    email: 'tahsin@example.com',
    password: bcrypt.hashSync('90590255', 10),
    isAdmin: true,
  },
];

module.exports = users;
// npm i bcryptjs
