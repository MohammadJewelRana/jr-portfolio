"use client";

import React, { useState, useEffect } from "react";
import { useGetAllProjects } from "@/store/hooks/project.hook";
import BlogHero from "./_components/BlogHero";
 

const categories = ["All", "frontend", "fullstack", "mobile"];

const page = () => {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const { projects, isLoading } = useGetAllProjects(undefined);

  useEffect(() => {
    setVisibleCount(4);
  }, [active]);

  const filtered =
    active === "All"
      ? projects
      : projects?.filter(
          (p: any) => p.stackType?.toLowerCase() === active.toLowerCase(),
        );

  const visibleProjects = filtered?.slice(0, visibleCount);

  return (
    <div className="">
      <div className="">
        <BlogHero total={projects?.length || 0} />
      </div>

 




    </div>
  );
};

export default page;
