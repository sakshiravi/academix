import React from 'react';
import { useCart } from '../context/CartContext'; // 👈 Make sure context is set up
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <h2 className="text-4xl font-bold text-indigo-700 text-center mb-8">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty. Start exploring our <Link to="/courses" className="text-indigo-600 font-semibold underline">courses</Link>.</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cartItems.map((course) => (
            <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-gray-50">
              <div>
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-600 text-sm">₹{course.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(course.id)}
                className="text-red-500 hover:text-red-700 transition"
                title="Remove from cart"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-8 border-t pt-6">
            <h4 className="text-2xl font-bold text-indigo-700">Total: ₹{totalPrice}</h4>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
