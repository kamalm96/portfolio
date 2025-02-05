import { Briefcase, Calendar } from "lucide-react";
import { data } from "../data/data";

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1E1F4B] mb-12">
          My Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#7510F7] rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-[#1E1F4B]">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-[#7510F7] flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
