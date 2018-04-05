// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TododApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Krzysztof'}).then((result) => {
  //   console.log(result);
  // })

  // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    // console.log(result);
    // });
  // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5abab4a84f4012074d6d8847")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // client.close();

  // client.close();
});
