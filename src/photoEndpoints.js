import React, { useEffect } from 'react';
import generatePhotoEndpoints from './photoEndpoints';

const apiKey = 'EzHKcEck65pKLLO37YvQSw8uEjY9IL78SbWVMwZK1sI3dDB8WlBYOajI'; // Replace with your actual API key
const photoApi = generatePhotoEndpoints(apiKey);

const ExampleComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchResult = await photoApi.search({ query: 'nature', page: 1, per_page: 10 });
        console.log('Search Result:', searchResult);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default ExampleComponent;
