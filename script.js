// Get the necessary elements
const showMoreBtn = document.getElementById('showMoreBtn');
const content = document.getElementById('content');
const changeContentBtn = document.getElementById('changeContentBtn');
const backBtn = document.getElementById('backBtn');

// Function to toggle visibility of content div
function toggleContent() {
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
}

// Function to handle changing content
function changeContent() {
  // Example: Changing image source and description text
  document.getElementById('image').src = 'new_image.jpg';
  document.getElementById('description').innerText = 'New Description';
}

// Event listener for "Show More" button
showMoreBtn.addEventListener('click', toggleContent);

// Event listener for "Change Content" button
changeContentBtn.addEventListener('click', changeContent);

// Event listener for "Back" button
backBtn.addEventListener('click', toggleContent);
