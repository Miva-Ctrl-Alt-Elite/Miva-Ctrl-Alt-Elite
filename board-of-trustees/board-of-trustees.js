const members = {
  1: {
    name: "Morenike Oyewole",
    role: "Team Coordinator",
    bio: "Morenike oversees the entire project, managing team coordination, repository setup, integration, and final review. She ensures smooth collaboration, handles merges, and maintains project alignment.",
    img: "Images/Morenike-Oyewole.jpg"
  },
  2: {
    name: "Anita Chukwuma",
    role: "Developer",
    bio: "Anita developed the Products Showcase Page, focusing on layout structure, interactivity, and responsive presentation of product details.",
    img: "Images/Anita Professional Pic .jpg"
  },
  3: {
    name: "Diamond Angel",
    role: "Developer",
    bio: "Diamond built the Contact Page, including the Appointments and Inquiries sections, ensuring user-friendly interaction and accessibility.",
    img: "Images/DIAMOND ANGEL .jpg"
  },
  4: {
    name: "Michael Princewill",
    role: "Developer",
    bio: "Michael implemented the Global Navigation Bar and Footer, ensuring consistent link structures and smooth navigation across all pages.",
    img: "Images/MICHAEL_PRINCEWILL.PNG"
  },
  5: {
    name: "Woyengitari Olori",
    role: "Developer",
    bio: "Woyengitari created the Upcoming Events Page, featuring dynamic event listings and an integrated countdown timer.",
    img: "Images/Woyengitari Olori.jpg"
  },
  6: {
    name: "Dolapo Olaiya",
    role: "Developer",
    bio: "Dolapo developed the Board of Trustees Page, building the team grid layout with bio pop-ups, hover effects, and modal functionality.",
    img: "Images/Dolapo Olaiya.png"
  },
  7: {
    name: "Immanuel Aziba",
    role: "Quality Assurance Lead",
    bio: "Immanuel handled testing and validation, ensuring responsiveness, browser compatibility, and proper functionality of team modals and interactive components.",
    img: "Images/Manny Aziba Profile Pic 1.jpg"
  },
  8: {
    name: "Ojeabuo Destiny (Richies)",
    role: "JavaScript Interactivity Engineer",
    bio: "Richies developed site-wide JavaScript features, including the global marquee and various dynamic interactive elements.",
    img: "Images/OJEABUO EMMANUEL (Richies).jpg"
  },
  9: {
    name: "Precious Ukachukwu",
    role: "UI/UX Designer",
    bio: "Precious maintained styling consistency across the site, managing the colour palette, typography, and layout uniformity for a cohesive user experience.",
    img: "Images/Precious Ukachukwu.jpg"
  },
  10: {
    name: "Prosper Oseghale",
    role: "Documentation Specialist",
    bio: "Prosper prepared the project README and technical documentation, illustrating the website’s structure using the Document Object Model (DOM).",
    img: "Images/Prosper OSEGHALE(Minnie Oladepo).jpg"
  },
  11: {
    name: "Samuel Oyingoke",
    role: "Developer",
    bio: "Samuel supported the Product Showcase Page by improving its responsive layout and wiring up the product details modal for better user interaction.",
    img: "Images/Samuel Oyingoke.jpg"
  },
  12: {
    name: "Vanessa Omobo",
    role: "Developer",
    bio: "Vanessa designed and developed the Home Page, including the hero section, featured products area, and the introductory layout for a strong first impression.",
    img: "Images/Vanessa Omobo.jpg"
  }
};

// Select elements
const modal = document.getElementById("member-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalRole = document.getElementById("modal-role");
const modalBio = document.getElementById("modal-bio");
const closeBtn = document.querySelector(".modal-close-btn");

// Open modal
document.querySelectorAll(".member-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.member;
    const m = members[id];

    modalImg.src = m.img;
    modalName.textContent = m.name;
    modalRole.textContent = m.role;
    modalBio.textContent = m.bio;

    modal.classList.add("is-open");
  });
});

// Close modal
closeBtn.addEventListener("click", () => modal.classList.remove("is-open"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("is-open");
});
