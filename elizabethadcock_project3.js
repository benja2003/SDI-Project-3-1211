// Author: Elizabeth Adcock
// Created for: SDI-O Online Course (SDI-O 1211) : Project 3 / Deliverable 3
// Created on: 11/07/12

// Define & set Global variables for this JS file
var	niceRunningDay = true,
	idealRunningDay = false,
	personObject = {},
	idealRunningTime = 10,  //using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...
	waitTime = 0,
	racers = [], 
	slang1 = "Will run for wine!",
	slangPhase = ""
;


//Define the RUNNING OBJECT
var running = {						
		sunnyDay: true,
		surfsUp: false,
		personObj: {},
		totalWaitTime: 0,
		runnerList: [],
		numOfPeopleRunning: 4,	
		numOfRunners: 0,
		nextRunner: "",
		slang2: "Running is cheaper then therapy",

		// (Method Function): Check to see if it is a nice day for a run
		goodRunDay: function (goodDay) { 
			if (goodDay === true) {   
				console.log ("(Method Function / Returned Boolean): It is a great day for a run!!");
				return (true);
			}else {
				console.log ("(Method Function / Returned Boolean): It is not a great day for the a run.");
				return (false);
			}
		},  


		// (Method Function): Check to see if it will be a sunny day and good for running
		goodRunningDay: function () { 
			running.runningDayTrue (true);   //Calls a "Method Mutator". Set the runningDay object property
			console.log ("(Method Mutator): Set the property runningDayTrue to always be true");
			if (this.sunnyDay && this.runningDay) {   
				console.log ("(Method Function): It is a great day for a run!!");
				return (true);
			}else {     
				console.log ("(Method Function): It is not a great day for a run.");
				return (false);
			}
		},  //end goodRunningDay function


		// (Method Mutator): Set the runningDay object property
		runningDayTrue: function (boolean) { 
			this.runningDay = boolean;
		},  //end runningDayTrue function


		//(JSON Object Argument, Returns a Javascript Object): Extracting the JSON data and returning a Javascript object	
		extractEarlyBirdRunners: function (json) {			
			for (var key in json.runner){
				var	runner = json.runner[key];
					this.personObj[key] = new Object (); 
					this.personObj[key].id = runner.id;
					this.personObj[key].name = runner.name;
					this.personObj[key].age = runner.age;
					this.personObj[key].shoes = runner.shoes;
			};			
			return (this.personObj);  //returns the person Object
		},  //end extractEarlyBirdRunners function


		//(Method Function) : Add one new early bird runner to the personObject
		addToEarlyBirdRunner: function (personObject, id, name, age) { 
			personObject[id] = new Object ();
			personObject[id].id = id;
			personObject[id].name = name;
			personObject[id].age = age;
			return (personObject);
		},	//end addToEarlyBirdRunner function	


		//(Method Procedure): Determine if it is the ideal time of day to go out and run
		runTime: function (timeOfDay) { 
			var	currentTime = 7,	//this should be less then "timeOfDay". Using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...			
				timeRemaining = 0
			;

			console.log ("((Method Procedure): Below is the Output From The While loop): Listing shows the number of hrs remaining before the running weather is is at it's best.");
			this.totalWaitTime = timeOfDay - currentTime;  //Math

			while (currentTime < timeOfDay) {
				timeRemaining = this.totalWaitTime;
				console.log ("Current time is " + currentTime +":00.  The ideal time to run is at " + timeOfDay + ":00.  There is " + timeRemaining + " hrs. remaining till it is running time!!");
				currentTime = currentTime + 1;  //Math
			};
			console.log ("Time to go running!!!");
		},  //end runTime function


		// (Method Function): Return Number
		waitTime: function () { 
			return (this.totalWaitTime);
		},  //end waitTime function


		// (Method Function): extract the list of early bird runners, for an object.
		getEarlyBirdRunningGroup: function (personObject) {
			for (var key in personObject){
				this.runnerList.push(personObject[key].name);
			};			
			return (this.runnerList);  //returns the array of runners for the early bird runners.
		},  //end getEarlyBirdRunningGroup function	


		//(Method Procedure): Add Runner to the Array
		addRunner: function (runnerList, runnerName) { 
			runnerList.push(runnerName);
		}, //end addRunner


		//(Method Accessor): Get the number of runners running	
		getNumOfRunners: function (numRunner) {
			return (numRunner.length);
		}, //end getNumOfRunners


		//(Method Accessor): Get the next runner's name who is running
		getRunner: function (runnersArray) { 
			return (runnersArray[0]);
		}, 	//end getRunner	


		//(Array Function / Returned Array): Runners to start running.  Returns the number of remaining people in running group.
		startRun: function (runners) { 
			var numOfRunners = 3,
				percentOfRunnersRunning = 1,
				x = 1,
				totalNumOfRunners = 4,
				i = 1
			;

			//Call a "Method Procedure" : Pushes new runners into the end of an array.
			this.runnerList = runner;
			running.addRunner(this.runnerList, "Lizzy");
			running.addRunner(this.runnerList, "Bill");
			console.log ("(Method Procedure): added 2 more runners: This represents runners who are signing up during the day of the running club.");
			console.log (this.runnerList);

			//Call a "Method Accessor" : get the number of runners in the object array of runner names.
			console.log ("(Menthod Accessor): Runners's running the group.");
			this.numOfRunners = running.getNumOfRunners (this.runnerList);
			console.log ("There are " + this.numOfPeopleRunning + " people running today, and there are " + this.numOfRunners + " runners ready to run together. " + totalNumOfRunners + " groups of people running and runners listed below:");

			while (x <= totalNumOfRunners) {   //loops through the number of Runnerss we want to run sample date on
				console.log ("PEOPLE RUNNING: " + x);
				if (this.runnerList.length <= this.numOfPeopleRunning) {   
					while (i <= this.numOfPeopleRunning) {
						if (numOfRunning <= this.runnerList.length) {
							percentOfRunnersRunning = (((numOfRunners / this.numOfPeopleRunning).toFixed(2)) * 100);  //Math calculation
							console.log (this.runnerList [0] + " running " + i + ". " + percentOfRunnersRunning + "% of the runners have ran." );
							this.runnerList.push(this.runnerListrunner[0]);
							this.runnerList.shift();
						}else {	
							percentOfRunnersRunning = (((numOfRunning / this.numOfPeopleRunning).toFixed(2)) * 100);  //Math calculation
							console.log ("NO RUNNERS running " + i + ". " + percentOfRunnersRunning + "% of the runners have already ran." );
						};
						i++;
						numOfRunning++;
					};					

				}else {
					while (i <= this.numOfPeopleRunning) {
						percentOfRunnersRunning = (((numOfRunning / this.numOfPeopleRunning).toFixed(2)) * 100);  //Math Calculation
						console.log (this.runnerList [0] + " runs " + i + ". " + percentOfRunnersRunning + "% of the people who have already ran." );
						this.runnerList.push(this.runnerList [0]);
						this.runnerList.shift();
						i++;
						numOfRunning++;
					};
				};
				numOfRunning = 1;
				percentOfRunnersRunning = 0;
				i = 1;
				x++;
			};

			//Calls a "Method Accessor": Gets the next runner in line to run in the next group of people.
			this.nextRunner = running.getRunner(this.runnerList);
			console.log ("(Method Accessor) " + this.nextRunner + " will be the next runner to run when this group gets back.");

			return (this.runnerList);	
		},  //end startRun function


		//(Method Function) 
		slangVerse: function (phase1) { 
			var phase = "";

			phase = "(Method Function : Return String): Did you see the cool shirts for sale at the last race?  They say things like " + phase1 + ", " + this.phase2 + ", etc...";
			return (phase);	
		}  //end slangVerse function
};


