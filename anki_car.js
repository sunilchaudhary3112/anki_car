// //import {Bluetooth, VehicleScanner} from "anki-overdrive-api"
var anki = require('anki-overdrive-api');
console.log(anki);
const bluetooth = new anki.Bluetooth()
const scanner = new anki.VehicleScanner(bluetooth)
// scanner.findAll().then(vehicles => {
//     // Do something with vehicles...
//     console.log(vehicles);
// }).catch(/* Handle Errors */)

var blue_car = "eaa44ead7392";
var red_car = "c773068b8c30";
var red_black = "c55edb917115";

scanner.findById(red_car).then(vehicle => {
    console.log(vehicle);
    // Do something with vehicle...
    vehicle.addListener(function (message) {
        console.log(message);
        // console.log("drove over location: " + message.locationId);
        // console.log("current speed: " + message.speedMmPerSec);
        // Do something else with the message...
    });
    vehicle.connect().then(() => {
        vehicle.setSpeed(200);
        // Vehicles are using offset for positioning.
        //vehicle.changeLane(0);
        var i = 0;
        while (i < 1500) {
           //vehicle.setSpeed(400);
            if (i < 200) {
                vehicle.setSpeed(200);
            }
            else if (i > 200 & i < 250) {
               vehicle.setSpeed(0);
            }
            else if (i > 250 & i < 450) {
                vehicle.setSpeed(600);
            } else if (i > 450 & i < 500) {
                vehicle.setSpeed(0);
            }else if (i > 500 & i < 505) {
                vehicle.setSpeed(400);
                //vehicle.changeLane(-23);
                vehicle.uTurn(true);
            }
			else if(i > 505 && i < 600 ) {
				vehicle.setSpeed(400);
			}else if (i > 600 & i < 605) {
                vehicle.setSpeed(500);
                //vehicle.changeLane(-23);
                //vehicle.uTurn(true);
            }else if(i > 605 && i < 1000 ) {
				vehicle.setSpeed(500);
			}
            i++;
        }
    });
});
