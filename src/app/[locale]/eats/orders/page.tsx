import { RootState } from "@/app/redux/store";
import OrderDetails from "@/components/Orders/Orders";
import React from "react";
import { useSelector } from "react-redux";

export default function page() {
  return (
    <div>
      <OrderDetails/>
    </div>
  );
}
