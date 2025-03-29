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
      <div className="categoryApple__container">
        <div className="categoryApple__top">
          <img
            src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/app55555555555.png"
            alt="privilege-1"
            width="auto"
          />
        </div>
        <div className="categoryApple__bottom"></div>
      </div>
    </section>
  );
}
