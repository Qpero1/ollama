async function sendPrompt(prompt) {
  try {
    const response = await fetch('/ollama/api/generate', { // Adjust the path to match ollama's API.
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model: "llama2", prompt: prompt }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error sending prompt:', error);
    return null;
  }
}

// Example usage:
const prompt = 'Tell me a joke.';
sendPrompt(prompt).then((response) => {
  if (response) {
    console.log('Response:', response);
    // Display the response on your web page
  }
});
