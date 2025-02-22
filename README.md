# Slotify
# Slotify - Appointment Booking System

Slotify is a simple, elegant appointment booking system that allows users to schedule meetings effortlessly. Built with modern web technologies, it provides a clean interface for booking appointments and handles email notifications automatically.


## Features

- 📅 Easy appointment scheduling
- 📱 Responsive design for all devices
- ✉️ Automatic email notifications
- 🕒 Real-time availability checking
- 🎨 Clean and intuitive interface

## Live Demo

Visit the live demo: [Slotify Demo](https://shadab-2604.github.io/Slotify/)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- EmailJS for notifications

## Getting Started

### Prerequisites

- A modern web browser
- EmailJS account for email notifications

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shadab-2604/Slotify.git
```

2. Navigate to the project directory:
```bash
cd Slotify
```

3. Open `index.html` in your web browser or set up a local server.

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Set up an email template
4. Replace the following in `index.html`:
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
```

## Usage

1. Fill in the required information:
   - Full Name
   - Phone Number
   - Preferred Date
   - Preferred Time
   - Purpose of Meeting

2. Click "Book Appointment"
3. Receive confirmation email

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Shadab - [GitHub Profile](https://github.com/Shadab-2604)

Project Link: [https://github.com/Shadab-2604/Slotify](https://github.com/Shadab-2604/Slotify)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- EmailJS for email service integration
- Modern web development community
- All contributors who help improve this project
