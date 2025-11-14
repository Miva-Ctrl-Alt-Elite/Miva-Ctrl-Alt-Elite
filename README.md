# Miva-Ctrl-Alt-Elite

## Overview
This project **The Monarch** is a **responsive 5-paged e-commerce website** to showcase a fashion brand's collections, introduce it's team, highlight upcoming events, and allow visitors to easily book appointments or enquiries. The website provides a smooth user journey across multiple pages, from the home page to product showcases, team profiles, event listings, and contact forms while maintaining consistent navigation, visual appeal and clear call-to-action elements throughout.


---


## Table of Contents 
* [Overview](#overview)
* [Screenshots](#screenshots)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [DOM Structure](#dom-structure)
* [How to Run](#how-to-run)
* [Acknowledgements](#acknowledgements)


---


## Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Products
![Products](screenshots/products.png)

### Board of Trustees
![Board of Trustees](screenshots/trustees.png)

### Inquiries
![Inquiries](screenshots/inquiries.png)

### Events
![Events](screenshots/events.png)


---


## Features
-  **Responsive Design:** Seamlessly adapts to all devices including mobile, tablet, and desktop.
- **Interactive Elements:** Engaging carousels,hover effects, and click interactions to enhance user experience.
- **Product Showcase:** Grid layout with organized categories, images, descriptions, and quick access to booking or contact options.
- **Team & Brand Highlights:** Grid layout for team member photos with clear representation of roles and mission; click to reveal short biographies for each member.
- **Event Updates:** Countdown timers and scrolling marquees to keep visitors informed about upcoming events.
- **Contact and Appointment:** User-friendly forms for inquiries and appointment bookings featuring validation with success or error alerts
- **Consistent Navigation & Layout:** Persistent navbar and footer across all pages, including active link highlights for easy navigation
- **Accessibility and Visual Appeal:** Designed with readability, contrast, and interactive visual elements in mind.
- **Global Marquee Banner:** This project includes a dynamic site-wide scrolling banner that displays page-specific announcements.
   ### Key Features
   - Page specific messages from a single data file (assets/data.js)
   - Automatic rendering via assets/marquee.js
   - Smooth infinite scrolling with CSS animation
   - Hover to pause for better readability
   - Centralized control for easy updates

   ### Usage
      ```html
   <!-- Include the marquee CSS -->
   <link rel="stylesheet" href="assets/marquee.css">

   <!-- Add the marquee container anywhere in your page -->
   <div class="marquee" data-page="home"></div>

   <!-- Load the data and script files after the marquee container -->
   <script src="assets/data.js"></script>
   <script src="assets/marquee.js"></script>
   ```
   data-page must match a key in assets/data.js (e.g., home, evens, products, trustees, contact).

- **Global Navbar:**

- **Global Footer:**


---


## Technologies Used
- **HTML5** 
- **CSS** 
- **Vanilla JavaScript**
- **Git & Github**
- **Figma** 


---


## DOM Structure



---


---


## How to Run
1. **Clone this repository** 
```bash
   git clone https://github.com/Miva-Ctrl-Alt-Elite/Miva-Ctrl-Alt-Elite
```
   

2. Navigate into the project folder
```bash
    cd Miva-Ctrl-Alt-Elite
 ```

3. Open the website
- Double-click index.html in your file explorer or
- Use Live Server in VS Code for live preview


---


## Acknowledgements
We would like to thank all team members who contributed to this project for their effort and collaboration.



