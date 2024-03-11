"use client";
import { Cross } from "@/app/utils/icons";
import React, { useState } from "react";

const Musicframe = (props) => {
  return (
    <iframe
      title="Embedded Content"
      className="w-full mt-2 "
      height={100}
      src={`https://open.spotify.com/embed/playlist/${props.data}?utm_source=generator`}
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
        className={`music-sidebar w-screen sm:w-64  h-screen p-1 bg-slate-800 top-0 fixed bg-opacity-70 duration-200 z-20 shadow-md shadow-slate-400 overflow-scroll ${
          show ? "-left-0" : "-left-full md:-left-72"
        }`}
      >
        <div className="w-full h-10">
          <Cross
            className="float-end text-white w-6 h-6 mt-2"
            onClick={() => setShow(false)}
          />
        </div>
        <iframe
          className="w-full mt-2 "
          height={500}
          src="https://open.spotify.com/embed/playlist/0cRRV8OtdG4tHE2KlOg6oS?utm_source=generator&theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
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
