// import React from 'react';
import './commingsoon.css';
import { Link } from 'react-router-dom';

const CommingSoon = () => {
  const products = [
    {
      id: 3,
      imageUrl: '/path/to/image3.jpg', 
      name: 'Bông tai Vàng trắng Ý 18K đính đá CZ PNJ XMXMW000454',
      price: '4.277.000đ',
      
    },
    {
      id: 4,
      imageUrl: '/path/to/image4.jpg', 
      name: 'Mặt dây chuyền Vàng trắng 14K đính đá Topaz PNJ TPXMW000137',
      price: '5.048.000đ',
      
    },
    {
      id: 1,
      imageUrl: '/path/to/image1.jpg', 
      name: 'Bông tai Kim cương Vàng trắng 14K PNJ First Diamond DDDDW000678',
      price: '15.515.000đ',
      
    },
    {
      id: 2,
      imageUrl: '/path/to/image2.jpg', 
      name: 'Nhẫn nam Vàng trắng 10K đính đá ECZ PNJ XMXMW000169',
      price: '9.040.000đ',
      
    }
  ];

  return (
    <div className="commingsoon">
      <h1 className="commingsoon-title">Comming Soon</h1>
      <div className="commingsoon-products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt='' />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
              
            </div>
          </div>
        ))}
      </div>
      
      <Link to='/shop' className="commingsoon-button">Read more</Link>
    </div>
  );
};

export default CommingSoon;
