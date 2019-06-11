const companyController = require('../controllers/company.controller')

module.exports = (app) => {
 
  app.get('/api', (req,res) => res.status(200).send({ message:"Welcome All" }) ),
  app.post('/api/create/company', companyController.create )

}