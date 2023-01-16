//Task 1.1

let shoppingList = [
    { name: "Apple", quantity: 2, isPurchased: false, price: 0.5, sum: 0 },
    { name: "Banana", quantity: 3, isPurchased: false, price: 0.3, sum: 0.9 },
    { name: "Orange", quantity: 1, isPurchased: false, price: 0.7, sum: 0 },
    { name: "Kiwi", quantity: 4, isPurchased: false, price: 0.4, sum: 1.6 },
    { name: "Potato", quantity: 5, isPurchased: false, price: 0.2, sum: 0 },
    { name: "Lemon", quantity: 6, isPurchased: true, price: 0.4, sum: 1.5 }
];

function displayShoppingList() {
    console.log("Not Purchased:");
    for (let i = 0; i < shoppingList.length; i++) {
        if (!shoppingList[i].isPurchased) {
            console.log(shoppingList[i].name);
        }
    }
    console.log("Purchased:");
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].isPurchased) {
            console.log(shoppingList[i].name);
        }
    }
}

function purchaseProduct(productName) {
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].name === productName) {
            shoppingList[i].isPurchased = true;
            shoppingList[i].sum = shoppingList[i].quantity * shoppingList[i].price;
            console.log(`${productName} has been purchased.`);
            break;
        }
    }
}

displayShoppingList();
purchaseProduct("Apple");

function removeProduct(productName) {
    let newShoppingList = shoppingList.filter(product => product.name !== productName);
    shoppingList = newShoppingList;
    console.log(`${productName} has been removed from the list`);
}

function addProduct(product) {
    let isProductExist = false;
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].name === product.name) {
            shoppingList[i].quantity += product.quantity;
            shoppingList[i].sum = shoppingList[i].quantity * shoppingList[i].price;
            isProductExist = true;
            break;
        }
    }
    if (!isProductExist) {
        shoppingList.push(product);
    }
    console.log(`${product.name} has been added to the list`);
}
