//🚀 Features

// 🎯 Reusable on any page — just change the data-page attribute

// add this 3 lines to your html file where you want the marquee to appear

//<div class="marquee" data-page="contact"></div>
//   <script src="assets/data.js"></script>
//   <script src="assets/marquee.js"></script>

// /assets/marquee.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".marquee").forEach(marquee => {
    const pageKey = marquee.dataset.page;
    const data = MARQUEE_DATA[pageKey];

    if (data) {
      const inner = document.createElement("div");
      inner.classList.add("marquee-inner");
      inner.textContent = data.text;
      inner.style.setProperty("--marquee-speed", `${data.speed}s`);
      marquee.appendChild(inner);
    } else {
      console.warn(`No marquee data found for page: ${pageKey}`);
    }
  });
});
