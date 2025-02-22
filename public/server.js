require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Serve static files
// Serve static files (Frontend)
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Create endpoint to safely expose needed env variables
app.get('/config', (req, res) => {
    res.json({
        emailjs: {
            publicKey: process.env.EMAILJS_PUBLIC_KEY,
            serviceId: process.env.EMAILJS_SERVICE_ID,
            templateId: process.env.EMAILJS_TEMPLATE_ID
        },
        app: {
            name: process.env.APP_NAME,
            adminName: process.env.ADMIN_NAME
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});