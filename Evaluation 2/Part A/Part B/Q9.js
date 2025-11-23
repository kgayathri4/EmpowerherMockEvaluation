function displayCar(){
    console.log("This is a car");
}
function displayTrunk(){
    console.log("This is a trunk");
}
function displayBike(){
    console.log("This is a bike");
}
function vehicleInfo(vehicleCategory, callback){
    console.log("Vehicle Category: ", vehicleCategory);
    callback();
}
vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTrunk);
vehicleInfo("Bike", displayBike);