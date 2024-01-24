// In sleepActions.js

const API_BASE_URL = 'http://192.168.1.13:8000'; // Replace with your Laravel app URL

export const fetchSleepData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/sleep-entries`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateSleepData = async (newHours) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/sleep-entries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hoursSlept: newHours }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }

  const response = await fetch(`${API_BASE_URL}/api/sleep-entries`, { timeout: 5000 });

};
