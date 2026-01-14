import { useEffect, useRef } from "react";
import "./AnatomyViews.css";

import FrontBody from "../../assets/musclehue_front_male.svg?react";
import BackBody from "../../assets/musclehue_back_male.svg?react";

function chooseColor(workoutDate) {
  if (!workoutDate) return "#4A7FA7";

  const days =
    (Date.now() - new Date(workoutDate).getTime()) / (1000 * 60 * 60 * 24);

  if (days < 1) return "#E85D4A";
  if (days < 2) return "#F28C38";
  if (days < 3) return "#EAC54F";
  if (days < 7) return "#5FBF8F";
  return "#4A7FA7";
}

function colorBody(svgRoot, muscles) {
  if (!svgRoot) return;

  for (const m of muscles) {
    const id = m.name; // must match the SVG path id exactly (case-sensitive), i had to rename all muscles in backend for this
    const el = svgRoot.querySelector(`#${CSS.escape(id)}`);
    if (!el) continue;

    el.style.fill = chooseColor(m.workoutDate);
  }
}

export default function AnatomyViews({ muscles = [] }) {
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    colorBody(frontRef.current, muscles);
    colorBody(backRef.current, muscles);
  }, [muscles]);

  return(
    <section className='anatomy-views-section'>
      <div className='anatomy-view'>
        <FrontBody ref={frontRef} className="anatomy-svg" />
        </div>
      <div className='anatomy-view'>
        <BackBody ref={backRef} className="anatomy-svg" />
        </div>
    </section>
  );
}