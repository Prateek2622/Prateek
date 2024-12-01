function calculateArea() {
    // Helper function to validate input
    function isValidNumber(value) {
        return !isNaN(value) && value > 0;
    }

    let width, height;

    // Prompt user for valid width
    do {
        width = parseFloat(prompt("Enter a positive number for the width:"));
        if (!isValidNumber(width)) {
            console.log("Invalid input. Please enter a positive number for the width.");
        }
    } while (!isValidNumber(width));

    // Prompt user for valid height
    do {
        height = parseFloat(prompt("Enter a positive number for the height:"));
        if (!isValidNumber(height)) {
            console.log("Invalid input. Please enter a positive number for the height.");
        }
    } while (!isValidNumber(height));

    // Calculate the area
    const area = width * height;

    // Display the result
    console.log(`The area of the rectangle is ${area}`);
}

// Call the function to execute
calculateArea();
