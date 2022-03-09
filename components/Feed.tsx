import React, { useState, useEffect } from "react";
import { Fabric } from "./UI/Fabric";

interface Feed {}

interface Fabric {
  _id: string;
  name: string;
  img: string;
  link: string;
  category: string;
}

export const Feed: React.FC<Feed> = ({}) => {
  const [fabrics, setFabrics] = useState<Fabric[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/api/fabrics")
      .then((res) => res.json())
      .then((res) => setFabrics(res));

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="Feed bg-background">
      <div className="Feed md:grid w-full grid-cols-1 gap-3 pl-5 pr-5 pt-16 pb-5 flex items-center flex-col">
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
