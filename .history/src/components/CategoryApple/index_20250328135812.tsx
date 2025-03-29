"use client";

import { useQuery } from "@tanstack/react-query";
import { getSlider } from "@/lib/graphqlClient";
import DailySales from "@/components/DailySales";
import Privilege from "@/components/privilege";

export default function CategoryApple() {
  const {
    data: bannerData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["slider"],
    queryFn: getSlider,
  });
  console.log("data", bannerData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <section className="categoryApple">
      {(bannerData as any).Slider?.items?.map((item: any) => (
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
