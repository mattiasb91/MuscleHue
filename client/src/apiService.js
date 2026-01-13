const baseURL = 'http://localhost:3000';


//created a response handling function to reduce code duplication

async function handleResponse(response) {
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed (${response.status})`);
  }
  return response.json();
}

// i give the functions slightly different names from their backend versions to make it easier to differentiate
//this one will be used by the anatomical body:

export async function fetchAllMuscles() {
  const res = await fetch(`${baseURL}/muscles`);
  return handleResponse(res);
}

//the two workout functions will be used by the workout-dropdown list:

export async function fetchAllWorkouts() {
  const res = await fetch(`${baseURL}/workouts`);
  return handleResponse(res);
}

export async function recordWorkout(workoutId) {
  const res = await fetch(`${baseURL}/workouts/log`, {
    method: 'POST',
    body: JSON.stringify({ workoutId }),
    headers: { 'Content-Type': 'application/json' }
  });
  return handleResponse(res);
}