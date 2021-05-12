import React from 'react';
import './HomePage.css';
import Navbar from './Navbar';
import Poster from './Poster';
import Line from './Line';
import requests from '../fetchAPI/requests';
import Footer from '../components/Footer';


const HomePage = () => {
    return (
        <div className="homePage">
            <Navbar />
            <Poster />
            
            <Line title="Trending Now" fetchUrl={requests.fetchTrending} bigLine />
            <Line title="ndITsec Prime Originals" fetchUrl={requests.fetchNetflixOriginals} />
            <Line title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Line title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Line title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Line title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />{" "}
            <Line title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Footer />
            </div>
    );
};

export default HomePage;