// MAIN BODY AREA BELOW

//Conditional Statement :: Calls a "Method Function" :: Returns a Boolean
if (running.goodRunDay (niceRunningDay)) {

	//Calls a "Method Function" :: Returns Boolean
	idealRunningDay = running.goodRunDay ();
	if (idealRunningDay) {
		console.log ("(Returned Boolean):Is it a good day for a run: ", idealRunningDay);

		//Calls two "Method Functions" ::  Returned Object :: Extract the Runners from a JSON Object, and return a Javascript object. Then add one runner to the object
		personObject = running.extractEarlyBirdRunners(json);
		personObject = surfing.addToEarlyBirdRunner(personObject, 5, "Lindsay", 20);
		console.log ("((Method Function / Returned Object) : JSON Object Argument / Returned an Object with a new runner added): ", personObject);

		//Calls a "Method Procedure"
		running.runTime(idealRunningTime);

		//Calls a "Method Function" : Returns Number
		waitTime = running.waitTime();
		console.log ("(Method Function / Returned Number): The total hours the runners had to wait before going running: ", waitTime +" hrs.");

		//Calls a "Method Function" : (Creates an array, from an object, of those runners who signed up early for the running group
		runners = running.getEarlyBirdRunningGroup (personObject);
		console.log ("(Method Function / Return Array): Created an ARRAY, from an OBJECT, of those runners who signed up early for the running.  See array below.");
		console.log (runners);

		//Calls a "Method Function" :: Returned Array
		runners = running.startRun(runners);
		console.log ("(Method Function / Returned Array): Here is a list of runners in the running group: ", runners);

		//Calls a "Method Function" :: Returned String
		slangPhase = running.slangVerse(slang1);
		console.log (slangPhase);

	};
};