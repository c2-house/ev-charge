import { Box, Divider } from '@chakra-ui/react';

import { StationDTO } from '@/types/charger';
import StationHeader from './StationHeader';
import ChargerTable from './ChargerTable';
import StationTable from './StationTable';
import Review from '../Review';
import ResponsiveAds from '@/components/Common/AdSense/ResponsiveAds';

const StationInfo = ({ station }: { station: StationDTO }) => {
  return (
    <Box pb={2}>
      <StationHeader station={station} />
      <ResponsiveAds height={80} />
      <Divider h={2} mt={2} mb={1} bg='gray.200' />
      <ChargerTable chargers={station.chargers} availableCount={station.availableCount} />
      <Divider h={2} my={1} bg='gray.200' />
      <StationTable station={station} />
      <Divider h={2} my={1} bg='gray.200' />
      <Review />
    </Box>
  );
};

export default StationInfo;
