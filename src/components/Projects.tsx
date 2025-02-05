"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import type { data } from "../data/data";

export default function Projects({
  projects,
}: {
  projects: typeof data.projects;
}) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#1E1F4B] mb-16">
          Featured Projects
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl w-full max-w-[350px] mx-auto flex flex-col"
              >
                <div className="relative overflow-hidden flex-grow">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl text-[#1E1F4B] group-hover:text-[#7510F7] transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 space-y-2">
                    {project.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    className="w-full bg-[#7510F7] hover:bg-[#6209e5] text-white transition-colors duration-300"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
