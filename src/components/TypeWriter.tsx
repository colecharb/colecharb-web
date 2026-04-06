import { useState, useEffect, useRef } from "react";

interface TypeWriterProps {
  text: string;
  minDelay?: number;
  maxDelay?: number;
  typoCount?: number;
}

type Action = { type: "type"; char: string } | { type: "delete" };

function buildActions(text: string, typoCount: number): Action[] {
  const actions: Action[] = [];
  const typoChars = "abcdefghijklmnopqrstuvwxyz";

  // Pick random positions for typos (avoid last char)
  const candidates = Array.from({ length: text.length - 1 }, (_, i) => i);
  const typoPositions = new Set<number>();
  for (let t = 0; t < Math.min(typoCount, candidates.length); t++) {
    let idx: number;
    do {
      idx = candidates[Math.floor(Math.random() * candidates.length)];
    } while (typoPositions.has(idx));
    typoPositions.add(idx);
  }

  for (let i = 0; i < text.length; i++) {
    if (typoPositions.has(i)) {
      // Type a wrong character
      const wrong = typoChars[Math.floor(Math.random() * typoChars.length)];
      actions.push({ type: "type", char: wrong });
      // Type 2-5 more correct characters before noticing
      const extra = Math.min(
        2 + Math.floor(Math.random() * 4),
        text.length - i - 1,
      );
      for (let j = 0; j < extra; j++) {
        actions.push({ type: "type", char: text[i + 1 + j] });
      }
      // Delete back (extra chars + the typo)
      for (let j = 0; j < extra + 1; j++) {
        actions.push({ type: "delete" });
      }
    }
    actions.push({ type: "type", char: text[i] });
  }

  return actions;
}

export default function TypeWriter({
  text,
  minDelay = 10,
  maxDelay = 100,
  typoCount = 2,
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const actionsRef = useRef<Action[]>(buildActions(text, typoCount));
  const indexRef = useRef(0);
  const done = indexRef.current >= actionsRef.current.length;

  useEffect(() => {
    if (done) return;

    const action = actionsRef.current[indexRef.current];
    const isDelete = action.type === "delete";
    const delay = isDelete
      ? 30 + Math.random() * 40
      : minDelay + Math.random() * (maxDelay - minDelay);

    const id = setTimeout(() => {
      if (action.type === "type") {
        setDisplayed((d) => d + action.char);
      } else {
        setDisplayed((d) => d.slice(0, -1));
      }
      indexRef.current++;
    }, delay);

    return () => clearTimeout(id);
  }, [displayed, done, minDelay, maxDelay]);

  return (
    <>
      {displayed}
      <span className={`typewriter-cursor${done ? " blink" : ""}`}>|</span>
    </>
  );
}
