"use client";

import React, { useEffect, useRef } from "react";

const NewsletterForm = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://daniel-dultsin.kit.com/2a4cae8daa/index.js";
    script.setAttribute("data-uid", "2a4cae8daa");

    formContainerRef.current?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="w-full mb-12">
      <div ref={formContainerRef} className="w-full flex justify-center" />
    </section>
  );
};

export default NewsletterForm;
