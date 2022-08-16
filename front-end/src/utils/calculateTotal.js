export default function calculateTotal() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    localStorage.setItem('cart', JSON.stringify([]));
    cart = [];
  }
  let subTotal = 0;
  cart.forEach(({ quantity, price }) => {
    subTotal += quantity * price;
  });

  return subTotal;
}
