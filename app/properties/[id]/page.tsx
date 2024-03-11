"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Property } from "@/types";
import { fetchData } from "@/utils/fetchData";
import ProperyHeaderImage from "@/components/properties/ProperyHeaderImage";

const propertyDetailes = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        if (!id) return;
        const res = await fetchData<Property>({ url: `/properties/${id}` });
        setProperty(res);
      } catch (error) {
        console.log("Error fetching property: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      getData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }
  return (
    <div>
      {!loading && property && (
        <>
          <ProperyHeaderImage image={property.images[0]} />
        </>
      )}
    </div>
  );
};

export default propertyDetailes;
