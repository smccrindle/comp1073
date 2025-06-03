async function startProgram() {
	let currentHeading = 0;
	// Drive the robot in a complete circle, using 12 straight line segments and changing the direction 30 degrees with each iteration of the below loop
	while (currentHeading < 360) {
		// STEP 1a: declare a local variable named newLedColor, and initialize it by calling the function getRgbColorFromHue()

		// STEP 1b: pass the currentHeading variable into the function call above as an argument
		await scrollMatrixText(String(currentHeading), newLedColor, 24, false);
		await setMainLed(newLedColor);
		await roll(currentHeading, 50, 1);
		currentHeading = currentHeading + 30;
	};
	await setDisplayImage("slightly-smiling");
};

// Function to convert the heading (0-360 degrees) to a color, based on a color wheel
// STEP 2: Add a parameter called hueDegrees to the below function
function getRgbColorFromHue() {
    // Calculate raw RGB values using the cosine formula
    let red = 256 * Math.cos(degreesToRadians(hueDegrees));
    let green = 256 * Math.cos(degreesToRadians(hueDegrees + 120));
    let blue = 256 * Math.cos(degreesToRadians(hueDegrees - 120));

    // Clamp values to the 0-255 range and round to the nearest integer
    red = Math.round(Math.max(0, Math.min(255, red)));
    green = Math.round(Math.max(0, Math.min(255, green)));
    blue = Math.round(Math.max(0, Math.min(255, blue)));

    // STEP 3: Return the RGB values as a JavaScript object
    
};

// Helper function used to convert degrees to radians, as Math.cos expects radians
function degreesToRadians(degrees) {
	let radianConversion = degrees * (Math.PI / 180);
	return radianConversion;
};

// STEP 4: Try it out! What customizations can you make to this program?
