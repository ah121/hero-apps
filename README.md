App Store:
A modern, responsive application interface designed to display comprehensive details for a single application, including statistics, user reviews, and an interactive rating breakdown.

Live Demo:
Experience the live application deployed via Netlify:

https://hero-apps-store-ah.netlify.app/

Features:
Detailed App Information: Displays the app's image, title, developer name, and detailed description.

Key: Show such as total Downloads, Average Rating, and Total Reviews.

Installation Logic: Features an interactive "Install Now" button that displays the app Size and is disabled once the app is installed.

Rating Chart: Includes a responsive horizontal Bar Chart to illustrate the distribution of ratings.

Responsive Design: Optimized layout for seamless viewing on both mobile and desktop devices.

Error & Loading Handling: Utilizes a Spinner component during data loading and redirects to an /error page if the app data is not found.

Notifications: Uses react-toastify for simple, non-blocking user feedback.

Technologies Used:
This project is built using modern JavaScript libraries and tools:

Javascript: For the core logic.

React: For the core application framework.

React Router: For navigation.

Recharts: A composable charting library used for the ratings bar chart.

Tailwind CSS: Based on the utility classes.

React Toastify: For displaying success/error notifications.

Custom Hooks: For easy handling of logic, state management and API calls.
