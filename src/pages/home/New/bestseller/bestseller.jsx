// import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './bestseller.css';

const Bestseller = () => {
  const products = [
    {
      id: 1,
      imageUrl: 'https://everstylish.com/pub/media/catalog/product/cache/0f8c9845bfabb36fc9eaa200154897c4/j/e/jew221128-t.jpg', 
      name: 'Bông tai Kim cương Vàng trắng 14K PNJ First Diamond DDDDW000678',
      price: '15.515.000đ',
      
    },
    {
      id: 2,
      imageUrl: 'https://everstylish.com/pub/media/catalog/product/cache/0f8c9845bfabb36fc9eaa200154897c4/j/e/jew221128-t.jpg', 
      name: 'Nhẫn nam Vàng trắng 10K đính đá ECZ PNJ XMXMW000169',
      price: '9.040.000đ',
      
    },
    {
      id: 3,
      imageUrl: 'https://everstylish.com/pub/media/catalog/product/cache/0f8c9845bfabb36fc9eaa200154897c4/j/e/jew221128-t.jpg', 
      name: 'Bông tai Vàng trắng Ý 18K đính đá CZ PNJ XMXMW000454',
      price: '4.277.000đ',
      
    },
    {
      id: 4,
      imageUrl: 'https://everstylish.com/pub/media/catalog/product/cache/0f8c9845bfabb36fc9eaa200154897c4/j/e/jew221128-t.jpg', 
      name: 'Mặt dây chuyền Vàng trắng 14K đính đá Topaz PNJ TPXMW000137',
      price: '5.048.000đ',
      
    },
  ];

  return (
    // <div className="bestseller">
    //   <h1 className="bestseller-title">BEST SELLER</h1>
    //   <div className="bestseller-products">
    //     {products.map(product => (
    //       <div key={product.id} className="product-card">
    //         <img src={product.imageUrl} alt='' />
    //         <div className="product-info">
    //           <p className="product-name">{product.name}</p>
    //           <p className="product-price">{product.price}</p>
              
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <Link to='/shop' className="bestseller-button">Read more</Link>
    // </div>

    <div className="bestseller">
    <h1 className="bestseller-title">BEST SELLER</h1>
    <div className="bestseller-products">
      {products.map(product => (
        <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.price}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            {/* <Card.Link href="#">More info</Card.Link> */}
            <Button as={Link} to='/cart' className="card-button">Buy now</Button>
            <Button as={Link} to='/product' className="card-button">View more</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    <Link to='/shop' className="bestseller-button">
      <Button variant="primary">Read more</Button>
    </Link>
  </div>
  );
};

export default Bestseller;


