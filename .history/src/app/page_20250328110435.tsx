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
      {(data as any).Slider?.items?.map((item: any) => (
        <div key={item.identifier}>
          <h2>{item.title}</h2>
          {item.Banner.items.map((banner: any) => (
            <div key={banner.banner_id}>
              <img src={banner.media} alt={banner.media_alt} width="auto" />
              <p>{banner.caption}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
