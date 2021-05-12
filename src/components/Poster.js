import React, { useState, useEffect } from 'react';
import './Poster.css';
import axios from '../fetchAPI/axios';
import requests from '../fetchAPI/requests';
import { motion } from 'framer-motion';
import {
  animationOne,
  transitionOne,
  animationTwo,
  transitionTwo,
  animationBanner,
  transitionBanner,
  animationButton,
  transitionButton,
} from '../animations/poster';


function Poster() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
            ]
          );
          return request;
        }
        fetchData();
      }, []);

    function trunc(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
      
      <motion.header
      initial='out'
      animate='in'
      variants={animationBanner}
      transition={transitionBanner}
      className='poster'
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(
          'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
          )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='poster__container'>
        <motion.h1
          initial='out'
          animate='in'
          variants={animationOne}
          transition={transitionOne}
          className='poster__title'
        >
          {movie?.title || movie?.name || movie?.original_name}{' '}
        </motion.h1>

        <motion.div
          initial='out'
          animate='in'
          variants={animationButton}
          transition={transitionButton}
          className='poster__buttons'
        >
          <button className='poster__button'>Play</button>
          <button className='poster__button'>My List</button>
        </motion.div>

        <motion.h1
          initial='out'
          animate='in'
          variants={animationTwo}
          transition={transitionTwo}
          className='poster__description'
        >
          {trunc(movie?.overview, 150)}{' '}
        </motion.h1>
      </div>
      <div className='poster--fadeBottom' />
    </motion.header>
    )
}

export default Poster;
