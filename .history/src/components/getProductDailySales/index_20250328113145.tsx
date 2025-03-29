"use client";

import { useQuery } from "@tanstack/react-query";
import { getSlider, getProductDailySales } from "@/lib/graphqlClient";

export default function DailySales() {
  // Gọi API lấy Daily Sales
  const {
    data: salesData,
    isLoading: loadingSales,
    error: salesError,
  } = useQuery({
    queryKey: ["dailySales"],
    queryFn: () => getProductDailySales(10, 1), // Tham số có thể thay đổi
  });

  console.log("data salesData:", salesData);
  if (loadingSales) return <p>Loading...</p>;
  if (salesError) return <p>Error: {(salesError as Error).message}</p>;

  return (
    <section className="dailySales">
      {(salesData as any).Slider?.items?.map((item: any) => (
        <div key={item.identifier}>
          <h2>{item.title}</h2>
          {/* {item.Banner.items.map((banner: any) => (
              <div key={banner.banner_id}>
                <img src={banner.media} alt={banner.media_alt} width="auto" />
                <p>{banner.caption}</p>
              </div>
            ))} */}
          {item.Banner.items.length > 0 && ( // Kiểm tra xem có phần tử nào không
            <div key={item.Banner.items[0].banner_id}>
              <img
                src={item.Banner.items[0].media}
                alt={item.Banner.items[0].media_alt}
                width="auto"
              />
              <p>{item.Banner.items[0].caption}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
