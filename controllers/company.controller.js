const Company = require('../models').Company;

module.exports = {
  create: (req, res) => {
    let data = {
      name: req.body.name,
      address: req.body.address
    }
    console.log(data);
    return Company
      .create(data)
      .then(company => res.status(200).send(company))
      .catch((err) => send(err))
  }
}