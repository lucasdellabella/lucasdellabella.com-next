"use client";
// pages/index.tsx
import Airtable from "airtable";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

const airtableApikey =
  "pat9ocoVmoD8Dqjfd.3dddaf7f778ec8587b2280e3451a2715155ff47431e895c38245cb3e2a2db490";
// pages/index.tsx
const base = new Airtable({ apiKey: airtableApikey }).base("appxPTeVC8ajJUNIV");

const randomItem = <A,>(l: A[]): A => l[Math.floor(Math.random() * l.length)];

const Home: React.FC = () => {
  const [pronouns, setPronouns] = useState<string[]>([]);
  const [conjugations, setConjugations] = useState<string[]>([]);
  const [verbs, setVerbs] = useState<string[]>([]);

  const [activePronoun, setActivePronoun] = useState<string>("");
  const [activeConjugation, setActiveConjugation] = useState<string>("");
  const [activeVerb, setActiveVerb] = useState<string>("");

  const [flipped, setFlipped] = useState(false);
  const [sessionCount, setSessionCount] = useState<number>(0);

  const changeCards = useCallback(
    (() => {
      console.log("change cards instantiation");
      return () => {
        setActivePronoun(randomItem(pronouns));
        setActiveConjugation(randomItem(conjugations));
        setActiveVerb(randomItem(verbs));
        setSessionCount((prev) => prev + 1);
      };
    })(),
    [
      pronouns,
      conjugations,
      verbs,
      setActivePronoun,
      setActiveConjugation,
      setActiveVerb,
    ]
  );

  const handleFlip = useCallback(() => {
    setFlipped((prev) => !prev);
  }, [setFlipped]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (flipped) {
          setFlipped(false);
          setTimeout(changeCards, 600); // Change cards after flip animation
        } else {
          changeCards();
          setFlipped(true);
        }
      }
    },
    [flipped, setFlipped, changeCards]
  );

  useEffect(() => {
    const fetchData = async () => {
      let fetchedPronouns: string[] = [];
      let fetchedConjugations: string[] = [];
      let fetchedVerbs: string[] = [];
      await base("cards")
        .select({
          pageSize: 100,
        })
        .eachPage((records, fetchNextPage) => {
          records.forEach((record) => {
            if (record.fields.pronoun)
              fetchedPronouns.push(record.fields.pronoun as string);
            if (record.fields.conjugation)
              fetchedConjugations.push(record.fields.conjugation as string);
            if (record.fields.verb)
              fetchedVerbs.push(record.fields.verb as string);
          });
          fetchNextPage();
        });
      setPronouns(fetchedPronouns);
      setConjugations(fetchedConjugations);
      setVerbs(fetchedVerbs);
    };

    fetchData();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, changeCards]);

  const cardInnerStyle: React.CSSProperties = {
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
  };

  const cardFaceStyle: React.CSSProperties = {
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-950 font-sans">
      <Head>
        <title>Flipping Cards</title>
        <meta
          name="description"
          content="Flipping cards with Next.js, Tailwind CSS, and Airtable"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-5">
        <div className="flex gap-5">
          {[
            { front: activePronoun, back: "Pronoun" },
            { front: activeConjugation, back: "Conjugation" },
            { front: activeVerb, back: "Verb" },
          ].map((card, index) => (
            <div
              key={index}
              className="w-40 h-60 [perspective:1000px] cursor-pointer"
              onClick={handleFlip}
            >
              <div
                className={`relative w-full h-full ${
                  flipped ? "[transform:rotateY(180deg)]" : ""
                }`}
                style={cardInnerStyle}
              >
                <div
                  className="w-full h-full flex justify-center items-center text-2xl bg-blue-500 text-white rounded-lg"
                  style={cardFaceStyle}
                >
                  {card.front}
                </div>
                <div
                  className="w-full h-full flex justify-center items-center text-2xl bg-red-500 text-white rounded-lg [transform:rotateY(180deg)]"
                  style={cardFaceStyle}
                >
                  {card.back}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="mt-5">
        {sessionCount >= 100 ? (
          <div>{sessionCount}? You're crazy! 🤯</div>
        ) : (
          <div>{sessionCount} completed</div>
        )}
      </div>
    </div>
  );
};

export default Home;
