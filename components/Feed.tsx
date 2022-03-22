import React, { useState, useEffect } from "react";
import { Fabric } from "./UI/Fabric";

interface Feed {
  url: string;
}

interface Fabric {
  _id: string;
  name: string;
  img: string;
  link: string;
  category: string;
  url: string;
}

export const Feed: React.FC<Feed> = ({ url }) => {
  const [fabrics, setFabrics] = useState<Fabric[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/${url}`)
      .then((res) => res.json())
      .then((res) => setFabrics(res))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <span className="text-8xl font-Title">555</span>
      </div>
    );
  }

  return (
    <div className="Feed bg-background h-screen w-full">
      <div className="Feed bg-background flex w-full grid-cols-1 flex-col items-center gap-3 pl-5 pr-5 pt-16 pb-5 md:grid">
        {fabrics.map((fabric) => (
          <Fabric
            _id={fabric._id}
            key={fabric._id}
            category={fabric.category}
            name={fabric.name}
            link={fabric.link}
            img={fabric.img}
          />
        ))}
      </div>
    </div>
  );
};
