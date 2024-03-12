"use client";

import React from "react";
import { ClipLoader } from "react-spinners";

interface SpinnerProps {
  loading: boolean;
}

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }: SpinnerProps) => {
  return (
    <ClipLoader
      size={150}
      color="#3B82F6"
      loading={loading}
      cssOverride={override}
      aria-label="Loading SPinner"
    />
  );
};

export default Spinner;
