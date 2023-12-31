import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/node.png";
import wordpress from "../assets/wordpress.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/mysql.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: wordpress,
      title: "WordPress",
      style: "shadow-sky-300",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

    {
      id: 9,
      src: mysql,
      title: "MySQL",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div
      name="experiência"
      className="bg-gradient-to-b from-blue-950   to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-80 ">
          <p className="text-4xl font-bold border-b-4 border-white p-2 inline">
            Experiência
          </p>
          <p className="py-6">Essas são as técnologias que eu já trabalhei.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;