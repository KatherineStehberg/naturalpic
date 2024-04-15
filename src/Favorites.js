import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';
import { IconHeart } from './IconHeart'; // Asegúrate de importar el componente del corazón

const Favorites = () => {
  const { photos } = useContext(AppContext);
  const favoritePhotos = photos.filter(photo => photo.liked);

  return (
    <div>
      <nav style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
        <Link to="/">Home</Link> | <Link to="/favorites">Favoritos</Link>
      </nav>
      <h1 style={{ textAlign: 'center', color: 'green' }}>Natural Pic</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {favoritePhotos.map(photo => (
          <div key={photo.id} style={{ margin: '10px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', position: 'relative' }}>
            <img src={photo.url} alt={photo.title} style={{ maxWidth: '100%', height: 'auto' }} />
            <IconHeart filled={photo.liked} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
