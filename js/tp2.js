$(document).ready(function () {
    //Les variables utiles
    let confirmationDelay = 5000;		//compteur pour confirmer la commande (5s)
    let cart = [];
    let ventesTotales = 0;
    let actualPrices = {
        subtotal: 0, shipping: 0, total: 5,
    }
    // let userchoosed = false;
    let idCountdown = 0;

    const products = [
        {id: 1, name: "Casque audio sans fil !",            price: 89.99,   image: "images/casqueEcoute.jpg"},
        {id: 2, name: "Montre intelligente",                price: 199.99,  image: "images/montreIntelligente.jpg"},
        {id: 3, name: "Sac à dos pour ordinateur portable", price: 49.99,   image: "images/sacAdos.jpg"},
        {id: 4, name: "Haut-parleur Bluetooth",             price: 59.99,   image: "images/hautParleur.jpg"},
        {id: 5, name: "Téléphone intelligent",              price: 699.99,  image: "images/telephoneIntelligent.jpg"},
        {id: 6, name: "Bracelet de suivi d’activité",       price: 79.99,   image: "images/bracelet.jpg"}
    ];



    /**
     * Crée un produit pour mettre dans la division cart-items.
     * @param item Le produit à afficher dans le cart.
     * @returns {string} le code html correspondant au porduit
     */
    function createCartItem(item) {
        const itemHtml = `
                    <div class="cart-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">${item.price.toFixed(2)} $</div>
                        </div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <span class="item-quantity">${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}">×</button>
                        </div>
                    </div>`;
        return itemHtml;
    }

    /**
     * Crée un produit pour mettre dans la division products-container.
     * @param item Les données de l'item
     * @returns {string} le code html correspondant au porduit
     */
    function createProduct(product) {
        const card = `
                <div class="product-card" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <div class="product-title">${product.name}</div>
                        <div class="product-price">${product.price.toFixed(2)} $</div>
                        <button class="add-to-cart" data-id="${product.id}">Ajouter au panier</button>
                    </div>
                </div>`;
        return card;
    }


    function initStore() {
        // S'il y a des items dans la mémoire du navigateur
        cart = JSON.parse(localStorage.getItem("cart")) || [];
        ventesTotales = parseInt(localStorage.getItem("ventesTotales")) || 0;

        // On enregistre le panier avant de fermer la fenetre de l'applicaiton
        $(window).on("beforeunload", () => {
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("ventesTotales", ventesTotales);

        });

        /* TODO
            - affiche les ventes totales
            - affiche tous les produits disponibles en appelant la méthode renderProducts
            - appelle la méthode pour mettre à jour l'affichage du cart.
         */




    }

    /**
     * Configure les boutons de la page (checkout-btn, checkout-confirmation, cancel-checkout,
     * cart-button, clear-total )
     *
     */
    function configureButtons() {





    }


    /**
     * Affiche les produits disponibles dans la section centrale de la page.
     */
    function renderProducts() {




    }

    /**
     * Ajoute un porduit dans le cart.
     * @param productId l'id du porduit à ajouter.
     */
    function addToCart(productId) {



    }


    /**
     * Met à jour le nombre d'item dans le cart.
     */
    function updateCartCount(){



    }

    /**
     * Calcule les trois prix du cart: subtotal, shipping et total.
     * @returns {{subtotal: number, shipping: number, total: *}}
     */
    function calculatePrices() {




    }


    /**
     * Met à jour l'affichage du cart. Elle vous est gracieusement offerte!
     */
    function updateCartDisplay() {
        const cartContainer = $('#cart-items');

        updateCartCount()
        actualPrices = calculatePrices();
        updatePrice(actualPrices);

        if (cart.length === 0) {
            cartContainer.html('<div class="empty-cart">Votre panier est vide</div>');
            $('#checkout-btn').prop('disabled', true).css('opacity', '0.6');
        } else {
            cartContainer.empty();
            $('#checkout-btn').prop('disabled', false).css('opacity', '1');

            cart.forEach(item => {
                const itemHtml = createCartItem(item);
                cartContainer.append(itemHtml);
            });
            $('.decrease').on('click', e => changeQuantity(e, -1));
            $('.increase').on('click', e => changeQuantity(e, 1));
            $('.remove-item').on('click', e => removeItem(e));
        }
    }

    /**
     * Met à jour les prix dans l'interface utilisateur.
     * @param prices
     */
    function updatePrice(prices) {



    }
	/**
     *     Ajoute ou retire 1 à la quantité du produit sur lequel on vient de cliquer.
     * @param event l'événement
     * @param delta + ou - 1
     */
    function changeQuantity(event, delta) {





    }

    /**
     * Retire du cart le produit sur lequel on vient de cliquer.
     * @param event
     */
    function removeItem(event) {

    }

    /**
     * Efface le contenu du cart et mets à jour l'affichage de ce dernier.
     */
    function clearCart() {

    }

    /**
     * Confirme ou infirme l'achat des produits dans le cart.
     */
    function checkout() {


    }



        initStore();
		configureButtons();
});
