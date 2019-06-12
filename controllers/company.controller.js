const Company = require('../models').Company;

module.exports = {
  create: (req, res) => {
    let data = {
      name: req.body.name,
      address: req.body.address
    }
    return Company
      .create(data)
      .then(company => res.status(200).send(company))
      .catch((err) => send(err))
  },
  readOne: (req, res) => {
    company_id = req.params.company_id;
    return Company
    .findOne({
      where: {
        id: req.params.company_id,
      }
    })
    .then(company => res.status(200).send(company) );
  },
  readAll: (req,res) => {
    return Company
    .findAll()
    .then(company => res.status(200).send(company) );
  },
  update: (req, res) => {
    company_id = req.params.company_id;
    console.log(req.body)
    return Company
    .update(req.body,{
      where: {
        id: company_id
      }
    })
    .then(() => res.status(200).send({message:"Updated Successfully"}));
  },
  delete: (req,res) => {
    company_id = req.params.company_id;
    return Company
    .destroy({  
      where: { id: company_id }
    })
    .then(() => {
      res.status(200).send({message: "Deleted Successfully"})
    });
  }
  
}