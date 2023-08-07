
document.addEventListener('DOMContentLoaded', () => {
	console.log("DOMContentLoaded event has fired.");
	/* Variables */	
	const openCartButton = document.getElementById('open-cart'),
			cartLightbox = document.getElementById('cartLightbox'),
			//button = document.getElementById('button'),
			//burgerCon = document.getElementById('burger-con'),
			closeCartButton = document.getElementById('close-cart'),
			showImageButtons = document.querySelectorAll('.show-image-btn'),
			productDiv = document.getElementById('product-container'),
			descriptionPara = document.getElementById('paragraph-product-con'),
			increaseButton = document.getElementById('increase-button'),
			decreaseButton = document.getElementById('decrease-button'),
			quantitySpan = document.getElementById('quantity'),
			products = [
				{
					name: "Apple",
					description: "Discover Apple Bubble Drink, a tantalizing fusion of crisp apple flavors and delightful bubbles. With each sip, enjoy the invigorating aroma and refreshing taste of freshly picked apples, while the playful bubbles dance on your tongue. Experience pure delight in this perfect harmony of nature’s sweetness and effervescent joy."
				},
				{
					name: "Blueberry",
					description: "Experience the rich and vibrant taste of Blueberry Bubble Drink, a burst of juicy blueberry goodness that awakens your senses. Let the sweet and tangy essence of blueberries transport you to a world of fruity delight, where every sip is a flavorful adventure."
				},
				{
					name: "Grape",
					description: "Indulge in the bold and sweet essence of Grape Bubble Drink, a grape-tastic sensation that will delight your taste buds. Immerse yourself in the rich purple hues of succulent grapes as their natural sweetness is transformed into an effervescent symphony of flavor. Elevate your refreshment experience with every sip."
				},
				{
					name: "Strawberry",
					description: "Embark on a journey of strawberry splendor with Strawberry Bubble Drink. Immerse yourself in the lush aroma of ripe strawberries and savor the juicy, red berry goodness. Each sip offers a burst of fruity delight that dances on your taste buds, leaving you craving more of this exquisite sensation."
				},
				{
					name: "Orange",
					description: "Experience the zesty and invigorating taste of Orange Bubble Drink. Immerse yourself in the bright citrusy aroma as you sip on the refreshing tang of ripe oranges. Let the playful bubbles amplify the natural sweetness, creating a harmonious blend of flavors that awaken your senses."
				},
				{
					name: "Pineapple",
					description: "Dive into the tropical paradise of Pineapple Bubble Drink, where the bold and tangy flavors of pineapple come alive. Experience the refreshing burst of tropical goodness with every sip, as the playful bubbles elevate the succulent pineapple taste to new heights of delight."
				},
				{
					name: "Apple",
					description: "Discover Apple Bubble Drink, a tantalizing fusion of crisp apple flavors and delightful bubbles. With each sip, enjoy the invigorating aroma and refreshing taste of freshly picked apples, while the playful bubbles dance on your tongue. Experience pure delight in this perfect harmony of nature’s sweetness and effervescent joy."
				},
			];
			

			//svgIcons = document.querySelectorAll('.svg-icon');
		
	/* Functions */

	/*function hamburgerMenu() {
        burgerCon.classList.toggle("slide-toggle");
        button.classList.toggle("expanded");
    }*/

    //button.addEventListener("click", hamburgerMenu, false);


	function openCartLightbox() {
		cartLightbox.style.display = 'grid';
	}

	function closeCartLightbox() {
		cartLightbox.style.display = 'none';
	}

	function updateProductContent(index) {
		const selectedProduct = products[index];
		productDiv.querySelector('h3').textContent = selectedProduct.name;
		descriptionPara.textContent = selectedProduct.description;
		
		const imagePath = 'images/' + selectedProduct.name.toLowerCase() + '.jpg';
		document.getElementById('product-image').src = imagePath;
	}
    
    const recommendationImages = document.querySelectorAll('.products img');
    
    recommendationImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            updateProductContent(index);
        });
    });

	/*function toggleText(textId) {
		const textElement = document.getElementById(textId);
		textElement.classList.toggle('hidden-text');
		textElement.classList.toggle('show-text');
	}*/

	/* Event Listeners */

	openCartButton.addEventListener('click', openCartLightbox);

	closeCartButton.addEventListener('click', closeCartLightbox);	

	showImageButtons.forEach(button => {
		button.addEventListener('click', () => {
			const image = button.previousElementSibling;
			image.classList.toggle('hidden-image');
		});
	});
		let currentQuantity = parseInt(quantitySpan.textContent);
	increaseButton.addEventListener('click', () => {
		currentQuantity++;
		quantitySpan.textContent = currentQuantity;
	});
	
	decreaseButton.addEventListener('click', () => {
		if (currentQuantity > 1) {
			currentQuantity--;
			quantitySpan.textContent = currentQuantity;
		}
	});

	/*svgIcons.forEach(svgIcon => {
		svgIcon.addEventListener('click', event => {
		const textoId = event.currentTarget.getAttribute('data-text-id');
		toggleText(textoId);
	});
	});*/
});
	