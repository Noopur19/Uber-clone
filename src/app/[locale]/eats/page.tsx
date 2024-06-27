import ExploreMenu from "@/components/ExploreMenu/ExploreMenu";
import Products from "@/components/ProductList/Products";
import { useTranslations } from "next-intl";
import React from "react";

export default function page() {
  const t = useTranslations("Eats");
  return (
    <div>
      <ExploreMenu />
      <Products title={t("dishTitle")} />
    </div>
  );
}
