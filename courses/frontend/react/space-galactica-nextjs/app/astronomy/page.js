const AstronomyPage = async () => {
  // Server Side Rendering - fetch happens on the server
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
  );
  const data = await response.json();

  return (
    <main>
      <h1>NASA Astronomy Picture of the Day</h1>
      <h2>{data.title}</h2>
      <img
        src={data.url}
        alt={data.title}
        width={800}
        height={500}
      />
      <p>{data.explanation}</p>
    </main>
  );
};

export default AstronomyPage;