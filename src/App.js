import React from 'react';
import Row from '../src/Row'
import './App.css';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="Netflix Original" fetchUrl = {requests.fetchNetflixOriginals} />
      <Row title="Top Trending" fetchUrl = {requests.fetchTrending} />
      <Row title="Now Playing" fetchUrl = {requests.nowPlaying} />
      <Row title="Upcoming" fetchUrl = {requests.getUpcoming} />
      <Row title="Action" fetchUrl = {requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl = {requests.fetchComedyMovies} />
      <Row title="Horror " fetchUrl = {requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl = {requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
