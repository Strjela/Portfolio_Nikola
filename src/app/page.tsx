"use client";

import ReactPageScroller from "react-page-scroller";
import About from "./pageParts/about/About";
import Contact from "./pageParts/contact/Contact";
import Hero from "./pageParts/hero/Hero";
import Projects from "./pageParts/projects/Projects";
import React, { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number: any) => {
    setCurrentPage(number);
  };
  return (
    <>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
        animationTimer={1500}
      >
        <Hero handlePageChange={handlePageChange} />
        <About />
        <Projects />
        <Contact />
      </ReactPageScroller>
    </>
  );
}
