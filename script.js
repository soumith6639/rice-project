// Function to handle form submission to the backend API
function submitForm(apiEndpoint, formId) {
  const form = document.getElementById(formId);
  const formData = new FormData(form);
  const jsonData = {};

  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  fetch("http://127.0.0.1:5000" + apiEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      alert(data.message || "Submitted successfully!");
      form.reset();
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    });

  return false;
}


// Show back-to-top button when scrolling
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopButton.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Falling rice grain animation
const riceContainer = document.createElement('div');
riceContainer.classList.add('rice-container');
document.body.appendChild(riceContainer);

function createRiceGrain() {
  const grain = document.createElement('div');
  grain.classList.add('rice-grain');
  grain.style.left = `${Math.random() * 100}vw`;
  grain.style.animationDuration = `${Math.random() * 3 + 2}s`;
  riceContainer.appendChild(grain);
  setTimeout(() => grain.remove(), 5000);
}

setInterval(createRiceGrain, 200);
