import { useEffect, useRef } from 'react';
import { Box, Divider } from '@chakra-ui/react';

import { StationDTO } from '@/types/charger';
import StationHeader from './StationHeader';
import ChargerTable from './ChargerTable';
import StationTable from './StationTable';
import Review from '../Review';
import BottomSheet from '../BottomSheet';

const StationInfo = ({ station }: { station: StationDTO }) => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView();
  }, [station]);

  return (
    <BottomSheet>
      <Box ref={topRef}>
        <StationHeader station={station} />
        <Divider h={2} my={1} bg='gray.200' />
        <ChargerTable chargers={station.chargers} availableCount={station.availableCount} />
        <Divider h={2} my={1} bg='gray.200' />
        <StationTable station={station} />
        <Divider h={2} my={1} bg='gray.200' />
        <Review />
      </Box>
    </BottomSheet>
  );
};

export default StationInfo;
