import  { useState } from 'react';
import './cartitems.css';

const Cart= () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Tai nghe có dây 3,5mm 4d Bass Dây tốc cao Dual Est Reo Độ t...',
      price: 22000,
      quantity: 2,
      image: 'path-to-image',
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
        <tr>
          <th>Sản Phẩm</th>
          <th>Đơn Giá</th>
          <th>Số Lượng</th>
          <th>Số Tiền</th>
          <th>Thao Tác</th>
        </tr>
        </thead>
        <tbody>
        {cart.map((item) => (
          <tr key={item.id}>
            <td>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <span>{item.name}</span>
            </td>
            <td>{item.price.toLocaleString()} ₫</td>
            <td>
              <button
                onClick={() =>
                  handleQuantityChange(item.id, -1)
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  handleQuantityChange(item.id, 1)
                }
              >
                +
              </button>
            </td>
            <td>
              {(item.price * item.quantity).toLocaleString()} ₫
            </td>
            <td>
              <button
                onClick={() => handleRemoveItem(item.id)}
              >
                Xóa
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className="cart-footer">
        <div className="voucher-section">
          <span>Thêm mã giảm giá của Shop</span>
        </div>
        <div className="shipping-info">
                    <span>
                        Giảm ₫300.000 phí vận chuyển đơn tối thiểu ₫0; Giảm ₫500.000 phí
                        vận chuyển đơn tối thiểu ₫1.000.000
                    </span>
        </div>
        <div className="total-section">
          <span>Tổng thanh toán (0 Sản phẩm):</span>
          <span>{totalAmount.toLocaleString()} ₫</span>
          <button>Mua Hàng</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
