document.getElementById('menu-btn').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

const images = [
    'assets/iamges/image1.jpg',
    'assets/iamges/image2.jpg',
    'assets/iamges/image3.jpg',
    'assets/iamges/image4.jpg',
];

let currentImageIndex = 0;
const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Function to update the image
function updateImage(index) {
    sliderImage.src = images[index];
}

// Previous Button Event Listener
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage(currentImageIndex);
});

// Next Button Event Listener
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage(currentImageIndex);
});
const categorySlider = document.getElementById('category-slider');
const prevBtn2 = document.getElementById('prevBtn-2');
const nextBtn2 = document.getElementById('nextBtn-2');

let scrollPosition = 0;
const categoryWidth = document.querySelector('.category-item').offsetWidth + 20; // Width of each item (with margin)
const maxScrollPosition = -(categoryWidth * (document.querySelectorAll('.category-item').length - 2)); // Max scroll (two items remain visible)

/* Next Button Event Listener */
nextBtn2.addEventListener('click', () => {
    if (scrollPosition > maxScrollPosition) {
        scrollPosition -= categoryWidth * 2; // Scroll two categories forward
        categorySlider.style.transform = `translateX(${scrollPosition}px)`;
    }
});

/* Previous Button Event Listener */
prevBtn2.addEventListener('click', () => {
    if (scrollPosition < 0) {
        scrollPosition += categoryWidth * 2; // Scroll two categories backward
        categorySlider.style.transform = `translateX(${scrollPosition}px)`;
    }
});

// Notification functionality
const heartIcons = document.querySelectorAll('.heart-icon');
const notification = document.getElementById('notification');

heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener('click', () => {
        notification.innerText = "You need to login"; // Change the notification text
        notification.classList.add('show');

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });
});

// Quantity increment/decrement functionality
const quantityInputs = document.querySelectorAll('#quantity-input');
const increaseQtyBtns = document.querySelectorAll('#increase-qty');
const decreaseQtyBtns = document.querySelectorAll('#decrease-qty');

increaseQtyBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
    });
});

decreaseQtyBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (parseInt(quantityInputs[index].value) > 1) {
            quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
        }
    });
});

// Add to Cart functionality
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

addToCartBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const productName = btn.closest('.product-container').querySelector('.product-name').innerText;
        notification.innerText = `${productName} added to cart!`;
        notification.classList.add('show');

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });
});
