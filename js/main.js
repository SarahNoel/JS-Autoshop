var Car = function(make, model, year, color, maxPassengers){
  this.make = make;
  this.model = model;
  this.year = year;
  this.state = "off";
  this.color = color;
  this.maxPassengers = maxPassengers;
  this.previous_owners = [];
  this.current_owner = "manufacturer";
  this.passengers =[];
};

var debbie = new Car("Subaru", "Impreza", 2008, "red", 4);

console.log(debbie);

Car.prototype.sale = function(buyer){
  this.previous_owners.push(this.current_owner);
  this.current_owner = buyer;
};

Car.prototype.paint = function (newColor) {
  this.color = newColor;
};

Car.prototype.start = function () {
  this.state = "on";
};

Car.prototype.off = function () {
  this.state = "off";
};

Car.prototype.driveTo = function(destination){
  if (this.state === "off"){
    return "Sorry, this car is off.";
  }else{
    console.log("Driving to "+ destination);
  }
};

Car.prototype.park = function (){
  if(this.state === "off"){
    console.log("Parked!");
  }
  else{
    console.log("Sorry, the car is still on.");
  }
};

Car.prototype.pickUp = function(passengers){
  if (this.state === "off"){
    return "Sorry, this car is off.";
  }else{
    if(this.passengers.length < this.maxPassengers){
    this.passengers.push(passengers);
    console.log("Driving to pick up "+ passengers);
      }
    else{
      console.log("Sorry, this car is full.");
    }
  }
};

Car.prototype.dropOff = function(person){
  var index = this.passengers.indexOf(person);
  if (this.state === "off"){
    return "Sorry, this car is off.";
  }else{
    if(index > -1){
    this.passengers.splice(index, 1);
    console.log("Dropped off "+ person);
    }
  }
};

