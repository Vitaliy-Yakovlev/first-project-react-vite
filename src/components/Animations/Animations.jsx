import React, { useState } from 'react';
import styles from './Animation.module.css';
import MovieCast from '../MovieCast/MovieCast.jsx';
import defaultImg from '../../images/default.png';

const IMG_URL = 'https://image.tmdb.org/t/p/original';

export default function Animations({ actor }) {
  return (
    <div className={styles.wrapper}>
      <MovieCast actor={actor} IMG_URL={IMG_URL} defaultImg={defaultImg} />
    </div>
  );
}
