import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://api.openai.com/v1/engines/text-curie-001/completions";

const PromptList = () => {
  const [prompt, setPrompt] = useState("prompt");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRETKEY}`,
  };

  const data = {
    prompt: "Write a poem about a dog wearing skis",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  useEffect(() => {
    axios
      .post(baseURL, data, {
        headers: headers,
      })
      .then((response) => {
        setPrompt(response.data.choices[0].text);
        console.log(response.data.choices[0].text);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div>
      <p>{prompt}</p>
    </div>
  );
};

export default PromptList;
