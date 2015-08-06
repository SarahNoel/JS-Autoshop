var Car = function(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.state = "off";
  this.color = color;
  this.previous_owners = [];
  this.current_owner = "manufacturer";
  this.passengers =[];
};

var debbie = new Car("Subaru", "Impreza", 2008, "red");

console.log(debbie);


Car.prototype.sale = function(buyer){
  this.previous_owners.push(this.current_owner);
  this.current_owner = buyer;
};

console.log(debbie.sale("Sarah"));
console.log(debbie);

Car.prototype.paint = function (newColor) {
  this.color = newColor;
};

console.log(debbie.paint("Blue"));
console.log(debbie);

Car.prototype.start = function () {
  this.state = "on";
};

console.log(debbie.start());
console.log(debbie);

Car.prototype.off = function () {
  this.state = "off";
};

console.log(debbie.off());
console.log(debbie);

Car.prototype.driveTo = function(destination){
  if (this.state === "off"){
    return "Sorry, this car is off.";
  }else{
    console.log("Driving to "+ destination);
  }
};
debbie.start();
console.log(debbie.driveTo("Wonderland"));
console.log(debbie);

Car.prototype.park = function (){
  if(this.state === "off"){
    console.log("Parked!");
  }
  else{
    console.log("Sorry, the car is still on.");
  }
};

console.log(debbie.park());
debbie.off();
console.log(debbie.park());

Car.prototype.pickUp = function(passengers){
  if (this.state === "off"){
    return "Sorry, this car is off.";
  }else{
    this.passengers.push(passengers);
    console.log("Driving to pick up "+ passengers);
  }
};

debbie.start();
console.log(debbie.pickUp("Johhny"));
console.log(debbie);

Car.prototype.dropOff = function(passengers){
  if (this.state === "off"){
    return "Sorry, this car is off.";
  }else{
    this.passengers.splice(passengers);
    console.log("Dropped off "+ passengers);
  }
};

console.log(debbie.dropOff("Johhny"));
console.log(debbie);

