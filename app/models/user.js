// models/user.js
const db = require('./db');

const User = {
  findByUsername: function(username, callback) {
    db.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results[0]);
    });
  }
};

module.exports = User;