const sendEmail = require("./utils/sendEmail");

sendEmail("Chidinma.obodeh@duke.edu", "Test Email", "Hello! This is a test email from 34TH Street SMTP.")
    .then(() => console.log("Test email sent"))
    .catch((err) => console.error("Failed to send test email:", err));
