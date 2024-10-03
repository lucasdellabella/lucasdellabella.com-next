export const metadata = {
  title: "Projects",
  description: "Check out my projects",
};

import ListProjects from "../components/list-projects";

export default function ProjectsPage() {
  const projects = {
    Upcoming: [
      {
        name: "Machine Learning Experiments",
        desc: "A series of interactive ML artifacts",
        icon: "robot",
      },
    ],
    Interactive: [
      {
        name: "Microinteractions",
        link: "https://lucasdellabella.com/microinteractions",
        desc: "Tiny but fun UI animations to make everyday web interactions pop!",
        icon: "sparkle",
      },
    ],
    Recent: [
      {
        name: "Notion Ding!",
        link: "https://chrome.google.com/webstore/detail/notion-ding/joikmdcpokdfcmocfafpmbailndkpjim",
        desc: "Make notion go ding when you complete tasks. Yes that's it.",
        icon: "book-open",
      },
      {
        name: "Lineage",
        link: "https://lineagenft.com",
        desc: "A fantasy NFT experimenting with on-chain family-ties.",
        icon: "shield",
      },
      {
        name: "Kiwis",
        link: "https://yourkiwis.com",
        desc: "Prevent burnout without building new habits",
        icon: "fruit",
      },
    ],
    Old: [
      {
        name: "Solidify",
        link: "#",
        desc: "Wix-like builder for simple DAOs on Ethereum. Dead.",
        icon: "users",
      },
      {
        name: "Toast",
        link: "https://play.google.com/store/apps/details?id=com.kopdb.toast",
        desc: "Flick toast. Listen to adorable screams of terror.",
        icon: "toast",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <main className="py-10">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl mb-8">Some of my cool and recent projects</p>
        <ListProjects projects={projects} />
      </main>
    </div>
  );
}
