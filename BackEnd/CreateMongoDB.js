var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const dbName = "ShopAppDB";
mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

MongoClient.connect(url + dbName, mongoOptions,function(err, db) {
  if (err) 
  {
    console.log('unable to connect to database');  
  }
  else
  {
    console.log(`${dbName} was created`);
    dbo = db.db(dbName);
    dbo.createCollection("items", function(err, res) {
      if (err)
      {
        console.log(`unable to create items collection`);
        db.close();
        process.exit(1);
      }
      console.log("Items Collection created!");
       db.close();
    });
  }
});

MongoClient.connect(url + dbName, mongoOptions,function(err, db) {
    const descriptionTemplate = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const itemsTemplate = [
       {_id:11, name: "Bat", description: descriptionTemplate},
       {_id:12, name: "Shoe", description:  descriptionTemplate},
       {_id:13, name: "Shovel", description:  descriptionTemplate},
       {_id:14, name: "Cat", description:  descriptionTemplate},
       {_id:15, name: "Box", description:  descriptionTemplate},
       {_id:16, name: "Hat", description:  descriptionTemplate},
       {_id:17, name: "Glove", description:  descriptionTemplate},
       {_id:18, name: "Mitten", description:  descriptionTemplate},
       {_id:19, name: "Boot", description:  descriptionTemplate},
       {_id:20, name: "Computer", description:  descriptionTemplate},
       {_id:21, name: "Phone", description:  descriptionTemplate},
       {_id:22, name: "Marker", description:  descriptionTemplate},
       {_id:23, name: "Tape", description:  descriptionTemplate},
       {_id:24, name: "Pen", description:  descriptionTemplate},
       {_id:25, name: "Brain", description:  descriptionTemplate},
       {_id:26, name: "Controller", description:  descriptionTemplate}
    ];

    dbo.collection("items").insertMany(itemsTemplate, function(err, res) {
      if (err)
      {
        console.log('unable to insert items');
      }
      else
      {
        console.log("Number of documents inserted: " + res.insertedCount);
      }
      db.close();
    });
});