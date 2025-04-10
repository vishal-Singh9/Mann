import React from "react";

const resources = [
  {
    title: "Mann HR Consultancy",
    description: "Quickly hire active jobseekers around your office.",
    points: [
      "Mann HR Verified Candidates",
      "Area-based Search",
      "Bulk WhatsApp Invites: Skip endless calls by sending custom WhatsApp invites and engage high-intent candidates quickly.",
    ],
    image:
      "https://media.licdn.com/dms/image/v2/C5112AQGS2Gst6Auvjw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1523920309454?e=2147483647&v=beta&t=N3vm2PgthlLm6M_u_7lrDijHWZBQqmU1oNO9JsvSjnw",
    link: "https://employer.apna.co/signin/?redirectType=DATABASE&redirectionSource=Homepage-database/",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white px-4 md:px-20 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-10">
        Resources - Mann HR Consultancy
      </h1>
      {resources.map((res, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center bg-blue-50 shadow-md rounded-2xl p-6 mb-10 transition hover:shadow-xl"
        >
          <img
            src={res.image}
            alt={res.title}
            className="w-full md:w-[550px] md:h-[350px] object-cover rounded-2xl mb-6 md:mb-0"
          />
          <div className="md:ml-10 w-full md:w-1/2">
            <h2 className="text-xl text-blue-600 font-semibold mb-2">
              {res.title}
            </h2>
            <p className="text-2xl font-bold text-gray-800 leading-snug mb-4">
              {res.description}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {res.points.map((point, i) => (
                <li key={i} className="text-base md:text-lg">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
