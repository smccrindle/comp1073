async function startProgram() {
	// STEP 1: Copy all of the code here and paste it into the Sphero Edu Web App text editor

	// STEP 2: Place the robot on the floor and aim it - click on the "AIM" button at the top right of the Sphero Edu Web App

	// STEP 3: Change the color of the robot
	await setMainLed({r: 255, g: 140, b: 70});

    // STEP 4: Move the robot (Roll 0 degrees, speed 50, for 2 seconds)
	await roll(0, 50, 2);

	// STEP 5: Display emoji on the matrix
	await setDisplayImage("slightly-smiling");
}
