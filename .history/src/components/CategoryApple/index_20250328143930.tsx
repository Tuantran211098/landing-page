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
          <div className="categoryApple__flex--tabs">
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
          <div className="categoryApple__flex--items">
            <div className="categoryApple__items">
              <div className="categoryApple__items--image">
                <img
                  src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/app55555555555.png"
                  alt="privilege-1"
                  width="auto"
                />
              </div>
              <div className="categoryApple__items--list">
                <div className="categoryApple__list--title">
                  <h4>TEST</h4>
                </div>
                <div className="categoryApple__list--price">
                  <div className="categoryApple__priceOri">1.000.000</div>
                  <div className="categoryApple__priceFinal">
                    <span className="">900.000</span>
                    <span className="categoryApple__priceFinal--percent">
                      5%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
