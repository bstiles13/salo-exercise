const emails = require('../data/emails.json');

module.exports = {
  getEmails: async (req, res) => {
    setTimeout(() => res.json(emails), 400);
  }
};
