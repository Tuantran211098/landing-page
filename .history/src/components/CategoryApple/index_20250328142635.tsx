"use client";

import { useQuery } from "@tanstack/react-query";
import { getSlider, getProductApple } from "@/lib/graphqlClient";
import DailySales from "@/components/DailySales";
import Privilege from "@/components/privilege";
import { useState } from "react";

export default function CategoryApple() {
  const [activeTab, setActiveTab] = useState("iphone"); // Mặc định là "phone"
  console.log("activeTab", activeTab);

  const {
    data: CateAppData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cateApple", activeTab],
    queryFn: () => getProductApple(activeTab),
    // enabled: activeTab === "iphone",
  });
  console.log("CateAppData", CateAppData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <section className="categoryApple">
      <div className="categoryApple__container">
        <div className="categoryApple__top">
          <img
            src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/app55555555555.png"
            alt="privilege-1"
            width="auto"
          />
        </div>
        <div className="categoryApple__bottom">
          <div className="flex gap-2">
            <button
              className={`${
                activeTab === "iphone"
                  ? "active__button"
                  : "remove__active--button"
              }`}
              onClick={() => setActiveTab("iphone")}
            >
              iPhone
            </button>
            <button
              className={`${
                activeTab === "non-phone"
                  ? "active__button"
                  : "remove__active--button"
              }`}
              onClick={() => setActiveTab("non-phone")}
            >
              NON-PHONE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
