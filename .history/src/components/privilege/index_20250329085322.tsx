"use client";

import { getSlider } from "@/lib/graphqlClient";
import { useQuery } from "@tanstack/react-query";
import { Row, Col } from "antd";
export default function Privilege() {
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
                    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                      <div
                        key={banner.banner_id}
                        className="privilege__list--own"
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
