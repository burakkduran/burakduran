"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, Radio } from "lucide-react";

import { useProjectStore } from "@/store/projectStore";

function ProjectCard() {
  const projects = useProjectStore((state) => state.projects);

  return projects.map((project, index) => (
    <Card className="w-[320px]" key={index}>
      <CardHeader>
        <Image
          className="rounded-lg"
          src={project.image}
          width={320}
          height={150}
          alt={project.name}
          priority
        />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <CardTitle>{project.name}</CardTitle>

          <div className="flex gap-2">
            <a href={project.links.live}>
              <Radio />
            </a>
            <a href={project.links.github}>
              <Github />
            </a>
          </div>
        </div>
        <CardDescription className="mt-2">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  ));
}

export default ProjectCard;
