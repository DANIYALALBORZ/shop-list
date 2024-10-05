let products = [
    {
        name: 'لپ تاپ 13.6 اینچی اپل مدل macBook Pro M3 2023 48gb Ram 1TB ssd',
        img: './assets/img/macBook-Pro-M3-2023-48gbRam-1TBssd.webp',
        colorName: 'خاکستری',
        colorCode: 'bg-slate-500',
        warranty: 12,
        warrantyCompany: 'فروشگاه Codniper',
        fastDelivery: true,
        price: 200000000,
        offeredCost: 0,
        count: 1,
        inventory: 4
    },
    {
        name: 'موبایل اپل مدل iphone 15 pro max 256gb',
        img: './assets/img/apple-iphone-15.webp',
        colorName: 'مشکی',
        colorCode: 'bg-black',
        warranty: 24,
        warrantyCompany: 'فروشگاه Codniper',
        fastDelivery: false,
        price: 180000000,
        offeredCost: 0,
        count: 2,
        inventory: 10
    },
]

let offeredCostTotal = 0;

// تعداد تمام محصولات داخل سبد خرید
let productsLength = 0;
products.forEach(p => {
    productsLength += p.count;
});
document.getElementById('products-count').innerHTML = `(${productsLength})`;
/////////////////////////////////

//قیمت اصلی کل سبد خرید قبل از در نظر گرفتن تخفیفات
let mainCost = 0;
function mainCostCalculator() {
    mainCost = 0;
    products.forEach(product => {
        mainCost += product.count * product.price;
    })
    document.getElementById('products-price').innerHTML = `${mainCost.toLocaleString("fa-IR")}`;
    return mainCost;
}
mainCostCalculator()
/////////////////////////////////////////////////

// (بعد از تخفیف) جمع سبد خرید

function offeredCost() {
    offeredCostTotal = 0;
    products.forEach(product => {
        offeredCostTotal += product.offeredCost;
    })
    document.getElementById('products-price-offered').innerHTML = `${offeredCostTotal.toLocaleString("fa-IR")}`;
    return offeredCostTotal;
}

function offeredCostDecrease() {
    // let offeredCostDecreaseTotal;
    // products.forEach(product => {
    //     offeredCostDecreaseTotal += product.offeredCost * product.count;
    // })
    // products[i].count
}
// offeredCost()
/////////////////////////////////////////////////

// تابع های آپدیت کننده لیست قیمت

function increaseProductLength() {
    // اضافه کردن تعداد محصولات
    productsLength++;
    document.getElementById('products-count').innerHTML = `(${productsLength})`;
    mainCostCalculator()
    offeredCost()
    profit()
}

function decreaseProductLength() {
    // کم کردن تعداد محصولات
    productsLength--;
    document.getElementById('products-count').innerHTML = `(${productsLength})`;
    mainCostCalculator()
    offeredCost()
    let profit = document.getElementById('profit');
    let profitTotal = mainCost - offeredCostTotal;
    profit.textContent = `${profitTotal.toLocaleString("fa-IR")}`
}

function profit() {
    let profit = document.getElementById('profit');
    let profitTotal = mainCost - offeredCostTotal;
    profit.textContent = `${profitTotal.toLocaleString("fa-IR")}`
}
////////////////////////////////

// سبد خالی
function eraseShopList() {
    document.getElementById('profit').textContent = 0;
    document.getElementById('products-count').innerHTML = "";
    document.getElementById('products-price').innerHTML = 0;
    document.getElementById('products-price-offered').innerHTML = 0;
}

//////////////////////////////////////////////////

let allPrices = 0;
products.forEach(p => {
    allPrices += p.price * p.count;
});


