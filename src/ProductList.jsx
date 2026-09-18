import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and harmful toxins.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity and purifies indoor air.",
          cost: "$14"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Tough plant that eliminates carbon monoxide.",
          cost: "$20"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifies air and offers healing gel for skin.",
          cost: "$10"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://cdn.pixabay.com/photo/2014/12/04/14/46/lavender-556742_1280.jpg",
          description: "Calming scent that reduces stress and anxiety.",
          cost: "$22"
        },
        {
          name: "Jasmine",
          image: "https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg",
          description: "Sweet fragrance that promotes restful sleep.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating herbal aroma that boosts memory.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2016/01/07/18/28/mint-1126282_1280.jpg",
          description: "Fresh aroma that deters pests naturally.",
          cost: "$10"
        },
        {
          name: "Lemon Balm",
          image: "https://cdn.pixabay.com/photo/2015/07/17/13/44/lemon-balm-849115_1280.jpg",
          description: "Refreshing citrusy scent that uplifts mood.",
          cost: "$14"
        },
        {
          name: "Gardenia",
          image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/gardenia-2496806_1280.jpg",
          description: "Intensely fragrant white blooms for indoor luxury.",
          cost: "$25"
        }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/29/08/10/zz-plant-5960092_1280.jpg",
          description: "Thrives in low light and requires infrequent watering.",
          cost: "$25"
        },
        {
          name: "Pothos",
          image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
          description: "Fast-growing vine that tolerates neglect.",
          cost: "$12"
        },
        {
          name: "Cast Iron Plant",
          image: "https://cdn.pixabay.com/photo/2014/10/22/18/04/nature-498471_1280.jpg",
          description: "Virtually indestructible in almost any conditions.",
          cost: "$20"
        },
        {
          name: "Jade Plant",
          image: "https://cdn.pixabay.com/photo/2019/02/10/09/49/crassula-3986877_1280.jpg",
          description: "Resilient succulent symbolizing good luck.",
          cost: "$15"
        },
        {
          name: "Succulent Assortment",
          image: "https://cdn.pixabay.com/photo/2016/11/21/16/08/cactus-1846147_1280.jpg",
          description: "Drought-tolerant plants perfect for small spaces.",
          cost: "$16"
        },
        {
          name: "Ponytail Palm",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Stores water in its stem and needs minimal care.",
          cost: "$24"
        }
      ]
    }
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedNodes((prevState) => ({
      ...prevState,
      [product.name]: true
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar" style={{ backgroundColor: '#4caf50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px' }}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2012/04/18/13/47/sprout-37050_1280.png" height="50" width="50" alt="" />
            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
              <div>
                <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
                <i style={{ color: 'white', fontSize: '12px' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <a href="#" onClick={handlePlantsClick} style={{ color: 'white', fontSize: '20px', textDecoration: 'none', marginRight: '30px' }}>Plants</a>
          </div>
          <div>
            <a href="#" onClick={handleCartClick} style={{ color: 'white', fontSize: '20px', textDecoration: 'none', position: 'relative' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="40" width="40">
                <rect width="156" height="156" fill="none"></rect>
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,180,176H84a15.9,15.9,0,0,1-15.3-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
              </svg>
              <span className="cart-count" style={{ position: 'absolute', top: '-8px', right: '-12px', background: '#e53935', color: '#fff', borderRadius: '50%', padding: '2px 8px', fontSize: '14px', fontWeight: 'bold' }}>
                {totalQuantity}
              </span>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid" style={{ padding: '20px' }}>
          {plantsArray.map((categoryObj, index) => (
            <div key={index} style={{ marginBottom: '40px' }}>
              <h2 style={{ textAlign: 'center', margin: '20px 0', borderBottom: '2px solid #4caf50', paddingBottom: '10px' }}>{categoryObj.category}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px' }}>
                {categoryObj.plants.map((plant, pIndex) => (
                  <div key={pIndex} className="product-card" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '280px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }} />
                    <h3 style={{ margin: '10px 0' }}>{plant.name}</h3>
                    <p style={{ fontSize: '14px', color: '#666', height: '40px' }}>{plant.description}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#2e7d32', margin: '10px 0' }}>{plant.cost}</p>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedNodes[plant.name] || cartItems.some(item => item.name === plant.name)}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: (addedNodes[plant.name] || cartItems.some(item => item.name === plant.name)) ? '#9e9e9e' : '#4caf50',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: (addedNodes[plant.name] || cartItems.some(item => item.name === plant.name)) ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {(addedNodes[plant.name] || cartItems.some(item => item.name === plant.name)) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
