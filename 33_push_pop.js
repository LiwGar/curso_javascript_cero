// Metodos que modifican el array original (Mutabilidad)


const arrayNumbers = [4, 18, 1, 62, 34];

const newArrayNumbers = arrayNumbers.push(27, 8);

console.log(arrayNumbers);
console.log(newArrayNumbers);

const removeArrayNumber = arrayNumbers.pop();

console.log(arrayNumbers);
console.log(removeArrayNumber);

// Managing a Stack

let bookCart = [];

const ADD_TO_CART_ACTION = 'addToCart';
const REMOVE_FROM_CART_ACTION = 'removeFromCart';
const VIEW_CART_ACTION = 'viewCart';

function viewCart() {
    console.log('Current Cart of Books: ', bookCart);
}

function performCartActions (action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook);
            break;
        case REMOVE_FROM_CART_ACTION:
            if(bookCart.length === 0) {
                console.log('Cart is empty. No books to remove.');
            } else {
                const removedBook =  bookCart.pop();
                console.log(`Removed book from the cart: ${removedBook}.`);
            }
        case VIEW_CART_ACTION:
            viewCart(); 
            break;
        default:
            console.log('Invalid action. Please choose a valid option.');
            
    }
}

performCartActions (ADD_TO_CART_ACTION, 'JavaScript-Inspirate');
performCartActions (VIEW_CART_ACTION);
performCartActions (ADD_TO_CART_ACTION, 'Jesus es _');
performCartActions (ADD_TO_CART_ACTION, 'La vida es _');
performCartActions (VIEW_CART_ACTION);
performCartActions (ADD_TO_CART_ACTION, 'Biografia de bad bunny');
performCartActions (VIEW_CART_ACTION);
performCartActions (REMOVE_FROM_CART_ACTION);
