//get the mangoose model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define our model
var testeSchema = new Schema({
  name : {type : String, default : ''}
});

//module.exports will allow this model to be passed to other files
module.exports = mongoose.model('Teste', testeSchema);