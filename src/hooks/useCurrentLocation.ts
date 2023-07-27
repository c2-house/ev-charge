import { useEffect, useState } from 'react';
import { Coord } from '@/types/map';
import { INITIAL_CENTER } from '@/constants/map';

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<Coord>(INITIAL_CENTER);
  const [isLoaded, setIsLoaded] = useState(false);

  const onSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    setCurrentLocation([latitude, longitude]);
    setIsLoaded(true);
  };

  const onError = () => {
    console.error('Failed to get current location');
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  return { currentLocation, isLoaded };
};

export default useCurrentLocation;
