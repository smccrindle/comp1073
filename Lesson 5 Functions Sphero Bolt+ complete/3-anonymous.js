// Sometimes we just need to run a short code block in one place, and so we don't need a named FUNCTION. In this case, we can use an ANONYMOUS FUNCTION, which is a function that is defined without a name and is often used as a callback or event handler.

// STEP 1: Create an event handler to listen for collisions, and add an anonymous function to handle the event
registerEvent(EventType.onCollision, async () => {
	// STEP 2: Stop the robot from rolling, set the main LED to red, and play an explosion animation
	stopRoll();
	setMainLed({ r: 255, g: 0, b: 0 });
	await setDisplayAnimation("explosions", false);
	// STEP 3: Wait for the explosion animation to finish, then set the main LED to white, change the heading randomly, and roll again
	await speak("Collision", false);
	let randomHeading = Math.floor(Math.random() * 180);
	setHeading((getHeading() + randomHeading));
	await delay(0.5);
	setMainLed({ r: 255, g: 255, b: 255 });
	setSpeed(100);
});

// STEP 4: Run the program and see how the robot reacts to collisions
async function startProgram() {
	setMainLed({
		r: 255,
		g: 255,
		b: 255
	});
	setSpeed(100);
};