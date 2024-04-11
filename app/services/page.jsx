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
        <h1 className="container py-36 text-6xl font-semibold tracking-widest text-white">
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

      {/* Mission and Vision section start */}

      <div className="container lg:h-[500px] h-auto w-full flex lg:flex-row flex-col items-center justify-center bg-tertiary gap-4 mb-28">
        <div className="w-full ">
          <h2 className="text-5xl font-semibold pb-10">Mission</h2>
          <p className="text-xl leading-8">
            Our purpose is to craft captivating settings where our clients' life
            stories unfold. We are entrusted with the task of selecting the
            perfect sofa for heart-to-heart conversations, a table where budding
            artists bring their visions to life, and fabrics that stir memories
            decades later. Within these walls, emotions like hope, joy, sadness,
            and laughter resonate. It's both a privilege and a commitment to
            design spaces that amplify life's experiences.
          </p>
        </div>
        <div className="w-full ">
          <div className="relative lg:h-[600px] h-[400px]">
            <Image
              src="/assets/projects/mission.jpg"
              layout="fill"
              objectFit="cover"
              alt="Mission"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Vision Section started */}
      <div className="container  h-auto w-full flex lg:flex-row flex-col items-center justify-center  gap-4 mb-28">
        <div className="w-full ">
          <Image
            src="/assets/projects/mission.jpeg"
            width={800} // Increase width
            height={1200} // Increase height
            alt="Vision"
            className="rounded-xl"
          />
        </div>
        <div className="w-full ">
          <h2 className="text-5xl font-semibold pb-10">Vision</h2>
          <p className="text-xl leading-8">
            Our purpose is to craft captivating settings where our clients' life
            stories unfold. We are entrusted with the task of selecting the
            perfect sofa for heart-to-heart conversations, a table where budding
            artists bring their visions to life, and fabrics that stir memories
            decades later. Within these walls, emotions like hope, joy, sadness,
            and laughter resonate. It's both a privilege and a commitment to
            design spaces that amplify life's experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;