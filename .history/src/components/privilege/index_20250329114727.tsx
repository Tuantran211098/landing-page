"use client";
import { useEffect, useRef } from "react";
import { getSlider } from "@/lib/graphqlClient";
import { useQuery } from "@tanstack/react-query";
import { Row, Col } from "antd";
export default function Privilege() {
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

  // Gọi API lấy Daily Sales
  const {
    data: privilegeData,
    isLoading: loadingPrivilege,
    error: privilegeError,
  } = useQuery({
    queryKey: ["privilge"],
    queryFn: getSlider,
  });

  console.log("data privilegeData:", privilegeData);
  if (loadingPrivilege) return <p>Loading...</p>;
  if (privilegeError) return <p>Error: {(privilegeError as Error).message}</p>;

  return (
    <section className="category categoryPrivilege">
      {(privilegeData as any).Slider?.items?.map((item: any) => (
        <div key={item.identifier} className="privilege--wrap">
          {/* {item.Banner.items.map((banner: any) => (
              <div key={banner.banner_id}>
                <img src={banner.media} alt={banner.media_alt} width="auto" />
                <p>{banner.caption}</p>
              </div>
            ))} */}
          {item.Banner.items.length > 0 && ( // Kiểm tra xem có phần tử nào không
            <>
              <div
                key={item.Banner.items[2].banner_id}
                className="privilege__list privilege__list--top"
              >
                <img
                  src={item.Banner.items[2].media}
                  alt={item.Banner.items[2].media_alt}
                  width="auto"
                />
              </div>

              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}
                className="privilege__list privilege__list--items"
              >
                {item.Banner.items
                  .slice(3, 11)
                  .map((banner: any, index: number) => (
                    <Col xs={12} sm={12} md={8} lg={6} xl={4}>
                      <div
                        key={banner.banner_id}
                        className="privilege__list--own"
                        ref={(el: any) => (elementsRef.current[index] = el)}
                      >
                        <img
                          src={banner.media}
                          alt={banner.media_alt}
                          width="auto"
                        />
                      </div>
                    </Col>
                  ))}
              </Row>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
