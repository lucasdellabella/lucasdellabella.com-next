"use client";

import { SkipForward } from "lucide-react";
import { useEffect, useState } from "react";

const Page = () => {
  const [index, setIndex] = useState(0);
  const [firstEmbedHadTimeToLoad, setFirstEmbedHadTimeToLoad] = useState(false);
  const songs = [
    { id: 835612252 },
    { id: 828577543 },
    { id: 455122617 },
    { id: 333356598 },
    { id: 330547202 },
    { id: 322109408 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstEmbedHadTimeToLoad(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const embedURL = (trackId: number) =>
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true`;

  const nextSong = () => {
    setIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Music</h1>
      <div className="iframe-container">
        <div className="button-backing bg-gradient-to-tr from-[rgba(200,200,200,1)] to-[rgb(249,250,251)] to-30% dark:bg-gradient-to-br dark:from-transparent dark:to-[rgba(10,10,10,1)]">
          <div className="button-wrapper">
            <button
              onClick={nextSong}
              className="flex cursor-pointer justify-center items-center"
            >
              <SkipForward
                size={32}
                className="skip-icon dark:text-neutral-50 text-neutral-700"
              />
            </button>
          </div>
        </div>
        {songs.map((song, i) => (
          <iframe
            key={song.id}
            style={{ display: i === index ? "block" : "none" }}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay scripts"
            src={embedURL(song.id)}
          ></iframe>
        ))}
        <div className="loading-border"></div>

        <style jsx>{`
        .button-backing {
          border-radius: 100px;
          position: absolute;
          width: 90px;
          height: 90px;
          top: -38px;
          right: -38px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dark .skip-icon {
          box-shadow: inset 0px -7px 11px 5px black;
        }

        :global(.dark) button {
          box-shadow: -3px 3px 10px 0px #353535;
          color: black;
        }

        :global(.dark) iframe {
          box-shadow: none;
        }

        :global(.dark) .loading-border {
          outline: solid 1px rgba(249, 250, 251, 1);
        }

        .loading-border {
          width: 100%;
          height: 100%;
          outline: solid 1px black;
          outline-offset: -1px;
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 12px;
        }

        .iframe-container {
          position: relative;
          padding-bottom: -12px;
        }

        button {
          width: 64px;
          height: 64px;
          background-image: linear-gradient(45deg, #d9d2c4, #fad9b7);
          color: rgba(249, 250, 251, 1);
          border-radius: 100px;
          transition: all 0.4s ease;
          box-shadow: -3px 3px 10px 0px #cacaca;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button:hover {
          transform: scale(1.13);
        }

        iframe {
          border-radius: 10px;
          box-shadow: -5px 5px 18px;
        
      `}</style>
      </div>
    </div>
  );
};

export default Page;
