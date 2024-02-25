"use client";
import React, { useState } from "react";

const Musicframe = (props) => {
  return (
    <iframe
      title="Embedded Content"
      className="w-full h-16 mt-2"
      src={`https://open.spotify.com/embed/playlist/${props.data}?utm_source=generator`}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

const Music = () => {
  const [show, setShow] = useState(false);

  // .......................................................
  // ---> Uncomment this playlist at End
  const playlists = [
    "05zOhw9UDsPao8tnfvFAei",
    "2iiBScxiFpfnKNmH7IUgEu",
    "4YDw5S8IAcCgVGddxW6QQi",
    "6zjkSHT7kIqViyLUQLuQUO",
    "0MeCozusafeL4Y6fpILgUi",
    "0pMBBiBxFZsOLTMP7IMyxp",
    "5pOAPiUQGhbBgDtyZei4ip",
    "30fi1kYMtHyunLyD1do3fD",
    "6h1rTfCbMkToWTRniovnWj",
    "0hmodYzh3MRBr4hgPf0F6z",
    "02ha9OaZyPXINRygYy7h1q",
  ];
  // ---> Comment this playlist at End
  // const playlists = [1, 2, 3, 4, 5, 6];
  // .......................................................
  return (
    <>
      {/* Button */}
      <button
        className="fixed rotate-90 top-28 md:top-52 -left-7 text-white flex"
        onClick={() => setShow(true)}
      >
        Music <p className="-rotate-90 px-2">🎵</p>
      </button>
      {/* //sidebar */}
      <div
        className={`music-sidebar w-screen sm:w-64  h-screen p-1 bg-slate-800 top-0 fixed bg-opacity-70 duration-200 z-20 shadow-md shadow-slate-400 overflow-auto ${
          show ? "-left-0" : "-left-full md:-left-72"
        }`}
      >
        <div className="w-full h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-6 fill-slate-300 float-end"
            onClick={() => setShow(false)}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <div className="w-full">
          {playlists.map((playlist, index) => (
            <Musicframe key={index} data={playlist} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Music;
