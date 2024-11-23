import { useEffect, useRef } from "react";
import { useState } from "react";
import { gsap } from "gsap";

const Sidebar = ({ arc, onClose, position, isVisible }) => {
  const [activeTab, setActiveTab] = useState("anime");
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: position === "right" ? 350 : -350,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isVisible, position]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed z-50 top-0 ${
        position === "right" ? "right-0" : "left-0"
      } h-full w-[350px] bg-black text-white p-6 shadow-lg`}
      style={{
        transform: `translateX(${position === "right" ? "350px" : "-350px"})`,
      }}
    >
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={onClose}
      >
        &times;
      </button>

      {arc && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">{arc.title}</h2>
          <p>{arc.desc}</p>
          <div className="mt-4">
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setActiveTab("anime")}
                className={`py-2 px-4 rounded ${
                  activeTab === "anime" ? "bg-gray-700" : "bg-gray-800"
                }`}
              >
                Anime
              </button>
              <button
                onClick={() => setActiveTab("manga")}
                className={`py-2 px-4 rounded ${
                  activeTab === "manga" ? "bg-gray-700" : "bg-gray-800"
                }`}
              >
                Manga
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className="overflow-y-auto scrollbar-none"
        style={{
          height: `calc(100vh - 300px)`,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {arc && activeTab === "anime" && (
          <div>
            <p>
              <strong>Anime Episodes:</strong>
            </p>
            <ul className="list-disc ml-5 mb-20 mt-3">
              {arc.animeName.map((episode, index) => (
                <li className="mt-2" key={index}>{episode}</li>
              ))}
            </ul>
          </div>
        )}
        {arc && activeTab === "manga" && (
          <div>
            <p>
              <strong>Manga Chapters:</strong>
            </p>
            <ul className="list-disc ml-5 mb-20 mt-3">
              {arc.mangaName.map((chapter, index) => (
                <li className="mt-2" key={index}>{chapter}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
