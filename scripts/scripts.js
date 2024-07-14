// Function to open the modal with product details
function openModal(title, imageUrl, description, price) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display='none'
}

function addToCart() {
    alert('Item added to cart!');
}

function showPumaModal() {
    const title = "Puma Shoes (Black)";
    const imageUrl = "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/386269/01/sv01/fnd/IND/fmt/png/All-Day-Active-Unisex-Sneakers";
    const description = "Introducing the Puma Shoes in Black, the perfect blend of style, comfort, and performance. Designed with the modern athlete in mind, these shoes feature a sleek and minimalist design that pairs effortlessly with any outfit. The upper is crafted from high-quality, breathable mesh, providing excellent ventilation to keep your feet cool and dry during intense workouts. The lightweight EVA midsole offers superior cushioning and shock absorption, ensuring a comfortable ride whether you're hitting the gym, going for a run, or just running errands around town. The durable rubber outsole delivers exceptional traction and grip on a variety of surfaces, making these shoes versatile for both indoor and outdoor activities. With a snug, supportive fit, these Puma Shoes in Black are designed to adapt to the natural shape of your foot, offering stability and reducing the risk of injury. The classic black colorway with subtle Puma branding adds a touch of elegance and sophistication, making these shoes not just a functional athletic shoe but also a stylish addition to your wardrobe. Experience the perfect combination of form and function with Puma Shoes in Black, where advanced technology meets contemporary design to elevate your performance and style.";
    const price = "₹1250";

    openModal(title, imageUrl, description,price);
}
function harryPotterModal() {
    const title = "Harry Potter and the deathly hollows";
    const imageUrl = "https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg";
    const description = "In Harry Potter and the Deathly Hallows, Harry, Ron, and Hermione set out on a perilous mission to defeat the dark wizard Voldemort once and for all. Leaving the safety of Hogwarts behind, they venture into the unknown, facing treacherous challenges and uncovering long-buried secrets. As the wizarding world teeters on the brink of war, Harry must make the ultimate sacrifice to protect the ones he loves and secure a future free from darkness..";
    const price = "₹850";

    openModal(title, imageUrl, description,price);
}
// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('productModal')) {
        closeModal();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
// scripts/scripts.js
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

/*
<div class="product" onclick="openModal('', '', '', '₹')">
    <img src="https://up.yimg.com/ib/th?id=OIP.hwV0H2UqiEK3bCJRJaNM8QHaMD&pid=Api&rs=1&c=1&qlt=95&w=65&h=107"style="height:325px" alt="Product Image">
        <h3></h3>
        <p>₹</p>
</div>
        <section class="hero" style="background-image: url('https://www.prym-fashion.com/fileadmin/prym-fashion.com/Bilder/Header-Images/menwomen_2_1920x1920.jpg'); background-size: cover; background-position:top; text-align: center; padding: 100px 200px ; color: white;">

*/