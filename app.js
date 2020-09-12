const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "solid fruit"
});

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review:"sour"
});

const kiwi = new Fruit({
  name: "kiwi",
  rating: 10,
  review:"healthy"
});

const mango = new Fruit({
  name: "mango",
  rating: 10,
  review:"king"
});

const peach = new Fruit({
  rating: 9,
  review:"good"
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 8,
  review:"nice"
});
//
// Fruit.insertMany([orange,kiwi,mango],function(err){
//   if(err)
//   {
//     console.log(err);
//   }
//   else{
//     console.log("successfully inserted");
//   }
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "John",
  age: 37
});

const amy = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});
//person.save();
//fruit.save();
// peach.save();

//pineapple.save();
//amy.save();
Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }
  else{
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});


//
// Fruit.updateOne({_id: "5f36557eb40ab8a95bf5e49c"},{name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("updated successfully");
//   }
// });

//
//
//
// Fruit.deleteOne({name: "Peach"},function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("deleted peach from database");
//   }
// });




// Fruit.deleteMany({name: "Pineapple"},function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("deleted pineapples from database");
//   }
// });

//
// Person.deleteMany({name: "John"},function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("deleted successfully all the documents");
//   }
// });

//
// Person.deleteOne({name: "Amy"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("deleted amy");
//   }
// });
