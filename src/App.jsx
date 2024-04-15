import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Home from './Home';
import Favorites from './Favorites';

const apiKey = 'EzHKcEck65pKLLO37YvQSw8uEjY9IL78SbWVMwZK1sI3dDB8WlBYOajI';
const endpoint = 'https://api.pexels.com/v1/';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchCuratedPhotos = async () => {
      try {
        const response = await fetch(`${endpoint}/curated?page=1&per_page=40`, {
          headers: {
            Authorization: apiKey
          }
        });
        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error('Error fetching curated photos:', error);
      }
    };

    fetchCuratedPhotos();
  }, []);

  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} photos={photos} />} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;

