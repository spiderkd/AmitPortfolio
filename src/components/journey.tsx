import svgUnderline from "../assets/underline.svg";

const data = [
  {
    year: "2025",
    color: "#BAE6FF",
    time: "6 months",
    company: "Truecaller",
    designation: "Graphic Design Intern",
    desc: "Created digital ad campaigns and UI-driven visuals for a global tech brand. Designed the interactive post-call popup ad, enhancing user engagement and visibility for Truecaller's ad network.",
    logo: "/logos/logo1.webp",
  },
  {
    year: "2025",
    time: "4 months",
    color: "#FF6258",
    company: "24K Collective Creatives",
    designation: "Graphic Designer",
    desc: "Leading the creative direction for a marketing & design startup. Managed end-to-end branding projects, from logo systems to digital campaigns, and redesigned the company's visual identity. Worked with clients like HOOL, OCL, Radisson Blu, and CASE.",
    logo: "/logos/logo8.webp",
  },
  {
    year: "2024",
    time: "11 months",
    color: "#FFDC58",
    company: "YourFirstAd",
    designation: "Lead Graphic Designer",
    desc: "Contributed to branding and creative projects in a studio setting. Designed campaign visuals, digital graphics, and identity concepts that strengthened client brands.",
    logo: "/logos/logo3.webp",
  },
  {
    year: "2024",
    color: "#C6E99F",
    time: "6 months",
    company: "GeeksforGeeks",
    designation: "Graphic Design Intern",
    desc: "Transformed complex coding and tech concepts into easy-to-understand infographics, social creatives, and digital visuals for millions of learners. Contributed to GeeksforGeeks' strong online design presence.",
    logo: "/logos/logo4.webp",
  },
  {
    year: "2023",
    color: "#BAE6FF",
    time: "3 months",
    company: "GAOTek Inc.",
    designation: "Graphic Designer",
    desc: "Worked on branding, digital assets, and presentation design for a New York-based technology company. Built strong foundations in professional client-facing design.",
    logo: "/logos/logo5.webp",
  },
];

// export default Journey;
export function Journey() {
  return (
    <section>
      <div className="relative mx-auto my-20 max-w-md">
        <h1 className="text-center text-4xl font-medium">My Journey</h1>
        <img
          src={svgUnderline.src}
          alt="arrow"
          width="140"
          className="absolute -bottom-1 left-50"
        />
      </div>
      <div className="mx-auto mt-10 flex max-w-5xl snap-x snap-mandatory space-x-6 overflow-x-auto p-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-[400px] flex-shrink-0 snap-center rounded-xl bg-white p-10 shadow-md"
          >
            {/* Top Row */}
            <div className="mb-5 flex items-center justify-between space-x-2">
              <p
                className={`rounded-3xl px-5 py-2 text-base`}
                style={{ fontFamily: "Helvetica", backgroundColor: item.color }}
              >
                {item.year}
              </p>

              {/* --- Fixed Image Container --- */}
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* Company + Time */}
            <div
              className="mb-5 flex items-center"
              style={{ fontFamily: "Helvetica" }}
            >
              <p className="border-r-2 border-gray-500 pr-2 text-base text-gray-500">
                {item.company}
              </p>
              <p className="ml-2 text-base text-gray-400">{item.time}</p>
            </div>

            {/* Role */}
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "Mostical" }}
            >
              {item.designation}
            </h3>

            {/* Description */}
            <p
              className="text-sm text-gray-400"
              style={{ fontFamily: "Helvetica" }}
            >
              {item.desc}
            </p>

            {/* Optional border frame */}
            <div className="absolute bottom-0 left-1/2 w-[105%] -translate-x-1/2 rounded-full border-b-2" />
            <div className="absolute top-0 left-1/2 w-[105%] -translate-x-1/2 rounded-full border-t-2" />
            <div className="absolute -bottom-2 left-0 h-[105%] rounded-full border-l-2" />
            <div className="absolute right-0 -bottom-2 h-[105%] rounded-full border-r-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
