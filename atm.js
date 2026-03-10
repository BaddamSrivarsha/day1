/**
 * Simple ATM Simulation Project
 * This program can be run directly in the browser console or included in an HTML file.
 */

function runATM() {
    // Variable to maintain the user's account balance
    let balance = 1000; // Starting with a default balance of $1000
    let choice;

    // Use a do...while loop to continuously display the ATM menu
    do {
        // Display the ATM options and ask the user to enter their choice
        // The prompt() function displays a dialog with an optional message prompting the user to input some text
        choice = prompt(
            "Welcome to the ATM Simulation!\n\n" +
            "Please select an option:\n" +
            "1. Check Balance\n" +
            "2. Deposit Money\n" +
            "3. Withdraw Money\n" +
            "4. Exit\n\n" +
            "Enter your choice (1-4):"
        );

        // If the user clicks Cancel, choice will be null. We handle this to prevent endless loops.
        if (choice === null) {
            choice = "4"; 
        }

        // Use a switch statement to handle the user's choice
        switch (choice) {
            case "1":
                // 1. Check Balance: Display the current account balance
                alert("Your current balance is: $" + balance.toFixed(2));
                break;

            case "2":
                // 2. Deposit Money: Ask for an amount and add it to the balance
                let depositAmountStr = prompt("Enter the amount you wish to deposit:");
                
                if (depositAmountStr !== null) {
                    let depositAmount = parseFloat(depositAmountStr);
                    
                    // Validate the input to ensure it's a positive number
                    if (!isNaN(depositAmount) && depositAmount > 0) {
                        balance += depositAmount; // Add to balance
                        alert("Successfully deposited $" + depositAmount.toFixed(2) + ". Your new balance is: $" + balance.toFixed(2));
                    } else {
                        alert("Invalid amount. Please enter a valid positive number.");
                    }
                }
                break;

            case "3":
                // 3. Withdraw Money: Ask for an amount and subtract it if sufficient balance exists
                let withdrawAmountStr = prompt("Enter the amount you wish to withdraw:");
                
                if (withdrawAmountStr !== null) {
                    let withdrawAmount = parseFloat(withdrawAmountStr);
                    
                    // Validate the input to ensure it's a positive number
                    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
                        // Check if there is sufficient balance
                        if (withdrawAmount <= balance) {
                            balance -= withdrawAmount; // Subtract from balance
                            alert("Successfully withdrew $" + withdrawAmount.toFixed(2) + ". Your new balance is: $" + balance.toFixed(2));
                        } else {
                            alert("Insufficient funds. Your current balance is: $" + balance.toFixed(2));
                        }
                    } else {
                        alert("Invalid amount. Please enter a valid positive number.");
                    }
                }
                break;

            case "4":
                // 4. Exit: Display a thank you message
                alert("Thank you for using the ATM Simulation. Goodbye!");
                break;

            default:
                // Handle invalid inputs that are not 1, 2, 3, or 4
                alert("Invalid choice. Please enter a number between 1 and 4.");
                break;
        }

    // The program should continue running until the user selects exit (choice "4")
    } while (choice !== "4");
}

// Execute the simulation function
runATM();