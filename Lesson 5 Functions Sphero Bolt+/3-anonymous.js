// Sometimes we just need to run a short code block in one place, and so we don't need a named FUNCTION. In this case, we can use an ANONYMOUS FUNCTION, which is a function that is defined without a name and is often used as a callback or event handler.

// STEP 1: Create an event handler to listen for collisions, and add an anonymous function to handle the event

	// STEP 2: Stop the robot from rolling, set the main LED to red, and play an explosion animation
	
	// STEP 3a: Make the robot say, "Collision", create a variable for a random heading, then set the heading
	
	// STEP 3b: Wait for half a second, set the main LED to white, and roll again
	


// STEP 4: Run the program and see how the robot reacts to collisions

async function startProgram() {
	setMainLed({
		r: 255,
		g: 255,
		b: 255
	});
	setSpeed(100);
};