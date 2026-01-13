import { useState } from "react";
import "./WorkoutList.css";

export default function WorkoutList({
  workouts = [],
  selectedWorkoutId,
  setSelectedWorkoutId,
  logWorkout,
}) {
  const [search, setSearch] = useState("");

  const filtered = workouts.filter((w) =>
    w.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="workout-panel">
      <h2 className="workout-title">Workouts</h2>

      <input
        className="input"
        placeholder="Search workouts…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="select"
        value={selectedWorkoutId}
        onChange={(e) => setSelectedWorkoutId(e.target.value)}
      >
        <option value="">— Select workout —</option>
        {filtered.map((w) => (
          <option key={w._id} value={w._id}>
            {w.name}
          </option>
        ))}
      </select>

      <button
        className="button"
        disabled={!selectedWorkoutId}
        onClick={logWorkout}
        type="button"
      >
        Log workout
      </button>

      <div className="meta">
        Showing {filtered.length} / {workouts.length}
      </div>
    </section>
  );
}
