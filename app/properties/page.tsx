import React from "react";
import PropertyCard from "@/components/PropertyCard";
import { apiUrl } from "@/constants";
import { Property } from "@/types";

async function fetchProperties(): Promise<Property[]> {
  try {
    const res = await fetch(`${apiUrl}/properties`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data.properties;
  } catch (error: any) {
    return error.message;
  }
}

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <div>No properties found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
