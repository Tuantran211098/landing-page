"use client";

import { useQuery } from "@tanstack/react-query";
import { getSlider, getProductApple } from "@/lib/graphqlClient";
import DailySales from "@/components/DailySales";
import Privilege from "@/components/privilege";
import { useState } from "react";
import { Row, Col } from "antd";
import { log } from "console";
export default function CategoryApple() {
  const [activeTab, setActiveTab] = useState("iphone"); // Mặc định là "phone"
  console.log("activeTab", activeTab);

  //This block just call API
  const {
    data: CateAppData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cateApple", activeTab],
    queryFn: () => getProductApple(activeTab),
    // enabled: activeTab === "iphone",
  });
  console.log("CategoryApple", CateAppData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  //This block handle percent product
  const percentage = (original: number, final: number) => {
    console.log(
      "original",
      original,
      final,
      Math.ceil(((Number(original) - Number(final)) / original) * 100)
    );

    if (!original || !final) return "N/A";
    return Math.ceil(((Number(original) - Number(final)) / original) * 100);
  };
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
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="category__flex--items categoryApple__flex--items"
          >
            {(CateAppData as any).DailySales?.items?.[0]?.items?.map(
              (item: any) => (
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={4}
                  key={item?.product?.name}
                  className="category__items categoryApple__items"
                >
                  <a href={`/${item?.product?.url_key}`}>
                    <div className="category__items--image categoryApple__items--image">
                      <img
                        src={`${item?.product?.image.url}`}
                        alt="privilege-1"
                        width="auto"
                      />
                    </div>
                    <div className="category__items--list categoryApple__items--list">
                      <div className="category__list--title categoryApple__list--title">
                        <h4>{item?.product?.name}</h4>
                      </div>
                      <div className="category__list--price categoryApple__list--price">
                        <div className="category__priceOri categoryApple__priceOri">
                          {item?.price_original}
                        </div>
                        <div className="category__priceFinal categoryApple__priceFinal">
                          <span className="">
                            {" "}
                            {
                              item?.product?.price_range?.minimum_price
                                .final_price.value
                            }
                          </span>
                          <span className="category__priceFinal--percent categoryApple__priceFinal--percent">
                            {percentage(
                              item?.price_original ?? 0,
                              item?.product?.price_range?.minimum_price
                                .final_price.value ?? 0
                            )}{" "}
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Col>
              )
            )}
          </Row>
        </div>
      </div>
    </section>
  );
}
