async function startProgram() {
	// The actions we used in the previous block of code were METHODS - functions that are attached to an object (the robot, in this case). FUNCTIONS are standalone blocks of code that can be called from anywhere in the program. They are reusable and can take parameters to customize their behavior.

	// STEP 7: Call or invoke the celebrate FUNCTION
	await celebrate();
	// STEP 8: Wait for 2 seconds using the delay METHOD
	await delay(2);
	// STEP 9: Call the celebrate function again
	await celebrate();
}

// STEP 1: Create a FUNCTION called celebrate (note that we are outside of the main program block)
async function celebrate() {
	// STEP 2: Set the main LED color to red
    await setMainLed({r: 255, g: 0, b: 0});
	// STEP 3: Roll the robot
    await roll(90, 80, 1);
	// STEP 4: Set the main LED color to blue
    await setMainLed({r: 0, g: 0, b: 255});
	// STEP 5: Roll the robot again
    await roll(270, 80, 1);
	// STEP 6: Play a random sound (we add a parameter of false to the play method of the Sound object, which means it will not wait for the sound to finish before continuing)
    await Sound.play(false);
}
