import React from "react";
import { ThumbsUp } from "phosphor-react";

const DEVPostCard = ({ src, title, date, reactions, description, url }) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap border-b border-black bg-faded-white px-3">
      <div className="w-64 md:w-64 md:mb-0 mb-6 mr-5 flex-shrink-0 flex flex-col relative">
        <span className="mt-1 text-gray-500 text-sm">{date.slice(0, 10)}</span>
        <img
          className="pt-1 rounded-xl"
          alt="article cover img"
          src={src}
        ></img>
        <div className="bg-white rounded-xl absolute reactions p-1">
          {reactions} <ThumbsUp className="inline " size={28} />
        </div>
      </div>

      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 font-roboto">
          {title}
        </h2>
        <p className="leading-relaxed">{description}</p>
        <a href={url} className="text-indigo-500 inline-flex items-center mt-4">
          Read Article
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default DEVPostCard;
