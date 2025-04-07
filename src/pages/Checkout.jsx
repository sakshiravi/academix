import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve data from state
  const { selectedCourses = [], totalPrice = 0 } = location.state || {};

  const handlePayment = async () => {
    try {
      const userEmail = "testuser@example.com"; // Replace with real email if using auth

      const res = await fetch("http://localhost:5000/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courses: selectedCourses,
          userEmail,
          totalAmount: totalPrice,
        }),
      });

      if (res.ok) {
        console.log("Order saved. Navigating to success page...");
        alert("Order placed successfully!");
        navigate("/success");
      } else {
        const err = await res.json();
        alert(`Order failed: ${err.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong while placing the order.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="mb-6">
        <p className="text-lg">Total Price: ₹{totalPrice}</p>
      </div>
      <button
        onClick={handlePayment}
        className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Checkout;
