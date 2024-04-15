import React, { useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/photos.json');
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <AppContext.Provider value={{ photos }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
