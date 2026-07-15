"use client";

import React, { useState, useEffect } from "react";
import { FaFolderOpen } from "react-icons/fa";

import { useGetAllProjects } from "@/store/hooks/project.hook";
import ProjectGrid from "./_components/ProjectGrid";
import LoadMoreButton from "./_components/LoadMore";
import ProjectFilter from "./_components/ProjectFilter";
import ProjectHero from "./_components/ProjectHero";

const categories = ["All", "frontend", "fullstack", "mobile"];

const Page = () => {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const { projects, isLoading } = useGetAllProjects(undefined);

  useEffect(() => {
    setVisibleCount(4);
  }, [active]);

  const filtered =
    active === "All"
      ? projects || []
      : (projects || []).filter(
          (p: any) => p.stackType?.toLowerCase() === active.toLowerCase(),
        );

  const visibleProjects = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="pt-12">
        <ProjectHero total={projects?.length || 0} />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10">
        <ProjectFilter
          active={active}
          setActive={setActive}
          categories={categories}
        />

        {isLoading ? (
          <ProjectGrid projects={[]} loading={true} />
        ) : filtered.length > 0 ? (
          <>
            <ProjectGrid projects={visibleProjects} loading={false} />

            <LoadMoreButton
              visibleCount={visibleCount}
              total={filtered.length}
              onClick={() => setVisibleCount((prev) => prev + 4)}
            />
          </>
        ) : (
          <div className=" flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl border border-dashed border-gray-300 bg-white px-5 py-4 lg:py-8  text-center shadow-sm">
            {/* Icon */}
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-main/10 sm:h-20 sm:w-20">
              <FaFolderOpen className="text-2xl text-main sm:text-3xl" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              No Projects Found
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-md text-sm leading-7 text-gray-600 sm:mt-4 sm:max-w-lg sm:text-base">
              There are currently no projects available in the{" "}
              <span className="font-semibold text-main capitalize">
                "{active}"
              </span>{" "}
              category. Please try another category or view all available
              projects.
            </p>

            {/* Button */}
            <button
              onClick={() => setActive("All")}
              className="mt-6 rounded-full bg-main px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:mt-8 sm:px-8 sm:py-3 sm:text-base"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
