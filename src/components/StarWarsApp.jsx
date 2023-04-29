import React, { useState, useEffect } from "react";
import "../assets/style.css";

const StarWarsApp = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/films`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Star War Movies</h1>
      {loading && <div>Please wait, Loading... </div>}
      {error && (
        <div>{`Error Occur while Fetching the Post Data - ${error}`}</div>
      )}

      <div>
        {data &&
          (data.map((episode) => {
            return (
              <div key={episode.episode_id}>
                <p>{episode.title}</p>
                <p>{episode.release_date}</p>
                <p>{episode.opening_crawl}</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  More info
                </a>
              </div>
            );
          }))}
      </div>
      </div>
  )
        }

export default StarWarsApp;
