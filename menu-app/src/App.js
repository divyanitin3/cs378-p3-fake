import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const headerMenu = [
  {
    imageName: 'logo.webp',
    subheading: 'Super Slay Recipes at Sakura Bistro',
    subheading2: 'Best Food in Austin!'
  }
]

function App() {
  const [shoppingCart, updateShoppingCart] = useState(menuItems.map(product => ({ ...product, count: 0 })));
const [totalPrice, updateTotalPrice] = useState(0);

const addItemToCart = (productId) => {
  updateShoppingCart(previousCart => {
    const newCart = previousCart.map(product =>
      (product.id === productId) ? { ...product, count: product.count + 1 } : product
    );

    refreshTotalPrice(newCart);

    return newCart;
  });
};

const removeItemFromCart = (productId) => {
  updateShoppingCart(previousCart => {
    const newCart = previousCart.map(product =>
      (product.id === productId && product.count > 0) ? { ...product, count: product.count - 1 } : product
    );

    refreshTotalPrice(newCart);

    return newCart;
  });
};

const resetCart = () => {
  updateShoppingCart(previousCart => previousCart.map(product => ({ ...product, count: 0 })));
  
  updateTotalPrice(0);
};

const refreshTotalPrice = (newCart) => {
  const total = newCart.reduce((accumulator, product) => accumulator + product.count * product.price, 0);

  updateTotalPrice(total);
};

const placeOrder = () => {
  const itemsForOrder = shoppingCart.filter(product => product.count > 0);

  if (itemsForOrder.length === 0) {
    alert('No items in cart.');
  } else {
    const orderDetails = itemsForOrder.map(product => `${product.count} x ${product.title}`).join('\n');
    alert(`Order Placed!\n\n${orderDetails}\n\nTotal: $${totalPrice.toFixed(2)}`);
    resetCart();
  }
};

  return (
    <div className="app-background">
      {headerMenu.map((header) => (
        <Header
          imageName={header.imageName}
          subheading={header.subheading}
          subheading2={header.subheading2}
        />
      ))}
      <div className="menu">
      {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            title={menuItem.title}
            description={menuItem.description}
            imageName={menuItem.imageName}
            price={menuItem.price}
            quantity={shoppingCart.find(product => product.id === menuItem.id).count}
            onAdd={() => addItemToCart(menuItem.id)}
            onRemove={() => removeItemFromCart(menuItem.id)}
          />
        ))}
      </div>
      <div className="cart" >
        <p>Subtotal: ${totalPrice.toFixed(2)}</p>
        <button className="rounded-3" style={{ backgroundColor: '#c19bf2' }} onClick={placeOrder}>
          Order
        </button>
        <button className="rounded-3" onClick={resetCart}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
