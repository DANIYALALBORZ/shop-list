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
    products[i].count
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