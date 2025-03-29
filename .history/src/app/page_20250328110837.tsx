"use client";

import { useQuery } from "@tanstack/react-query";
import { getSlider } from "@/lib/graphqlClient";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["slider"],
    queryFn: getSlider,
  });
  console.log("data", data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="landingpage">
      <h1>Slider Data</h1>
      <section className="banner"></section>
      {(data as any).Slider?.items?.map((item: any) => (
        <div key={item.identifier}>
          <h2>{item.title}</h2>

          <div key={item.Banner.items.banner_id}>
            <img
              src={item.Banner.items.media}
              alt={item.Banner.items.media_alt}
              width="auto"
            />
            <p>{item.Banner.items.caption}</p>
          </div>

          {/* {item.Banner.items.map((banner: any) => (
            <div key={banner.banner_id}>
              <img src={banner.media} alt={banner.media_alt} width="auto" />
              <p>{banner.caption}</p>
            </div>
          ))} */}
        </div>
      ))}
    </div>
  );
}
