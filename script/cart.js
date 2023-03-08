let displaycart = JSON.parse(localStorage.getItem("carts"))
        console.log(displaycart)

        displaycart.forEach((item) => {
            // console.log(item.images)
            
            let display  = document.createElement("display")

            display.innerHTML = `
                
                <div class="product-cart">
                    
                    <img src="${item.image}" alt="" class="product-img">
                    <div class="cart_item">
                        <h2 class="product-title">${item.title}</h2>
                        <h3 class="product-price">$ ${item.price}</h3>
                    </div>

                    
                </div>

            `
            document.getElementById('products').append(display)

        })



        ////FUNCTION TO ADD ALL PRICES TOGETHER
        function calc(){
            let displaycart = JSON.parse(localStorage.getItem("carts"))
            return displaycart.reduce((acc, item) => {
                 return acc += item.price;
            },0)

        
        }
        ///TO RENDER THE TOTAL OF THE PRICES 
        let p = document.querySelector('.span').textContent = calc()
        // console.log(calc());