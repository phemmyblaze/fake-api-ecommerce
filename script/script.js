document.addEventListener("DOMContentLoaded", function () {
    let products = document.querySelector(".products");
      async function getProducts(url) {
        let data = await fetch(url);
        let result = await data.json();
        
        for (let i = 0; i < result.length; i++) {

            let images = result[i].images[1];
            let title =  result[i].title;
            let category = result[i].category.name;
            let description = result[i].description;

           products.innerHTML += `
                <div class="product">
                    <img src="${images}" alt="" class="product-img">
                    <h2 class="product-title">${title}</h2>
                    <h4 class="product-category">${category}</h4>
                    <p class="product-description">${description}</p>
                    <div class="product-price-container">
                        <h3 class="product-price">$ ${result[i].price}</h3>
                        
                        <a href="#" data-productId="${result[i].id}" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                        
                    </div>
                </div>

            `;
            
        }

    }

    // let btn = document.createElement('btn')

    // btn.textContent = "Add to cart"
    // btn.className= "add"

    // btn.addEventListener("click", function (e) {
    //     console.log('btn clicked')
    // })

    // document.querySelector(".products").querySelector(".product-price-container").appendChild(btn)

    ///ADD TO CART FUNCTION
    let btn = document.querySelectorAll("add-to-cart");
    console.log(btn);
    
    btn.forEach(btn => {
        btn.addEventListener('click', () => {
          alert('add to cart');
        });
      })

    // const list = document.getElementsByClassName("add-to-cart")[0];
    // console.log(list);
    // list.getElementsByClassName("")[0].innerHTML = "Milk";

  

//   getProducts("https://fakestoreapi.com/products");
  getProducts("https://api.escuelajs.co/api/v1/products");
//   getProducts('https://api.storerestapi.com/products');
});



//.length > 20 ? description.substring(0, 90).concat('...more') : description