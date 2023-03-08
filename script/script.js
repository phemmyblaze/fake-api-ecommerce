// let product = 'products';
// product =  'items';



document.addEventListener("DOMContentLoaded", function () {
    let products = document.querySelector(".products");
      async function getProducts(url) {
        let data = await fetch(url);
        let result = await data.json();
        console.log(result);
        result.forEach(item => {
            let photo = item.images != 'doggy.jpg' ? item.images : "./error.jpg";
            products.innerHTML += `
                <div class="product">
                    <img src="${photo}" alt="" class="product-img">
                    <h2 class="product-title">${item.title}</h2>
                    <h4 class="product-category">${item.category.name}</h4>
                    <p class="product-description">${item.description}</p>
                    <div class="product-price-container">
                        <h3 class="product-price">$ ${item.price}</h3>
                        
                        <button onClick="addCart(${item.id})" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></button>
                        
                    </div>
                </div>

            `;
        });
    }
  getProducts("https://api.escuelajs.co/api/v1/products");

});

// function addCart(item) {
//     console.log(item);
// }

////FECTCHING EACH ITEM AND SAVING TO LOCAL STORAGE
let cartItem = [];
async function addCart(item){
    // console.log(item);
    let data = await fetch(`https://api.escuelajs.co/api/v1/products/${item}`);
    let result = await data.json()
    
    let check_cart = JSON.parse(localStorage.getItem("carts"));

    if (check_cart == null){
        let cart =  {
            image:result.images,
            title:result.title,
            price:result.price

        };
        cartItem.push(cart);
        console.log(cartItem);
        localStorage.setItem("carts", JSON.stringify(cartItem));
    } else {
        let newcart = {
            image:result.images,
            title:result.title,
            price:result.price,
        } 
        cartItem.push(newcart);
        localStorage.setItem("carts", JSON.stringify(cartItem));
    }
    

} 
////PERSISTENCE
window.onload = function () {
    let cart_Item = JSON.parse(localStorage.getItem("carts"));

    if (cart_Item!= null){
        localStorage.setItem("newCarts", JSON.stringify(cart_Item));

        let items = JSON.parse(localStorage.getItem("newCarts"));

        items.forEach(item => {
            cartItem.push(item);
        })
        localStorage.removeItem("newCarts");
    }
}







//.length > 20 ? description.substring(0, 90).concat('...more') : description