"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const EpicContent = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date") || "2021-01-01";
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpicImage = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=DEMO_KEY`
        );
        if (!response.ok) throw new Error("Failed to fetch EPIC image");
        const data = await response.json();
        setImage(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEpicImage();
  }, [date]);

  if (loading) return <p>Loading EPIC image...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!image) return <p>No image found for this date.</p>;

  const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date.replaceAll("-", "/")}/png/${image.image}.png`;

  return (
    <main>
      <h1>NASA EPIC Image</h1>
      <p>Date: {date}</p>
      <img src={imageUrl} alt={image.caption} width={600} height={600} />
      <p>{image.caption}</p>
    </main>
  );
};

const EpicPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <EpicContent />
    </Suspense>
  );
};

export default EpicPage;