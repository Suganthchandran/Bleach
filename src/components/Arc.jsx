import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Sidebar from "./Sidebar";

gsap.registerPlugin(ScrollTrigger);

const Arcs = [
    {
        title: "Agent of the Shinigami Arc",
        anime: "1-20",
        manga: "1-70",
        animeName: [
            "Episode 1: The Beginning of the End",
            "Episode 2: The Shinigami's Substitute",
            "Episode 3: Ichigo's Courage",
            "Episode 4: The Broken Blade",
            "Episode 5: The Unbeatable Enemy",
            "Episode 6: The Shinigami's Death",
            "Episode 7: The Fight for the Soul Society",
            "Episode 8: The False Soul Reaper",
            "Episode 9: The Rescue Mission",
            "Episode 10: The Power of the Soul Reaper",
            "Episode 11: The Great Escape",
            "Episode 12: The Unlikely Warrior",
            "Episode 13: The Soul Society Battle",
            "Episode 14: The Battle of Wits",
            "Episode 15: The Final Confrontation",
            "Episode 16: The Shinigami's Test",
            "Episode 17: The Lost Soul",
            "Episode 18: The Arrival of Rukia",
            "Episode 19: The Dark Soul Reaper",
            "Episode 20: The Awakening of the Shinigami"
        ],
        mangaName: [
            "Chapter 1: The Death of a Friend",
            "Chapter 2: The Shinigami's Substitute",
            "Chapter 3: Ichigo's Resolution",
            "Chapter 4: The Unholy Ritual",
            "Chapter 5: The Dark Hollow",
            "Chapter 6: The Breaking of the Soul Chain",
            "Chapter 7: The Beginning of the Soul Society",
            "Chapter 8: The Gathering of Allies",
            "Chapter 9: The Truth of the Hollow",
            "Chapter 10: The Soul Society's Judgment",
            "Chapter 11: The Soul Society's Test",
            "Chapter 12: The Fight for Life",
            "Chapter 13: The Battle of Righteousness",
            "Chapter 14: The Final Encounter",
            "Chapter 15: The Power of the Soul",
            "Chapter 16: The True Power Revealed",
            "Chapter 17: The Betrayal of the Soul",
            "Chapter 18: The Awakening of the Soul",
            "Chapter 19: The Power of the Enemy",
            "Chapter 20: The Ultimate Battle",
            "Chapter 21: The Return to Soul Society",
            "Chapter 22: The Unseen Enemy",
            "Chapter 23: The Shinigami's Promise",
            "Chapter 24: The Soul Society Reborn",
            "Chapter 25: The Battle for Justice",
            "Chapter 26: The Hollow's Heart",
            "Chapter 27: The Return of the Soul Reaper",
            "Chapter 28: The Clash of Wills",
            "Chapter 29: The Silent Battle",
            "Chapter 30: The Power of the Soul Reaper",
            "Chapter 31: The Shinigami's Sacrifice",
            "Chapter 32: The Hollow's Challenge",
            "Chapter 33: The True Nature of the Enemy",
            "Chapter 34: The Final Trial",
            "Chapter 35: The Clash of Forces",
            "Chapter 36: The Journey to the Soul Society",
            "Chapter 37: The Shinigami's Return",
            "Chapter 38: The Battle of Strength",
            "Chapter 39: The Moment of Truth",
            "Chapter 40: The End of the Battle",
            "Chapter 41: The Soul Reaper's Path",
            "Chapter 42: The Last Stand",
            "Chapter 43: The Betrayal of the Soul Society",
            "Chapter 44: The Heart of the Hollow",
            "Chapter 45: The Soul Society's Will",
            "Chapter 46: The Final Judgment",
            "Chapter 47: The Return of the Lost Soul",
            "Chapter 48: The Rebirth of the Soul",
            "Chapter 49: The Breaking of the Chains",
            "Chapter 50: The Heart of the Shinigami",
            "Chapter 51: The Awakening of the Soul Reaper",
            "Chapter 52: The Betrayal of the Hollow",
            "Chapter 53: The Power of the Soul Society",
            "Chapter 54: The Truth Behind the War",
            "Chapter 55: The Gathering Storm",
            "Chapter 56: The Battle of the Ages",
            "Chapter 57: The Final Confrontation",
            "Chapter 58: The Shinigami's Last Stand",
            "Chapter 59: The End of the Hollow",
            "Chapter 60: The Truth of the Soul",
            "Chapter 61: The Last Breath",
            "Chapter 62: The Battle for the Future",
            "Chapter 63: The Awakening of the Shinigami's Heart",
            "Chapter 64: The End of the War",
            "Chapter 65: The Beginning of a New Era",
            "Chapter 66: The Last Promise",
            "Chapter 67: The Power of the Soul Reaper's Will",
            "Chapter 68: The Rebirth of the Soul Society",
            "Chapter 69: The Clash of the Hollow and the Soul",
            "Chapter 70: The Final Judgment"
        ],
        desc: "Ichigo Kurosaki, a regular high-school student, becomes a Shinigami after a mysterious woman called Rukia loses her powers and enlists his help to save humans from errant Hollows."
    },    
    {
        title: "Soul Society Arc",
        anime: "21-63",
        manga: "71-183",
        desc: "After Rukia is taken away to be executed in Soul Society, Ichigo and his friends break into this place to save his friend, taking on many powerful Shinigami in the process.",
        animeName: [
          "Episode 21: Enter! The World of the Shinigami",
          "Episode 22: The Man Who Hates Shinigami",
          "Episode 23: The Sentence of Rukia, Before the 14th Day",
          "Episode 24: Assemble! The 13 Divisions",
          "Episode 25: Penetrate the Center with an Enormous Bombshell?",
          "Episode 26: Formation! The Worst Tag",
          "Episode 27: Release the Death Blow!",
          "Episode 28: Orihime Targeted",
          "Episode 29: Breakthrough! The Shinigami's Encompassing Net",
          "Episode 30: Renji's Confrontation",
          "Episode 31: The Resolution to Kill",
          "Episode 32: Stars and the Stray",
          "Episode 33: Miracle! The Mysterious New Hero",
          "Episode 34: Tragedy of Dawn",
          "Episode 35: Aizen Stands! Horrible Ambitions",
          "Episode 36: Zaraki Kenpachi Approaches!",
          "Episode 37: Reason of the Fist",
          "Episode 38: Desperation! The Broken Zangetsu",
          "Episode 39: The Immortal Man",
          "Episode 40: The Shinigami Whom Ganju Met",
          "Episode 41: Reunion, Ichigo and Rukia",
          "Episode 42: Yoruichi, Goddess of Flash, Dances!",
          "Episode 43: The Despicable Shinigami",
          "Episode 44: Ishida, Power of Limits!",
          "Episode 45: Overcome the Limits!",
          "Episode 46: Authentic Records! School of Shinigami",
          "Episode 47: The Avengers",
          "Episode 48: Hitsugaya Roars!",
          "Episode 49: Rukia's Nightmare",
          "Episode 50: The Reviving Lion",
          "Episode 51: Morning of the Sentence",
          "Episode 52: Renji, Oath of the Soul! Death Match with Byakuya",
          "Episode 53: Gin Ichimaru's Temptation, Resolution of Destruction",
          "Episode 54: An Accomplished Oath! Get Back Rukia!",
          "Episode 55: The Strongest Shinigami! Ultimate Confrontation Between Teacher and Student",
          "Episode 56: Supersonic Battle! Determine the Goddess of Battle",
          "Episode 57: One Thousand Cherries! Clash: Ichigo vs. Byakuya",
          "Episode 58: Unseal! The Black Blade, the Miraculous Power",
          "Episode 59: Conclusion of the Death Match! White Pride and Black Desire",
          "Episode 60: Reality of the Despair, the Assassin's Dagger is Swung",
          "Episode 61: Aizen Stands! Horrible Ambitions",
          "Episode 62: Gather Together! Group of the Strongest Shinigami!",
          "Episode 63: Rukia's Decision, Ichigo's Feelings"
        ],
        mangaName: [
          "Chapter 71: Beginning of the Death Match",
          "Chapter 72: Flowers on the Precipice",
          "Chapter 73: Shadows Play",
          "Chapter 74: Underground Gamble",
          "Chapter 75: The Claws",
          "Chapter 76: Deadly Combat",
          "Chapter 77: The Suicide Song",
          "Chapter 78: Release",
          "Chapter 79: Rematch",
          "Chapter 80: Requiem for the Lost",
          "Chapter 81: Scatter, Senbonzakura",
          "Chapter 82: Killing Instinct",
          "Chapter 83: Fear for the Fight",
          "Chapter 84: Prayer for the Rain",
          "Chapter 85: Rain of Lamentation",
          "Chapter 86: Enemies",
          "Chapter 87: Encore in the Cherry Blossom Shade",
          "Chapter 88: Welcome to Our Execution Grounds",
          "Chapter 89: Countdown to Extinction",
          "Chapter 90: A Flower on the Precipice",
          "Chapter 91: Senbonzakura, Broken",
          "Chapter 92: Black Moon Rising",
          "Chapter 93: A Walk in the Dusk",
          "Chapter 94: Bleeding Sun",
          "Chapter 95: Awaken the Dragon",
          "Chapter 96: Pride and Reflection",
          "Chapter 97: Soul Chain Severance",
          "Chapter 98: Like a Crying Moon",
          "Chapter 99: The Crest of the White Lotus",
          "Chapter 100: Sword Dance",
          "Chapter 101: Dance of the Crescent Moon",
          "Chapter 102: Right Arm of the Giant",
          "Chapter 103: The Third Phantom",
          "Chapter 104: Blade of a Thousand Strikes",
          "Chapter 105: The White Haze",
          "Chapter 106: End of Hypnosis",
          "Chapter 107: The Nightmare Returns",
          "Chapter 108: Enter the Inner World",
          "Chapter 109: The White Tower Rocks",
          "Chapter 110: The Escape Plan",
          "Chapter 111: Hunted Down",
          "Chapter 112: Barrier of the White Tower",
          "Chapter 113: The Tears of Rukia",
          "Chapter 114: Turning Back",
          "Chapter 115: The Unseen Enemy",
          "Chapter 116: The Blade's Edge",
          "Chapter 117: The Power of Resolve",
          "Chapter 118: In My Eyes, In Your Heart",
          "Chapter 119: The Moment of Decisive Battle",
          "Chapter 120: Beyond Limits",
          "Chapter 121: White Emperor Sword",
          "Chapter 122: Heart of Darkness",
          "Chapter 123: Annihilation of the Soul",
          "Chapter 124: The Nightmare Ends",
          "Chapter 125: Tears of the Moon",
          "Chapter 126: A New Resolve",
          "Chapter 127: Beginning of a New Legend",
          "Chapter 128: Farewell to the Soul Society",
          "Chapter 129: The Beginning of the New Era",
          "Chapter 130: Parting Sorrow",
          "Chapter 131: Aizen's Secret",
          "Chapter 132: The Final Goodbye",
          "Chapter 133: A New Threat Arises",
          "Chapter 134: Crossroads",
          "Chapter 135: The Bonds of Friendship",
          "Chapter 136: Beyond the Curtain of Death",
          "Chapter 137: Love and Sacrifice",
          "Chapter 138: The Shadow Looms",
          "Chapter 139: The Path of a Hero",
          "Chapter 140: The Will of the Shinigami",
          "Chapter 141: Clash of Wills",
          "Chapter 142: The Fragile Peace",
          "Chapter 143: Heroes United",
          "Chapter 144: Triumph Over Despair",
          "Chapter 145: The Endless Journey",
          "Chapter 146: A New World Unfolds",
          "Chapter 147: Dawn of Hope",
          "Chapter 148: The Shinigami's Vow",
          "Chapter 149: Destiny Awaits",
          "Chapter 150: The Final Clash",
          "Chapter 151: A Cold and Pure White Moon",
          "Chapter 152: The Last Fight",
          "Chapter 153: Light of Hope",
          "Chapter 154: Blades of Fury",
          "Chapter 155: Song of Sorrow",
          "Chapter 156: The Hidden Truth",
          "Chapter 157: The Puppet Master",
          "Chapter 158: Beyond the Mask",
          "Chapter 159: Clash of the Titans",
          "Chapter 160: The Shattered Blade",
          "Chapter 161: A Quiet Resolve",
          "Chapter 162: Call of the Wolf",
          "Chapter 163: Shadow of the Hawk",
          "Chapter 164: Blade of Justice",
          "Chapter 165: Crimson Rain",
          "Chapter 166: Ashes to Ashes",
          "Chapter 167: The Flame of Resolve",
          "Chapter 168: Wings of Despair",
          "Chapter 169: The Heart of Battle",
          "Chapter 170: Soul of the Warrior",
          "Chapter 171: Edge of Eternity",
          "Chapter 172: Winds of Change",
          "Chapter 173: Rising Darkness",
          "Chapter 174: The Voice of Hope",
          "Chapter 175: A Warrior's Burden",
          "Chapter 176: The Last Tear",
          "Chapter 177: Unbroken Spirit",
          "Chapter 178: Bonds of Courage",
          "Chapter 179: The Will to Protect",
          "Chapter 180: Endless Waltz",
          "Chapter 181: Crescent Moon Rising",
          "Chapter 182: A New Dawn",
          "Chapter 183: Curtain Call"
        ]
      },      
      {
        title: "The Bount Arc",
        anime: "64-109",
        manga: "Anime-only Filler",
        desc:"The Bount, an artificial race that feeds on souls, decides to come back and wreak havoc in Soul Society."
    },
    {
        title: "Arrancar Arc",
        anime: "110-131",
        manga: "183-229",
        desc: "The Espada, a group of powerful Arrancar (Hollows who have taken off their masks) who serve Aizen, show off their powers and kidnap Orihime for her unique abilities."
    },
    {
        title: "Hueco Mundo Arc",
        anime: "132-167, 190-205",
        manga: "229-315",
        desc: "Ichigo and his friends break into Hueco Mundo in a bid to fight off the Arrancar and save Orihime from Aizen's clutches."
    },
    {
        title: "The New Captain Shusuke Amagai Arc",
        anime: "168-189",
        manga: "Anime-only Filler",
        desc: "Shusuke Amagai, a new captain who replaces Gin Ichimaru after his betrayal, ends up having nefarious plans of his own that are slowly revealed over the course of this arc."
    },
    {
        title: "The Past Arc",
        anime: "206-212",
        manga: "97-108",
        desc: "A short but sweet arc that explains how the Visored came to be, why Urahara was banished from Soul Society, and what Aizen's motivations really are."
    },
    {
        title: "The Battle of Karakura Town Arc",
        anime: "213-229, 266-316",
        manga: "316-423",
        desc: "After the Arrancar and Aizen decide to wreak havoc in the human world, Ichigo and the rest of the Shinigami decide to stop them once and for all."
    },
    {
        title: "Zanpakuto Unknown Tales Arc",
        anime: "230-265",
        manga: "Anime-only Filler",
        desc: "The Zanpakuto of the Shinigami turn against their owners, being goaded by a mysterious man named Muramasa who is clearly up to no good."
    },
    {
        title: "Gotei 13 Invasion Arc",
        anime: "317-342",
        manga: "Anime-only Filler",
        desc: "As Ichigo slowly loses his powers following his fight against Aizen, Soul Society is invaded by impersonators who sow discord within the ranks and force the Shinigami to second-guess their comrades."
    },
    {
        title: "The Lost Substitute Shinigami Arc",
        anime: "343-366",
        manga: "424-479",
        desc: "After Ichigo loses his powers, he is contacted by a mysterious group called the Fullbring, who promise to reawaken his powers and help him battle against Hollows once again."
    },
    {
        title: "The Thousand-Year Blood War Arc",
        anime: "367-(Ongoing)",
        manga: "480-686",
        desc: "A powerful Quincy called Yhwach appears with his retinue of warriors to take over Soul Society and attain immense power in the process."
    }
]

