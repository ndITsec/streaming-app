import React, { useEffect, useState } from 'react';
import './Line.css';
import axios from '../fetchAPI/axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { motion } from 'framer-motion';
import {
    animationTitle,
    transitionTitle,
    animationPosters,
    transitionPosters,
  } from '../animations/line';

  

function Line({ title, fetchUrl, bigLine = false }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
        autoplay: 1,
        },
      };
    
      const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl('');
        } else {
          movieTrailer(movie?.title || movie?.original_name || '')
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
      };

      return (
        <div className='line'>
          <motion.h2
            initial='out'
            animate='in'
            variants={animationTitle}
            transition={transitionTitle}
          >
            {title}
          </motion.h2>
    
          <motion.div
            initial='out'
            animate='in'
            variants={animationPosters}
            transition={transitionPosters}
            className='line__banners'
          >
            {movies.map((movie) => {
              return (
                <img
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  className={`line__banner ${bigLine && 'line__bannerBig'}`}
                  src={`${base_url}${
                    bigLine ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={`${movie.title} || ${movie.original_name}`}
                />
              );
            })}
          </motion.div>
    
          <div className='trailer'>
            {trailerUrl && (
              <Youtube
                videoId={trailerUrl}
                opts={opts}
                className='youtube__trailer'
              />
            )}
          </div>
        </div>
      );
    }
    
    export default Line;


