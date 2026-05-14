"use client"; // ← tells Next.js this is a client component

import { useState, useEffect } from "react";

const RoverPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const response = await fetch(
          "https://rovers.nebulum.one/api/v1/rovers/curiosity/photos?earth_date=2015-6-3"
        );
        if (!response.ok) throw new Error("Failed to fetch rover photos");
        const data = await response.json();
        setPhotos(data.photos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoverPhotos();
  }, []);

  if (loading) return <p>Loading rover photos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <h1>Mars Rover Photos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.img_src}
              alt={`Rover photo ${photo.id}`}
              width={200}
              height={150}
            />
            <p>Date: {photo.earth_date}</p>
            <p>Rover: {photo.rover.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RoverPage;