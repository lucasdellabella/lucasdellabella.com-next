// components/ListProjects.tsx
import React from "react";
import { IconBaseProps, IconType } from "react-icons";
import { FiCoffee, FiUsers } from "react-icons/fi";
import { GiCrenulatedShield } from "react-icons/gi";
import { GrToast } from "react-icons/gr";
import { HiOutlineSparkles } from "react-icons/hi2";
import { LiaKiwiBirdSolid } from "react-icons/lia";
import { RiNotionFill } from "react-icons/ri";
import { SiJupyter } from "react-icons/si";
import { VscRobot, VscVscode } from "react-icons/vsc";

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
  robot: VscRobot,
  sparkle: HiOutlineSparkles,
  "book-open": RiNotionFill,
  shield: GiCrenulatedShield,
  users: FiUsers,
  toast: GrToast,
  fruit: LiaKiwiBirdSolid, // Using coffee icon as a placeholder for fruit
  vscode: VscVscode,
  jupyter: (props: IconBaseProps) => {
    return (
      <div className="relative">
        <SiJupyter {...props} />
        <div className="absolute text-[0.35rem] font-bold top-[50%] left-[50%] -translate-[50%]">
          Jupyter
        </div>
      </div>
    );
  },
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
