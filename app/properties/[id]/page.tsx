"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Property } from "@/types";
import { fetchData } from "@/utils/fetchData";

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

  console.log({ id, property });

  return <div>propertyDetailes</div>;
};

export default propertyDetailes;
