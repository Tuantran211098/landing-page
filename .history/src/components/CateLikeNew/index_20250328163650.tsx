"use client";

import { useQuery } from "@tanstack/react-query";
import { getCateLikeNew } from "@/lib/graphqlClient";
import { useState } from "react";
import { Row, Col } from "antd";
export default function CategoryLikeNew() {
  //////This block just call API
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

  //////This block handle percent product
  const percentage = (original: any, final: any) => {
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
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="category__flex--items categoryApple__flex--items"
          >
            {(CateLikeData as any).DailySales?.items?.[0]?.items?.map(
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
                        1.000.000
                      </div>
                      <div className="category__priceFinal categoryApple__priceFinal">
                        <span className="">
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
                          )}
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            )}
          </Row>
        </div>
      </div>
    </section>
  );
}
