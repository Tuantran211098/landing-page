"use client";

import { useQuery } from "@tanstack/react-query";
import { getCateAndroid } from "@/lib/graphqlClient";

import { useState } from "react";
import { Row, Col } from "antd";
export default function CategoryAndroid() {
  //////This block just call API
  const {
    data: CateAndroid,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cateAndroid"],
    queryFn: getCateAndroid,
    // enabled: activeTab === "iphone",
  });
  console.log("CateAndroid", CateAndroid);

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
    <section className="category categoryAndroid">
      <div className="category__container categorySamsung__container">
        <div className="category__top categorySamsung__top">
          <img
            src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/app55555555555.png"
            alt="privilege-1"
            width="auto"
          />
        </div>
        <div className="category__bottom categorySamsung__bottom">
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="category__flex--items categorySamsung__flex--items"
          >
            {(CateAndroid as any).DailySales?.items?.[0]?.items?.map(
              (item: any) => (
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={4}
                  key={item?.product?.name}
                  className="category__items categorySamsung__items"
                >
                  <div className="category__items--href">
                    <a href={`/${item?.product?.url_key}`}>
                      <div className="category__items--image categorySamsung__items--image">
                        <img
                          src={`${item?.product?.image.url}`}
                          alt="privilege-1"
                          width="auto"
                        />
                      </div>
                      <div className="category__items--list categorySamsung__items--list">
                        <div className="category__list--title categorySamsung__list--title">
                          <h4>{item?.product?.name}</h4>
                        </div>
                        <div className="category__list--price categorySamsung__list--price">
                          <div className="category__priceOri categorySamsung__priceOri">
                            <p>
                              {" "}
                              {Number(item?.price_original).toLocaleString(
                                "vi-VN"
                              )}
                            </p>
                            <span className="category__priceFinal--percent categoryAndroid__priceFinal--percent">
                              {percentage(
                                item?.price_original ?? 0,
                                item?.product?.price_range?.minimum_price
                                  .final_price.value ?? 0
                              )}
                              %
                            </span>
                          </div>
                          <div className="category__priceFinal categorySamsung__priceFinal">
                            <span className="">
                              {item?.product?.price_range?.minimum_price.final_price.value.toLocaleString(
                                "vi-VN"
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
