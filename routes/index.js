const companyController = require('../controllers/company.controller')

module.exports = (app) => {
 
  app.get('/api', (req,res) => res.status(200).send({ message:"Welcome All" }) ),
  app.post('/api/create/company', companyController.create )
  app.get('/api/company/:company_id', companyController.readOne )
  app.get('/api/company/', companyController.readAll )
  app.put('/api/update/company/:company_id', companyController.update)
  app.delete('/api/delete/company/:company_id', companyController.delete)
}