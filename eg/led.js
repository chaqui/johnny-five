var five = require("../lib/johnny-five.js"),
  board = new five.Board();

board.on("ready", function() {
  // Default to pin 13
  var led = new five.Led(process.argv[2] || 13);

  this.repl.inject({
    led: led
  });

  led.blink();
});

// @markdown
// This script will make `led` available in the REPL, by default on pin 13.
// Now you can try, e.g.:
//
// ```js
// >> led.stop() // to stop blinking
// // then
// >> led.on()
// // or
// >> led.off()
// ```
//
// `led.strobe()` is the same as `led.blink()`
//
// To use other `Led` methods, like `fade`, `pulse`, `animate`, you'll need to
// wire the LED to a PWM pin. (Denoted by a `~` before the pin number.) Make sure
// to run the script with the correct pin number:
//
// `node eg/led.js [pinNumber]`
// @markdown
