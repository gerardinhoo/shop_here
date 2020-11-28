const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Odette V',
    email: 'odette@egmail.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Ricardo Z',
    email: 'ricardo@gmail.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

module.exports = users;