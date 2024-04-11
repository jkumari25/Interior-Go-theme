import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "The living room: where family gathers and bonds.",
    description:
      "Experience the charm of modern design in this family bedroom, boasting a clean and inviting atmosphere for utmost comfort.",
    image: "/assets/projects/project-3.jpg",
    link: "",
  },
  {
    id: 2,
    name: "The kitchen: where families unite through food.",
    description:
      "The kitchen: a hub of culinary creativity and familial connection, where delicious aromas mingle with laughter and love.",
    image: "/assets/projects/project-1.jpeg",
    link: "",
  },
  {
    id: 3,
    name: "The living room: where family connects and unwinds.",
    description:
      "The living room: the heart of the home, where comfort meets connection and memories are made.",
    image: "/assets/projects/project-2.jpeg",
    link: "",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-[url('/assets/projects/Sofa.png')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
          Our Services
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in- translate-y-full from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
