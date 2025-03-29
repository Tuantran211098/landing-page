"use client";

import { getSlider } from "@/lib/graphqlClient";
import { useQuery } from "@tanstack/react-query";

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
    <section className="dailySales">
      {(privilegeData as any).Slider?.items?.map((item: any) => (
        <div key={item.identifier} className="dailySales--wrap">
          <h2>{item.title}</h2>
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
                className="dailySales__list"
              >
                <img
                  src={item.Banner.items[2].media}
                  alt={item.Banner.items[2].media_alt}
                  width="auto"
                />
              </div>

              <div className="dailySales__list dailySales__list--items">
                {item.Banner.items
                  .slice(3, 11)
                  .map((banner: any, index: number) => (
                    <div
                      key={banner.banner_id}
                      className="dailySales__list--own"
                    >
                      <img
                        src={banner.media}
                        alt={banner.media_alt}
                        width="auto"
                      />
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
