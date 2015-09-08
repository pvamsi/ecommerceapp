var express = require("express");

var mongoose = require("mongoose"),
	bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/ecomm');

var offersSchema={
	src:String,
	title:String,
	url:String,
	price:Number,
	desc:String,
	offer:String,
	prodId:Number
}

var productsSchema={
	src:String,
	title:String,
	desc:String,
	head:String,
	price:Number,
	alt:String,
	company:Number,
	product:String,
	category:String,
	mainkey:String,
	key:String
}

var data = mongoose.model('data',offersSchema, 'offers')
var product = mongoose.model('product',productsSchema, 'products')
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));


app.get('/offers',function(req,res){
	data.find(function(err,doc){
	res.json(doc);
});
});




app.get('/products',function(req,res){
	product.find(function(err,doc){
	res.json(doc);
});
	
});
app.listen(3000);
console.log("server running");