import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const costValue = parseFloat(item.cost.replace('$', ''));
      return total + costValue * item.quantity;
    }, 0);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an individual item
  const calculateTotalCost = (item) => {
    const costValue = parseFloat(item.cost.replace('$', ''));
    return costValue * item.quantity;
  };

  return (
    <div className="cart-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '15px 0' }}>
            <img className="cart-item-image" src={item.image} alt={item.name} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="cart-item-details" style={{ flex: '1', marginLeft: '20px' }}>
              <div className="cart-item-name" style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.name}</div>
              <div className="cart-item-cost" style={{ color: '#666', margin: '5px 0' }}>Unit Price: {item.cost}</div>
              <div className="cart-item-quantity" style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)} style={{ padding: '4px 10px', fontSize: '16px', cursor: 'pointer' }}>-</button>
                <span className="cart-item-quantity-value" style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)} style={{ padding: '4px 10px', fontSize: '16px', cursor: 'pointer' }}>+</button>
              </div>
              <div className="cart-item-total" style={{ fontWeight: 'bold', color: '#2e7d32' }}>Subtotal: ${calculateTotalCost(item)}</div>
            </div>
            <button className="cart-item-delete" onClick={() => handleRemove(item)} style={{ backgroundColor: '#e53935', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '30px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button className="button" onClick={(e) => handleContinueShopping(e)} style={{ padding: '12px 25px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>
          Continue Shopping
        </button>
        <button className="button" onClick={handleCheckoutShopping} style={{ padding: '12px 25px', backgroundColor: '#ff9800', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
