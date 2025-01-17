/* Variables
-------------------------------------------------- */
// STEP 1a: Grab the first <dd> element for displaying the latitude

// STEP 1b: Grab the second <dd> element for displaying the longitude

// STEP 1c: Grab the <p> element for outputting geolocation status messages

// STEP 1d: Grap the <a> element to use as a link to OpenMaps if the geolocation was successful


/* Functions
-------------------------------------------------- */
// STEP 3b: Build out the success() function, receiving the position as a parameter

  // STEP 3c: Output the latitude and longitude coordinates to the <dd> elements in steps 1a and 1b
  
  
  // STEP 3d: Build out the link to OpenStreetMap
  
  


// STEP 4a: Construct the error() function

  // STEP 4b: Output a suitable error message
  


/* Script Logic
-------------------------------------------------- */
// STEP 2a: Check support (the use will be asked for permission to allow for geolocation for security purposes, which is a good thing)

  // STEP 2b: Geolocation is not supported, so output useful message
  

  // STEP 2c: Geolocation is supported, so let's give the user a useful message
  
  // STEP 2d: Let's have a look at the geolocation object
  
  // STEP 3a: Use the getCurrentPosition() method, which passes the device position to a named callback function (if successful), or it calls an error function if it fails
  

// STEP 5: Try out the script on your mobile device - be sure to walk somewhere else in your office or classroom, then refresh the page to see your position change

/* This script adapted from the excellent code examples found at https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples with a tip of the hat to https://www.openstreetmap.org/ */