if (productsLength > 0) {

    for (let i = 0; i < products.length; i++) {

        // انقدی خوب نام گذاری کردم که نیازی به کامنت نیست :))

        let productsListContainer = document.querySelector('#products-list');

        let productContainer = document.createElement('div');
        productContainer.className = 'py-4';
        productsListContainer.appendChild(productContainer);

        let product = document.createElement('div');
        product.className = 'flex py-2';
        productContainer.appendChild(product);

        let productImgContainer = document.createElement('div');
        productImgContainer.className = 'w-1/4';
        product.appendChild(productImgContainer);

        let productImg = document.createElement('img');
        productImg.className = 'w-36 mx-auto';
        productImg.src = products[i].img;
        productImg.alt = products[i].name;
        productImgContainer.appendChild(productImg);

        let productDescriptionContainer = document.createElement('div');
        productDescriptionContainer.className = 'w-3/4 leading-8';
        product.appendChild(productDescriptionContainer);

        let productName = document.createElement('h3');
        productName.textContent = products[i].name;
        productDescriptionContainer.appendChild(productName);

        let productColorContainer = document.createElement('div');
        productColorContainer.className = 'flex items-center';
        productDescriptionContainer.appendChild(productColorContainer);

        let productColorCode = document.createElement('div');
        productColorCode.className = 'rounded-full w-4 h-4 border-black border-opacity-50 me-2'
        productColorCode.classList.add(products[i].colorCode);
        productColorContainer.appendChild(productColorCode);

        let productColorName = document.createElement('span');
        productColorName.textContent = products[i].colorName;
        productColorContainer.appendChild(productColorName)

        let productWarranty = document.createElement('div');
        productWarranty.innerHTML = `<div> گارانتی <span>${products[i].warranty}</span> ماهه <span>${products[i].warrantyCompany}</span> </div>`
        productDescriptionContainer.appendChild(productWarranty);

        let productFastDelivery = document.createElement('p');
        productFastDelivery.textContent = products[i].fastDelivery ? 'تحویل فوری' : '5% تخفیف';
        productDescriptionContainer.appendChild(productFastDelivery);

        let productPrice = document.createElement('div')
        productPrice.className = 'flex';
        productContainer.appendChild(productPrice);

        let productCountContainer = document.createElement('div');
        productCountContainer.className = 'w-1/4';
        productPrice.appendChild(productCountContainer);

        let productCount = document.createElement('div');
        productCount.className = 'flex rounded-lg border-opacity-50 border-stone-400 border-2 w-fit mx-auto';
        productCountContainer.appendChild(productCount);

        let increaseProduct = document.createElement('button');
        increaseProduct.className = 'p-2 hover:bg-lime-500';
        increaseProduct.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"> 
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                 </svg>`;



        increaseProduct.addEventListener('click', () => {
            if (products[i].count < products[i].inventory) {
                products[i].count += 1;
                productCountNumber.textContent = products[i].count;



                if (products[i].fastDelivery) {
                    let totalPrice = products[i].price * products[i].count; //مجموع قیمت محصول به ازای تعداد
                    productFinalPrice.innerHTML = totalPrice.toLocaleString();
                    // productsPriceOffered += totalPrice;
                    products[i].offeredCost += products[i].price;
                    offeredCost()



                } else {
                    let totalPrice = products[i].price * products[i].count; //مجموع قیمت محصول به ازای تعداد
                    let deliveryOffer = (totalPrice * 5) / 100; // 5 درصد تخفیف 
                    totalPrice -= deliveryOffer;
                    productFinalPrice.innerHTML = totalPrice.toLocaleString();
                    products[i].offeredCost = totalPrice;
                    offeredCost()


                }
                increaseProductLength()

            } else if (products[i].count <= products[i].inventory) {
                alert("اتمام موجودی")

            }
        });


        productCount.appendChild(increaseProduct);

        let productCountNumber = document.createElement('p');
        productCountNumber.className = 'p-2';
        productCountNumber.textContent = products[i].count;
        productCount.appendChild(productCountNumber);

        let decreaseProduct = document.createElement('button');
        decreaseProduct.className = 'p-2 hover:bg-rose-500';
        decreaseProduct.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                 </svg>`;
        decreaseProduct.addEventListener('click', () => {
            if (products[i].count > 1) {
                products[i].count -= 1
                productCountNumber.textContent = products[i].count;
                if (products[i].fastDelivery) {
                    let totalPrice = products[i].price * products[i].count; //مجموع قیمت محصول به ازای تعداد
                    productFinalPrice.innerHTML = totalPrice.toLocaleString();
                    // productsPriceOffered += totalPrice;
                    products[i].offeredCost -= products[i].price;
                    offeredCost();

                } else {
                    let totalPrice = products[i].price * products[i].count; //مجموع قیمت محصول به ازای تعداد
                    let deliveryOffer = (totalPrice * 5) / 100; // 5 درصد تخفیف 
                    totalPrice -= deliveryOffer;
                    productFinalPrice.innerHTML = totalPrice.toLocaleString();
                    products[i].offeredCost = totalPrice;
                    offeredCost()

                }
                decreaseProductLength();
            } else if (products[i].count >= 1) {
                let remove = confirm(`آیا میخواهید که ${products[i].name} از سبد خریدتان حذف شود ؟`);
                if (remove && productsLength <= 1) {
                    products[i].count--
                    decreaseProductLength();
                    productContainer.remove();
                    let emptyList = document.createElement('div');
                    emptyList.classList = 'flex flex-col w-fit mx-auto py-4 text-stone-400';
                    emptyList.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" fill="currentColor" class="bi bi-cart mb-4" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    <p>سبد خرید شما خالی است</p>
                    `;
                    document.getElementById('products-list').appendChild(emptyList);
                    offeredCost();
                    eraseShopList()
                    decreaseProductLength();
                } else if (remove) {
                    console.log('1', products[i].count);
                    products[i].count--
                    decreaseProductLength();
                    productContainer.remove();
                    offeredCost();
                    // offeredCostTotal - products[1].offeredCost;
                    offeredCostDecrease()
                    console.log(products[i].count);
                }

            }
        });
        productCount.appendChild(decreaseProduct);

        let productPriceNumber = document.createElement('div');
        productPriceNumber.classList = 'w-3/4 flex items-center';
        productPrice.appendChild(productPriceNumber);

        let productFinalPrice = document.createElement('p');
        productFinalPrice.className = 'me-2 font-mono font-bold'
        if (products[i].fastDelivery) {
            finalPrice = products[i].price * products[i].count;
            productFinalPrice.innerHTML = finalPrice.toLocaleString();
            // productsPriceOffered += finalPrice;
            products[i].offeredCost = finalPrice;


        } else {

            let totalPrice = products[i].price * products[i].count; //مجموع قیمت محصول به ازای تعداد
            let deliveryOffer = (totalPrice * 5) / 100; // 5 درصد تخفیف 
            totalPrice -= deliveryOffer;
            productFinalPrice.innerHTML = totalPrice.toLocaleString();
            products[i].offeredCost = totalPrice;
            offeredCost()
        }
        productPriceNumber.appendChild(productFinalPrice);

        let productPriceCurrency = document.createElement('p');
        productPriceCurrency.textContent = 'تومان';
        productPriceNumber.appendChild(productPriceCurrency);
    }

} else {
    let emptyList = document.createElement('div');
    emptyList.classList = 'flex flex-col w-fit mx-auto py-4 text-stone-400';
    emptyList.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" fill="currentColor" class="bi bi-cart mb-4" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>
    <p>سبد خرید شما خالی است</p>
    `;
    document.getElementById('products-list').appendChild(emptyList);
}


if (allPrices >= 300000000 && productsLength >= 4) {
    document.getElementById('ten-percent').classList.remove("text-rose-600");
    document.getElementById('ten-percent').classList.add("text-lime-500");
    document.getElementById('offers-box').classList.remove("bg-rose-200");
    document.getElementById('offers-box').classList.add("bg-lime-200");
    document.getElementById('free-delivery').classList.remove("text-rose-600");
    document.getElementById('free-delivery').classList.add("text-lime-500");
} else if (allPrices >= 300000000) {
    document.getElementById('ten-percent').classList.remove("text-rose-600");
    document.getElementById('ten-percent').classList.add("text-lime-500");
    document.getElementById('offers-box').classList.remove("bg-rose-200");
    document.getElementById('offers-box').classList.add("bg-lime-200");
} else {
    document.getElementById('ten-percent').classList.add("text-rose-600");
    document.getElementById('ten-percent').classList.remove("text-lime-500");
    document.getElementById('offers-box').classList.add("bg-rose-200");
    document.getElementById('offers-box').classList.remove("bg-lime-200");
    document.getElementById('free-delivery').classList.add("text-rose-600");
    document.getElementById('free-delivery').classList.remove("text-lime-500");
}


offeredCost()
profit()