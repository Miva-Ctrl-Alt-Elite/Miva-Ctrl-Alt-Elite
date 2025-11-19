document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");

  if (!footerContainer) {
    return;
  }

  footerContainer.innerHTML = `
    <div class="footer-container">
      <div class="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Contact Info</h3>
        <p>123 Fashion Avenue Lekki, Lagos Nigeria</p>
        <p>Phone: +234 080-123-4567<br>
          Email: hello@themonarch.com</p>
        <p>Hours: Mon–Sat 10AM–8PM</p>
      </div>

      <div class="footer-column">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <div class="newsletter">
          <p>Subscribe to our newsletter</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">
                <svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-paper-plane" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>924</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M17,1.042 L11.436,14.954 L7.958,11.477 L8.653,13.563 L7.03,14.958 L7.03,11.563 L14.984,3.375 L6.047,9.969 L1,8.694 L17,1.042 Z" fill="#434343" class="si-glyph-fill"> </path> </g> </g></svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 The Monarch. All rights reserved. Crafted with elegance.</p>
    </div>
    `;
});
