// //import {Bluetooth, VehicleScanner} from "anki-overdrive-api"
var anki = require('anki-overdrive-api');

console.log(anki);
const bluetooth = new anki.Bluetooth()
const scanner = new anki.VehicleScanner(bluetooth)

// scanner.findAll().then(vehicles => {
//     // Do something with vehicles...
//     console.log(vehicles);
// }).catch(/* Handle Errors */)


scanner.findById("eaa44ead7392").then(vehicle => {
    console.log(vehicle);
    // Do something with vehicle...

    vehicle.addListener(function (message) {
        console.log(message);
        // console.log("drove over location: " + message.locationId);
        // console.log("current speed: " + message.speedMmPerSec);
        // Do something else with the message...
    });

    vehicle.connect().then(() => {

        vehicle.setSpeed(100);

        // Vehicles are using offset for positioning.
        //vehicle.changeLane(0);
        var i = 0;
        while (i < 1000) {

            if (i < 200) {
                vehicle.setSpeed(250);
            }
            else if (i > 200 & i < 250) {
                vehicle.setSpeed(0);
            }
            else if (i > 250 & i < 350) {
                vehicle.setSpeed(500);
            } else if (i > 310 & i < 500) {
                vehicle.setSpeed(0);
            }

            i++;
        }

    });
});


// const anki = require('anki-overdrive-sdk');
// const eventemitter = anki.eventemitter;
// eventemitter.on('carReady', (device) => {
//     // New device
//     console.log('Device is ready to use');
//     console.log(device);
//     anki.setSpeed(device.id, 700, 5);

// });

// eventemitter.on('carStatusMessage', (device, status) => {
//     // New car status
//     console.log(status);
// })

// anki.setUp()
//     .then(() => {
//         // The connection is established and you can start to send commands now
//     })
//     .catch((err) => {
//         throw new Error(err)
//     });


// function exitHandler(options, err) {
//     anki.disconnectAll()
//     process.exit()
// }

// process.on('exit', exitHandler.bind(null, { cleanup: true }))
// process.on('SIGINT', exitHandler.bind(null, { exit: true }))
// process.on('uncaughtException', exitHandler.bind(null, { exit: true }))