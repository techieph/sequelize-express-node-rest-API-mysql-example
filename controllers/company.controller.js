const Company = require('../models').Company;


module.exports = {
  create: (req, res) => {
    return Company
      .create({
        name: req.body.name
      })
      .then(company => res.status(200).send(company))
      .catch((err) => send(err))
  }
}