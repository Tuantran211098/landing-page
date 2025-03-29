"use client";

import { useQuery } from "@tanstack/react-query";
import { getSlider } from "@/lib/graphqlClient";
import DailySales from "@/components/DailySales";
import Privilege from "@/components/privilege";
import CategoryApple from "@/components/CategoryApple";
import CategoryLikeNew from "@/components/CateLikeNew";
import CategorySamsung from "@/components/CategorySamsung";
import CategoryAndroid from "@/components/CategoryAndroid";
import FooterCom from "@/components/footer/FooterMid";
import FooterMid from "@/components/footer/FooterMid";
import FooterTop from "@/components/footer/FooterTop";
import "../styles/global.scss";
import { useEffect, useRef } from "react";
import Fireworks from "fireworks-js";
export default function Home() {
  //////This block just add animate flare
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const fireworks = new Fireworks(ref.current, {
        traceSpeed: 3, // Tốc độ
        particles: 200, // Số tia nổ
        traceLength: 3, // Hiệu ứng vệt sáng
        explosion: 5, // Kích thước nổ
        intensity: 5, // Cường độ nổ
        delay: { min: 20, max: 40 }, // Thời gian giữa các lần nổ
      });

      fireworks.start(); // Bắt đầu hiệu ứng

      return () => fireworks.stop(); // Dừng khi unmount
    }
  }, []);

  //////This block just call API
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
    <div className="landingpage" ref={ref}>
      {/* //block banner */}
      <section className="banner">
        {(bannerData as any).Slider?.items?.map((item: any) => (
          <div key={item.identifier}>
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
      <main>
        {/* //block privilege */}
        <Privilege />

        {/* //block CategoryApple */}
        <CategoryApple />
        {/* //block CategoryLikeNew */}
        <CategoryLikeNew />
        {/* //block CategorySamsung */}
        <CategorySamsung />
        {/* //block CategoryAndroid */}
        <CategoryAndroid />
      </main>
      <footer className="footer">
        <FooterTop />
        <FooterMid />
      </footer>
    </div>
  );
}
