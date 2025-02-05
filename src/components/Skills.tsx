"use client";

import { BrainCircuit, Code, User } from "lucide-react";
import type React from "react";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 rounded-full bg-[#4BE3AC] flex items-center justify-center mx-auto mb-6">
    <div className="flex items-center justify-center w-full h-full text-[#1E1F4B]">
      {children}
    </div>
  </div>
);

const SkillSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mt-6">
    <h4 className="text-[#7510F7] font-medium mb-2">{title}</h4>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

interface SkillsProps {
  skills: {
    icon: string;
    title: string;
    description: string;
    subtitle: string;
    items: string[];
    tools: {
      title: string;
      items: string[];
    };
  }[];
}

export default function Skills({ skills }: SkillsProps) {
  const icons = {
    brain: <BrainCircuit />,
    code: <Code />,
    user: <User />,
  };

  return (
    <section className="py-20 -mt-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-12 text-center ${
                index === 1
                  ? "border-t border-b md:border-t-0 md:border-x border-gray-200"
                  : ""
              }`}
            >
              <IconWrapper>
                {icons[skill.icon as keyof typeof icons]}
              </IconWrapper>
              <h3 className="text-xl font-bold mb-4 text-[#1E1F4B]">
                {skill.title}
              </h3>
              <p className="text-gray-600 mb-6">{skill.description}</p>
              <SkillSection title={skill.subtitle} items={skill.items} />
              <SkillSection
                title={skill.tools.title}
                items={skill.tools.items}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
