import React, { useEffect, useState } from "react";
import Writing from "../SVGs/WomanWriting";
import devAPI from "../API/devAPI";
import DEVPostCard from "./DEVPostCard";
import RotatingPencil from "./RotatingPenicl";
import APIError from "./APIError";
import Footer from "../Common/Footer";

const WritingSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const res = await devAPI.getArticles();
        setArticles(res);
        setIsLoading(false);
      } catch (e) {
        setError(true);
        console.log(e);
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <div className="flex-grow font-monocut px-5 sm:px-3 relative mb-60">
        <h1 className="font-roboto font-bold text-2xl text-center py-10">
          Writing.
        </h1>

        <p className="max-w-prose mx-auto bg-faded-white rounded-full">
          I am constantly discovering new things, and I find that writing helps
          me solidify my knowledge. Having discovered coding relatively late in
          life via a non-traditional route, I am grateful for all online
          resources that helped motivate and teach me.
        </p>
        <br></br>
        <p className="max-w-prose mx-auto bg-faded-white rounded-full">
          I've been fortunate in my coding journey, and the least I can do is{" "}
          <b className="font-open highlight">pay my good fortune forward</b> by
          contributing to the body of literature in the hope someone out there
          might find it useful.
        </p>
        <Writing className="mx-auto sm:w-4/12 bg-faded-white rounded-full" />
        <div className="container px-5 mx-auto mb-20 sm:w-9/12 pt-16 border-t border-black">
          {isLoading ? <RotatingPencil /> : null}
          {error ? <APIError /> : null}
          {articles.map((a, i) => (
            <DEVPostCard
              key={i}
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
      <Footer />
    </>
  );
};

export default WritingSection;
