"use client";
import { fetchCartData } from "@/app/redux/Features/cartSlice";
import { postOrderData } from "@/app/redux/Features/ordersSlice";
import { RootState } from "@/app/redux/store";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const router = useRouter();
  const { cartData } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (session && session?.user) {
      const userId = (session?.user as { id: string })?.id;
      dispatch(fetchCartData(userId));
    }
  }, [session?.user]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    paymentMethod: "creditCard",
  });

  // onChange handler to update form data
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    cartData?.cart?.products?.forEach(
      (product) => (totalPrice += product.price * product.quantity)
    );
    return totalPrice;
  };

  // onSubmit handler to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const userId = (session?.user as { id: string })?.id;
    const cartProducts = cartData?.cart?.products || [];
    const body = JSON.stringify({
      userId,
      products: [...cartProducts],
      deliveryDetails: { ...formData },
      timeStamp: new Date().toISOString(),
      totalPrice: calculateTotal() + Number(25),
    });
    await dispatch(postOrderData(body));
    router.push("/eats/orders")
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/img/Uber-eats.webp')" }}
    >
      <div className="py-8">
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6 mb-4">
          <h2 className="text-lg font-semibold mb-4">Checkout</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center">
              <label className="w-1/4 text-gray-700 text-sm font-bold">
                Full Name
              </label>
              <Input
                name="fullName"
                type="fullName"
                placeholder="Full Name"
                value={formData?.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/4 text-gray-700 text-sm font-bold">
                Email
              </label>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/4 text-gray-700 text-sm font-bold">
                Address
              </label>
              <Input
                name="address"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/4 text-gray-700 text-sm font-bold">
                State
              </label>
              <Input
                name="state"
                type="text"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/4 text-gray-700 text-sm font-bold">
                City
              </label>
              <Input
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/4 text-gray-700 text-sm font-bold">
                Pin Code
              </label>
              <Input
                name="pinCode"
                type="text"
                placeholder="Pin Code"
                value={formData.pinCode}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-1/4 text-gray-700 text-sm font-bold">
                Payment Method
              </label>
              <select
                className="appearance-none border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full mb-2.5"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="creditCard">Cash on Delivery</option>
                <option value="paypal">UPI</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                className="w-full border inline-block box-content border-gray-300 my-3 bg-black text-white rounded-md py-2"
                type="submit"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
