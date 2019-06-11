var express = require('express');
const app = express();
const bodyparser = require("body-parser");

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);

var models = require('./models')

models.sequelize.sync().then(function(){
  console.log("Sequelize Synchronised");
}).catch(err => {
  console.log(err)
})

app.use(bodyparser.json())

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({

  message: 'API Works Great!',
  
  }));