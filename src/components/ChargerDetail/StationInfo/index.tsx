import { useEffect, useRef } from 'react';
import { Box, Divider } from '@chakra-ui/react';

import { StationDTO } from '@/types/charger';
import StationHeader from './StationHeader';
import ChargerTable from './ChargerTable';
import StationTable from './StationTable';
import Review from '../Review';

const StationInfo = ({ station }: { station: StationDTO }) => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView();
  }, [station]);

  return (
    <Box ref={topRef} pb={2}>
      <StationHeader station={station} />
      <Divider h={2} my={1} bg='gray.200' />
      <ChargerTable chargers={station.chargers} availableCount={station.availableCount} />
      <Divider h={2} my={1} bg='gray.200' />
      <StationTable station={station} />
      <Divider h={2} my={1} bg='gray.200' />
      <Review />
    </Box>
  );
};

export default StationInfo;
