const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const session = require('express-session');
const cors = require('cors')
const url = "mongodb://localhost:27017/";
const dbName = "ShopAppDB"; //use passportjs for logins (authenication)
const app = express();
const port = 3000;
const sess = {
  secret: 'keyboard cat',
  cookie: { maxAge: 86400000}, //24 hours in ms
  saveUninitialized: false,
  resave: false,
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(cors())
app.use(session(sess))

mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const state = {
  db : null
};

const connect = (callback) => {
  if(state.db)
  {
    callback();
  }
  else
  {
    MongoClient.connect(url + dbName, mongoOptions,function(err, db) {
      if (err) 
      {
        callback(err);
      }
      else
      {
        console.log(`${dbName} connected`);
        state.db = db.db(dbName);
        callback();
      }
    });
  }
}

connect((err) => {
	if(err)
	{
	  console.log('unable to connect to database');
	  process.exit(1);
	}
	else
	{
	  app.listen(port, () => console.log(`ShopApp BackEnd is listening on port ${port}!`));
	}
});


app.get('/', function(req, res, next) {
if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>This is for Debugging</h1>')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('ShopApp BackEnd!')
  }
});

app.route('/shoppingCart')
  .post(function (req, res) { //Add to the shopping cart
    res.send('Add a book')
  })
  .get(function (req, res) { // Get the shopping cart items
    res.send('Get a random book')
  })
  .put(function (req, res) { //Update the quantity/size in the shopping cart
    res.send('Update the book')
  })
  .delete(function (req, res) { //Delete an item from the shopping cart
  	res.send('Delete the book')
  });

app.route('/items/:itemID')
  .post(function (req, res) { //Create an item (Admin only)
    res.send('Add a book')
  })
  .get(function (req, res) { //Get the item information
    const query = {_id : parseInt(req.params.itemID)};
    console.log(query);
    state.db.collection("items").findOne(query, function(err, result)
    {
      if(err)
      {
        console.log(`There was an error: ${err}`);
      }
      console.log("Grabbed item");
      res.send(result);
    })
  })
  .put(function (req, res) { //Updates item information
    const myquery = { _id: req.params.itemID };
    const newvalues = { $set: {name: req.params.name, description: req.params.description } };
    dbo.collection("items").updateOne(myquery, newvalues, function(err, res) {
      if(err)
      {
        console.log(`There was an error: ${err}`);
      }
      console.log("1 document updated");
    });
  })
  .delete(function (req, res) { //Deletes the item
  	res.send('Delete the book')
  });

app.get('/items', function (req, res) {
  const query = {};
  if(req.query.search)
  {
    query.name =  {$regex : `.*${req.query.search}.*`}
  }
  console.log(query);
  	state.db.collection("items").find(query).toArray(function(err, result)
  	{
  		if(err)
  		{
  			console.log(`There was an error: ${err}`);
  		}
  		console.log("Grabbed items");
  		res.send(result);
  	})
  });