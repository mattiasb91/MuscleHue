import { useState, useEffect } from "react";
import "./App.css";
import { fetchAllMuscles, fetchAllWorkouts, recordWorkout } from "./apiService";

import AnatomyViews from "./components/AnatomyViews/AnatomyViews";
import WorkoutList from "./components/WorkoutList/WorkoutList";
import ColorLegend from "./components/ColorLegend/ColorLegend";


function App() {
  const[muscles, setMuscles] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState("");

  useEffect(() => {
    (async () => {
      const musclesFromServer = await fetchAllMuscles();
      setMuscles(musclesFromServer);

      const workoutsFromServer = await fetchAllWorkouts();
      setWorkouts(workoutsFromServer);
    })();
  }, []);

  async function handleLogWorkout() {
    if (!selectedWorkoutId) return;

    await recordWorkout(selectedWorkoutId);
    const musclesFromServer = await fetchAllMuscles();
    setMuscles(musclesFromServer);
  }

  return(
    <section className="main-body-container">
      <header className="header-container">
        <h1 className="header-title">MuscleHue</h1>
      </header>
      <div className="legend-container">
         <ColorLegend />
      </div>
      <div className="anatomy-container">{muscles.length ? (
        <AnatomyViews muscles = {muscles}/>
      ) : (
      <h2>loading anatomical model</h2>
    )}</div>
      <div className="workout-list-container">
        <WorkoutList
          workouts={workouts}
          selectedWorkoutId={selectedWorkoutId}
          setSelectedWorkoutId={setSelectedWorkoutId}
          logWorkout={handleLogWorkout}
        />
      </div>
    </section>
  )

}

export default App;