function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Add to Cart placeholder (expand with a real cart system)
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!');
    });
});