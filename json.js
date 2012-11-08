// JS Data Structure
// Author: Elizabeth Adcock
// Data File
// Created on: 11/07/2012	

// an Object of JSON data

/* 
The data in this file represent those runners who have signed up early for the running club.  This 
file only contains ID, name and age. For the lab purpose it does not contain all the real life data items.
*/

var json = {
	"runners" : {
		"1" : {
			"id": 1,
			"name": "Bettie Rivard", 
			"age": 26,
			"shoes" : { type : "Nike", size : 9} 
		},

		"2" : {
			"id": 2,
			"name": "Alyssa Adcock", 
			"age": 10,
			"shoes" : { type : "Reebok", size : 8} 
		},

		"3" : {
			"id": 3,
			"name": "Nico Vietts", 
			"age": 15,
			"shoes" : { type : "New Balance", size : 7} 
		},

		"4" : {
			"id": 4,
			"name": "Jeff Gable",
			"age": 34,
			"shoes" : { type : "Nike", size : 10} 
		}
	}
};


// an Array of JSON data
var json2 = {
	"runners": [
		{
			"id": 1,
			"name": "Bettie Rivard", 
			"age": 26
		},
		{
			"id": 2,
			"name": "Alyssa Adcock", 
			"age": 10
		},
		{
			"id": 3,
			"name": "Nico Vietts", 
			"age": 15
		},
		{
			"id": 4,
			"name": "Jeff Gable", 
			"age": 34
		}
	]
};