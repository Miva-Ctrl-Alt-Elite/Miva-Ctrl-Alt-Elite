# Testing & Validation — How I'll Be Testing

1. Open each page → check layout in Chrome DevTools (360px, 768px, 1024px).
2. Validate HTML/CSS via [W3C Validator](https://validator.w3.org/) and [CSS Validator](https://jigsaw.w3.org/css-validator/).
3. Check console — ensure no red errors.
4. Test each JS feature:
   - Home : Marquee scrolls and pauses on hover  
   - Product : Add to Cart persists  
   - Board : Trustee cards animate  
   - Inquire : Form validation  
   - Events : Countdown / modal  
   - Contact : Form success message
5. Run Lighthouse → export HTML report into `/testing/validation/lighthouse-report.html`.
6. Log bugs in `bug-report.csv`.