const ArcCard = ({ arc, index, onClick }) => (
    <VerticalTimelineElement
      contentStyle={{ background: "black", color: "black", padding: "12px" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: "black" }}
      title={arc.title}
      date={arc.desc}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src="img/Arc_logo.jpg" className="rounded-full" alt="Arc Logo" />
        </div>
      }
    >
      <div
        className="flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => onClick(arc, index)}
      >
        <h3 className="text-white text-[24px] font-bold">{arc.title}</h3>
        <h3 className="flex text-white flex-row items-center gap-10">
          <span>Anime: {arc.anime}</span>
          <span>Manga: {arc.manga}</span>
        </h3>
      </div>
    </VerticalTimelineElement>
  );
  
  const Arc = () => {
    const [selectedArc, setSelectedArc] = useState(null);
    const [sidebarPosition, setSidebarPosition] = useState("right");
    const [isSidebarVisible, setSidebarVisible] = useState(false);
  
    const handleArcClick = (arc, index) => {
      setSelectedArc(arc);
      setSidebarPosition(index % 2 === 0 ? "right" : "left");
      setSidebarVisible(true);
    };
  
    const closeSidebar = () => setSidebarVisible(false);
  
    return (
      <section className="bg-white pb-28 mt-[-44px] min-h-screen">
        <AnimatedTitle
          title="A<b>rc</b> Of Ble<b>a</b>ch"
          containerClass="mt-5 pt-32 !text-black text-center"
        />
  
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {Arcs.map((arc, index) => (
              <ArcCard key={index} arc={arc} index={index} onClick={handleArcClick} />
            ))}
          </VerticalTimeline>
        </div>
  
        <Sidebar
          arc={selectedArc}
          onClose={closeSidebar}
          position={sidebarPosition}
          isVisible={isSidebarVisible}
        />
      </section>
    );
  };
  
  export default Arc;