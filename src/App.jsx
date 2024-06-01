import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://nomad-movies.nomadcoders.workers.dev/movies')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <>
      <header>
        <h1>JINNIEVE🎬</h1>
      </header>
      <main>
        <section>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id} id={movie.id}>
                <button>{movie.title}</button>
              </li>
            ))}
            <li>
              <button>movie</button>
            </li>
          </ul>
        </section>
        <section>
          <h2></h2>
          <img src="" alt="" />
          <p></p>
        </section>
      </main>
      <footer>api credit: Nomad Coder</footer>
    </>
  );
}

export default App;
