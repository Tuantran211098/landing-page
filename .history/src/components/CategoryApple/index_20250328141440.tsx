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
    data: bannerData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["slider"],
    queryFn: () => getProductApple(activeTab),
    enabled: activeTab === "iphone",
  });
  console.log("data", bannerData);

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
              className={`px-4 py-2 rounded-lg border ${
                activeTab === "iphone"
                  ? "bg-red-600 text-white border-black"
                  : "bg-gray-100 text-black border-gray-300"
              }`}
              onClick={() => setActiveTab("iphone")}
            >
              iPhone
            </button>
            <button
              className={`px-4 py-2 rounded-lg border ${
                activeTab === "non-phone"
                  ? "bg-red-600 text-white border-black"
                  : "bg-gray-100 text-black border-gray-300"
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
