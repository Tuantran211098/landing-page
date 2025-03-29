"use client";

import { useQuery } from "@tanstack/react-query";
import { getSlider, getProductDailySales } from "@/lib/graphqlClient";

export default function Privilege() {
  // Gọi API lấy Daily Sales
  const {
    data: privilegeData,
    isLoading: loadingPrivilege,
    error: privilegeError,
  } = useQuery({
    queryKey: ["dailySales"],
    queryFn: () => getSlider,
  });

  console.log("data privilegeData:", privilegeData);
  if (loadingPrivilege) return <p>Loading...</p>;
  if (privilegeError) return <p>Error: {(privilegeError as Error).message}</p>;

  return (
    <section className="dailySales">
      {(privilegeData as any).Slider?.items?.map((item: any) => (
        <div key={item.identifier}>
          <h2>{item.title}</h2>
          {/* {item.Banner.items.map((banner: any) => (
              <div key={banner.banner_id}>
                <img src={banner.media} alt={banner.media_alt} width="auto" />
                <p>{banner.caption}</p>
              </div>
            ))} */}
          {item.Banner.items.length > 0 && ( // Kiểm tra xem có phần tử nào không
            <div key={item.Banner.items[3].banner_id}>
              <img
                src={item.Banner.items[3].media}
                alt={item.Banner.items[3].media_alt}
                width="auto"
              />
              <p>{item.Banner.items[3].caption}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
