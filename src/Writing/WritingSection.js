import React, { useEffect, useState } from "react";
import Writing from "../SVGs/WomanWriting";
import Notepad from "../SVGs/Notepad";
import devAPI from "../API/devAPI";
import DEVPostCard from "./DEVPostCard";

const WritingSection = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await devAPI.getArticles();
        console.log(res);
        setArticles(res);
      } catch (e) {
        console.log(e);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="flex-grow font-monocut px-5 sm:px-3 relative">
      <h1 className="font-roboto font-bold text-2xl text-center py-10">
        Writing.
      </h1>

      <p className="max-w-prose mx-auto bg-faded-white rounded-full">
        I am constantly discovering new things, and I find that writing helps me
        solidify my knowledge. Having discovered coding relatively late in life
        via a non-traditional route, I am grateful for all online resources that
        helped motivate and teach me.
      </p>
      <br></br>
      <p className="max-w-prose mx-auto bg-faded-white rounded-full">
        I've been fortunate in my coding journey, and the least I can do is{" "}
        <b className="font-open highlight">pay my good fortune forward</b> by
        contributing to the body of literature in the hope someone out there
        might find it useful.
      </p>
      <Writing className="mx-auto -mt-10 sm:w-4/12 bg-faded-white rounded-full" />
      <div class="container px-5 mx-auto mb-20 w-9/12 border-t border-black">
        {articles.map((a) => (
          <DEVPostCard
            reactions={a.positive_reactions_count}
            src={a.cover_image}
            title={a.title}
            date={a.published_at}
            description={a.description}
            url={a.url}
          />
        ))}
      </div>
    </div>
  );
};

export default WritingSection;
