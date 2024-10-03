// components/ListProjects.tsx
import React from "react";
import { IconType } from "react-icons";
import {
  FiActivity,
  FiBook,
  FiCoffee,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import HoverEffect from "./ui/hover-effect";

interface Project {
  name: string;
  link?: string;
  desc: string;
  icon: string;
}

interface ListProjectsProps {
  projects: Record<string, Project[]>;
}

const iconMap: Record<string, IconType> = {
  robot: FiActivity,
  sparkle: FiActivity,
  "book-open": FiBook,
  shield: FiShield,
  users: FiUsers,
  toast: FiCoffee,
  fruit: FiCoffee, // Using coffee icon as a placeholder for fruit
};

const ListProjects: React.FC<ListProjectsProps> = ({ projects }) => {
  return (
    <>
      {Object.entries(projects).map(([key, items]) => (
        <div key={key} className="mb-10">
          <h4 className="text-2xl font-bold mb-4">{key}</h4>
          <div className="grid grid-cols-1">
            {items.map((item, idx) => {
              const Icon = iconMap[item.icon] || FiCoffee;
              return (
                <HoverEffect>
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center py-1 px-2 rounded-lg transition-colors ${
                      item.link
                        ? "cursor-pointer"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                    title={item.name}
                  >
                    <div className="mr-4">
                      <Icon className="text-3xl opacity-50" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </a>
                </HoverEffect>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListProjects;
