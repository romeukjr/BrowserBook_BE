// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

// DATABASE SETUP
var mongoose   = require('mongoose');
var url = "mongodb://localhost:27017/mean2";
mongoose.connect(url); // connect to our database
// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

// Teste models lives here
var Teste     = require('./app/models/teste');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
    console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// on routes that end in /testes
// ----------------------------------------------------
router.route('/testes')

	// create a teste (accessed at POST http://localhost:8080/api/testes)
	.post(function(req, res) {
		var teste = new Teste();		// create a new instance of the Teste model
		teste.name = req.query.name;  // set the testes name (comes from the request)
		teste.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Teste created!' });
		});

		
	})

	// get all the testes (accessed at GET http://localhost:8080/api/testes)
	.get(function(req, res) {
		Teste.find(function(err, testes) {
			if (err)
				res.send(err);

			res.json(testes);
		});
	});

// on routes that end in /testes/:teste_id
// ----------------------------------------------------
router.route('/testes/:teste_id')

	// get the teste with that id
	.get(function(req, res) {
		Teste.findById(req.params.teste_id, function(err, teste) {
			if (err)
				res.send(err);
			res.json(teste);
		});
	})

	// update the teste with this id
	.put(function(req, res) {
		Teste.findById(req.params.teste_id, function(err, teste) {

			if (err)
				res.send(err);

			teste.name = req.query.name;
			teste.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Teste updated!' });
			});

		});
	})

	// delete the teste with this id
	.delete(function(req, res) {
		Teste.remove({
			_id: req.params.teste_id
		}, function(err, teste) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);