import React, { useState, useMemo } from 'react';
import movies from '../data/movies';
import MovieCard from '../components/MovieCard';

const ALL_GENRES = ['All', ...Array.from(new Set(movies.map(m => m.genre))).sort()];

const SORT_OPTIONS = [
  { value: 'rating-desc', label: 'Rating: High → Low' },
  { value: 'rating-asc',  label: 'Rating: Low → High' },
  { value: 'year-desc',   label: 'Year: Newest First' },
  { value: 'year-asc',    label: 'Year: Oldest First' },
  { value: 'title-asc',   label: 'Title: A → Z' },
  { value: 'title-desc',  label: 'Title: Z → A' },
];

function MainPage() {
  const [allMovies]    = useState(movies);   // mock data loaded into state
  const [search,  setSearch]  = useState('');
  const [sortBy,  setSortBy]  = useState('rating-desc');
  const [genre,   setGenre]   = useState('All');

  // Combined filter + sort logic using native array methods
  const displayed = useMemo(() => {
    const q = search.toLowerCase().trim();

    const filtered = allMovies
      .filter(m => genre === 'All' || m.genre === genre)
      .filter(m =>
        !q ||
        m.title.toLowerCase().includes(q) ||
        m.director.toLowerCase().includes(q) ||
        m.genre.toLowerCase().includes(q)
      );

    const [field, dir] = sortBy.split('-');
    const sorted = [...filtered].sort((a, b) => {
      if (field === 'title') {
        return dir === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
      return dir === 'asc' ? a[field] - b[field] : b[field] - a[field];
    });

    return sorted;
  }, [allMovies, search, sortBy, genre]);

  return (
    <section className="main-page">
      <div className="main-page__hero">
        <h1>Discover <em>Cinema</em></h1>
        <p>Browse, search, and filter {allMovies.length} curated films — from cult classics to modern masterpieces.</p>
      </div>

      {/* Controls: search + sort (combined state) */}
      <div className="controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search by title, director, or genre…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="sort-select"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          {SORT_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Genre filter pills */}
      <div className="genre-pills">
        {ALL_GENRES.map(g => (
          <button
            key={g}
            className={`genre-pill ${genre === g ? 'active' : ''}`}
            onClick={() => setGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <p className="stats-bar">
        Showing <strong>{displayed.length}</strong> of {allMovies.length} films
        {genre !== 'All' && <> · genre: <strong>{genre}</strong></>}
        {search && <> · matching "<strong>{search}</strong>"</>}
      </p>

      {displayed.length === 0 ? (
        <div className="no-results">
          <h3>No Films Found</h3>
          <p>Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="movie-grid">
          {displayed.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MainPage;
