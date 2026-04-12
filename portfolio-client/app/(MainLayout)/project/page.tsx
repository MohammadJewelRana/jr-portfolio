"use client";

import React, { useState, useEffect } from "react";
import { useGetAllProjects } from "@/store/hooks/project.hook";
import ProjectGrid from "./_components/ProjectGrid";
import LoadMoreButton from "./_components/LoadMore";
import ProjectFilter from "./_components/ProjectFilter";
import ProjectHero from "./_components/ProjectHero";

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
        <ProjectHero total={projects?.length || 0} />
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <ProjectFilter
          active={active}
          setActive={setActive}
          categories={categories}
        />

        <ProjectGrid projects={visibleProjects} loading={isLoading} />

        <LoadMoreButton
          visibleCount={visibleCount}
          total={filtered?.length}
          onClick={() => setVisibleCount((prev) => prev + 4)}
        />
      </div>
    </div>
  );
};

export default page;
