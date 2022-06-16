const ListProduct = [{
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/Mask Group.png",
        category: 1
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/Mask Group (1).png",
        category: 1
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/Mask Group (2).png",
        category: 3
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/Mask Group4.png",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/Mask Group5.png",
        category: 5
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "src/img/index/Mask Group6.png",
        category: 6
    }
]
const ListCategory = [{
        id: 1,
        name: "breakfast",
        image: "./image/home/breakfast.png"
    },
    {
        id: 2,
        name: "vegan",
        image: "./image/home/breakfast.png"
    },
    {
        id: 3,
        name: "meat",
        image: "./image/home/breakfast.png"
    },
    {
        id: 4,
        name: "dessert",
        image: "./image/home/breakfast.png"
    },
    {
        id: 5,
        name: "lunch",
        image: "./image/home/breakfast.png"
    },
    {
        id: 6,
        name: "chocolate",
        image: "./image/home/breakfast.png"
    }
]

// Chi tiết sản phẩm
function showProduct(data) {
    const product = document.querySelector(".product");
    if (product) {
        product.innerHTML = '';
        for (let item of data) {
            product.innerHTML += `
        <div class="product-item">
        <div class="product__item-img">
        <a href="./detail.html?id=${item.id}">
           <img src="${item.image}" alt="" srcset="">
        </a>
    </div>
    <div class="product__item-info">
        <h2><a href="./detail.html?id=${item.id}">${item.name}</a></h2>
        <div class="product__item-info--sub">
            <div class="product__item-timer">
                <img src="src/img/index/Timer.png" alt="" class="product__timer-icon">
                <p class="product__timer-info">30 Minute</p>
            </div>

            <div class="product__item-name">
                <img src="src/img/index/ForkKnife.png" alt="" class="product__name-icon">
                <p class="product__name-info">Snack</p>
            </div>
        </div>
    </div>
    </div>
          `
        }
    }
}
showProduct(ListProduct);

const filterSelect = document.querySelector("#filter-select");

function filterProduct() {
    const under30 = ListProduct.filter(function(products) {
        return products.price < 30;
    })
    const over30 = ListProduct.filter(function(products) {
        return products.price > 30;
    })
    const all = ListProduct
    if (filterSelect.value == 'under30') {
        showProduct(under30);
    }
    if (filterSelect.value == 'over30') {
        showProduct(over30);
    }
    if (filterSelect.value == 'all') {
        showProduct(all);
    }
}
if (filterSelect) {
    filterSelect.addEventListener("change", filterProduct);
}
const prdId = new URLSearchParams(window.location.search).get('id')
const product = ListProduct.find(function(item) {
    return item.id == prdId
})

function detailProduct() {

    const detail_Product = document.querySelector(".hamburger__product");
    if (detail_Product) {
        detail_Product.innerHTML = `
        <div class="hamburger__product-title">
        <h1>${product.name}</h1>
        <h2 class="hamburger__product-price">$ ${product.price}</h2>
        <p>${product.desc}</p>
        <div class="hamburger__product-search">
            <input type="text" placeholder="Quantity">
            <button class="hamburger__product-search--btn">
                Add To Cart
            </button>
        </div>
    </div>
    <div class="hamburger__product-img">
        <img src="${product.image}" alt="">
    </div>
        `
    }

}

detailProduct();





function listCategory() {
    const cateList = document.querySelector('#cate-list')
    if (cateList) {
        for (let item of ListCategory) {
            cateList.innerHTML += `
                <li><a href="./product.html?cateId=${item.id}">${item.name}</a></li>
            `
        }
    }

}
listCategory();




function listProductPage(data) {
    const listProductDiv = document.querySelector('.products__food-info')
    if (listProductDiv) {
        listProductDiv.innerHTML = ""
        for (let item of data) {
            listProductDiv.innerHTML += `
            <div class="products__food-item">
            <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
            <h1 class="products__food-item--title"><a href="./detail.html?id=${item.id}">${item.name}</a></h1>
            <h2 class="products__food-item--price">$ ${item.price}</h2>
            <button onclick="addCartItem(${item.id});" class="addcart" type="">Add To Cart</button>
        </div>
              `
        }
    }
}



function reRender() {
    const cateId = new URLSearchParams(window.location.search).get('cateId')
    const productByCategory = ListProduct.filter(function(item) {
        return item.category == cateId
    })
    if (cateId) {
        listProductPage(productByCategory)
    } else {
        listProductPage(ListProduct)
    }

}
reRender();

const ListCart = [];
const cart = document.querySelector('#cart'); // cart item
function addCartItem(check) {
    const cart_product = ListProduct.find(function(item) {
        return item.id == check
    })
    ListCart.push(cart_product);
    console.log(ListCart);
    showCart();
}

function showCart() {
    if (cart) {
        cart.innerHTML = ""
        for (let item of ListCart) {
            cart.innerHTML +=
                `<div class="cart__list">
                <div class="cart__list-item">
                    <div class="cart__list-item-img">
                        <img src="${item.image}" alt="" class="cart__list-item-img--img">
                    </div>
                    <div class="cart__list-item-info">
                        <div class="cart__list-item-info-name">
                            <h3 class="cart__list-item-info-name--name">${item.name}</h3>
                        </div>
                        <div class="cart__list-item-info-price">
                            <p class="cart__list-item-info-price">$ ${item.price}</p>
                        </div>
                        <div class="cart__list-item-info-amount">
                            <button onclick="decrement()">-</button>
                            <input id="demoInput" type="number" min="1" value="1">
                            <button onclick="increment()">+</button>
                        </div>
                    </div>
                </div>
            </div>`
        }
    }

}

function increment() {
    document.getElementById('demoInput').stepUp();
}

function decrement() {
    document.getElementById('demoInput').stepDown();
}