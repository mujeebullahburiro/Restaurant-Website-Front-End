// Menu Button Toggle
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

// Scroll Top
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active')
    }
    else {
        document.querySelector('#scroll-top').classList.remove('active')   
    }

}


// Website Loader 
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out')
}
function fadeOut(){
    setInterval(loader, 3000)
}

window.onload = fadeOut();



// Home Image Changed
// Define an array of image file paths
const imagePaths = ['../images/home-img-3.png', '../images/home-img-4.png','../images/home-img-5.png', '../images/home-img-2.png'];

// Get the image element and initialize the index
const headerImage = document.querySelector('.image img');
let imageIndex = 0;

// Set an interval to update the image source every 8 seconds
setInterval(() => {
  // Increment the index and reset to 0 if it exceeds the array length
  imageIndex = (imageIndex + 1) % imagePaths.length;
  // Update the image source with a fade-in effect
  headerImage.style.opacity = 0;
  setTimeout(() => {
    headerImage.src = imagePaths[imageIndex];
    headerImage.style.opacity = 1;
  }, 500);
}, 5000);


