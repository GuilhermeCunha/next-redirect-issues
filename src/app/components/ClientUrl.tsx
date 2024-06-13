"use client";
import React, { useEffect } from "react";

export const ClientUrl: React.FC = () => {
  const [url, setUrl] = React.useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return <h1>Client URL: {url}</h1>;
};

export default ClientUrl;
