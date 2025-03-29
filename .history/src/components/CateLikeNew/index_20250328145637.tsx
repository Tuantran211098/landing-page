"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getSlider,
  getProductApple,
  getCateLikeNew,
} from "@/lib/graphqlClient";
import DailySales from "@/components/DailySales";
import Privilege from "@/components/privilege";
import { useState } from "react";

export default function CategoryLikeNew() {
  const [activeTab, setActiveTab] = useState("iphone"); // Mặc định là "phone"
  console.log("activeTab", activeTab);

  const {
    data: CateLikeData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cateLikeNew"],
    queryFn: getCateLikeNew,
    // enabled: activeTab === "iphone",
  });
  console.log("CateLikeData", CateLikeData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <section className="category categoryApple">
      <div className="category__container categoryApple__container">
        <div className="category__top categoryApple__top">
          <img
            src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/app55555555555.png"
            alt="privilege-1"
            width="auto"
          />
        </div>
        <div className="category__bottom categoryApple__bottom">
          <div className="category__flex--items categoryApple__flex--items">
            <div className="category__items categoryApple__items">
              <div className="category__items--image categoryApple__items--image">
                <img
                  src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/app55555555555.png"
                  alt="privilege-1"
                  width="auto"
                />
              </div>
              <div className="category__items--list categoryApple__items--list">
                <div className="category__list--title categoryApple__list--title">
                  <h4>TEST</h4>
                </div>
                <div className="category__list--price categoryApple__list--price">
                  <div className="category__priceOri categoryApple__priceOri">
                    1.000.000
                  </div>
                  <div className="category__priceFinal categoryApple__priceFinal">
                    <span className="">900.000</span>
                    <span className="category__priceFinal--percent categoryApple__priceFinal--percent">
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
