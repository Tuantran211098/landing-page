"use client";
import "animate.css";
import { useQuery } from "@tanstack/react-query";
import { getCateLikeNew } from "@/lib/graphqlClient";
import { useEffect, useRef } from "react";
import { Row, Col } from "antd";
export default function CategoryLikeNew() {
  //////This block just use animated when user scroll down and add class
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]); // Mảng ref

  useEffect(() => {
    const handleScroll = () => {
      elementsRef.current.forEach((el) => {
        if (el) {
          const top = el.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (top < windowHeight * 0.9) {
            el.classList.add(
              "animate__animated",
              "animate__bounce",
              "animate__fadeInUp"
            );
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <section className="category categoryLikeNew">
      <div className="category__container categoryLikeNew__container">
        <div className="category__top categoryLikeNew__top">
          <img
            src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/may99555555555555.png"
            alt="like new 99"
            width="auto"
          />
        </div>
        <div className="category__bottom categoryLikeNew__bottom">
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
            className="category__flex--items categoryLikeNew__flex--items"
          >
            {(CateLikeData as any).DailySales?.items?.[0]?.items?.map(
              (item: any, index: any) => (
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={4}
                  key={item?.product?.name}
                  ref={(el: any) => (elementsRef.current[index] = el)}
                  className="category__items categoryLikeNew__items"
                >
                  <div className="category__items--href">
                    <a href={`/${item?.product?.url_key}`}>
                      <div className="category__items--image categoryLikeNew__items--image">
                        <img
                          src={`${item?.product?.image.url}`}
                          alt="privilege-1"
                          width="auto"
                        />
                      </div>
                      <div className="category__items--list categoryLikeNew__items--list">
                        <div className="category__list--title categoryLikeNew__list--title">
                          <h4>{item?.product?.name}</h4>
                        </div>
                        <div className="category__list--price categoryLikeNew__list--price">
                          <div className="category__priceOri categoryLikeNew__priceOri">
                            <p>
                              {" "}
                              {Number(item?.price_original).toLocaleString(
                                "vi-VN"
                              )}
                            </p>
                            <span className="category__priceFinal--percent categoryLikeNew__priceFinal--percent">
                              {percentage(
                                item?.price_original ?? 0,
                                item?.product?.price_range?.minimum_price
                                  .final_price.value ?? 0
                              )}
                              %
                            </span>
                          </div>
                          <div className="category__priceFinal categoryLikeNew__priceFinal">
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
