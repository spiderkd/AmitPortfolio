const data = [
  {
    id: 1,
    title: "UX Design",
    description:
      "I craft intuitive, human-centered experiences that simplify complexity.",
    end: false,
  },
  {
    id: 2,
    title: "Design Strategy",
    description:
      "I align design initiatives with business goals to drive impactful results.",
    end: false,
  },
  {
    id: 3,
    title: "Design Strategy",
    description:
      "I align design initiatives with business goals to drive impactful results.",
    end: false,
  },
  {
    id: 4,
    title: "Design Strategy",
    description:
      "I align design initiatives with business goals to drive impactful results.",
    end: false,
  },
  {
    id: 5,
    title: "Collaboration & Leadership",
    description:
      "I align design initiatives with business goals to drive impactful results.",
    end: true,
  },
];

export function SkillSet() {
  return (
    <div className="grid h-screen grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
      <div className="col-span-2 mt-28 flex items-start justify-center text-6xl text-black">
        more about <br /> my skill set
      </div>
      <div className="col-span-4 grid grid-flow-row grid-rows-6 gap-4 p-4">
        {data.map((item) => (
          <div
            className="row-span-1 grid grid-cols-2 gap-4 border-b border-black sm:grid-cols-3 md:grid-cols-4"
            style={item.end ? { borderBottom: "none" } : {}}
          >
            <div className="col-span-2 grid grid-cols-5 items-center p-4">
              <div className="col-span-1 flex h-12 w-12 items-center justify-center rounded-full bg-pink-400 text-2xl font-bold text-white">
                {item.id}
              </div>
              <div className="col-span-4 text-2xl"> {item.title}</div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSet;
