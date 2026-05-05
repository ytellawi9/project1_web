import React from 'react';

function getRatingClass(rating) {
  if (rating >= 8.5) return 'high';
  if (rating >= 7.0) return 'mid';
  return 'low';
}

function MovieCard({ movie }) {
  const { title, director, genre, year, rating, description } = movie;

  return (
    <div className="movie-card">
      <div className="movie-card__poster-placeholder">
        {title.charAt(0)}
      </div>
      <div className="movie-card__body">
        <div className="movie-card__genre">{genre}</div>
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__director">
          dir. <span>{director}</span>
        </p>
        <div className="movie-card__meta">
          <span className="movie-card__year">{year}</span>
          <span className={`movie-card__rating ${getRatingClass(rating)}`}>
            <span className="star">★</span> {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
