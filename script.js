
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop();
  if (path.includes("index")) document.getElementById("home-link").classList.add("active");
  if (path.includes("aboutme")) document.getElementById("about-link").classList.add("active");
});
