import { useAtomValue } from 'jotai';
import { Box, Divider, Spinner, Text, useTheme } from '@chakra-ui/react';

import { currentStationAtom, isLoadingLocationAtom } from '@/states/map';
import useChargers from '@/hooks/useChargers';

import StationHeader from './StationHeader';
import ChargerTable from './ChargerTable';
import StationTable from './StationTable';
import Status from './Status';
import { CarLogoIcon, MarkerErrorIcon } from '../../../public/icons';

const ChargerDetail = () => {
  const currentStation = useAtomValue(currentStationAtom);
  const isLoadingLocation = useAtomValue(isLoadingLocationAtom);

  const { data, isLoading: isLoadingData, error } = useChargers();
  const station = data?.stations.find((station) => station.statId === currentStation);
  const theme = useTheme();

  if (isLoadingLocation) {
    return (
      <Status
        icon={<Spinner color={theme.colors.primary} size='xl' thickness='3px' />}
        text='현 위치를 찾는 중입니다.'
      />
    );
  }

  if (isLoadingData) {
    return (
      <Status
        icon={<Spinner color={theme.colors.primary} size='xl' thickness='3px' />}
        text='충전소 정보를 불러오는 중입니다.'
      />
    );
  }

  if (error || data?.chargerCount === 0) {
    return (
      <Status
        icon={<MarkerErrorIcon />}
        text={`충전소 정보를 불러올 수 없습니다.\n다시 시도해주세요.`}
      />
    );
  }

  if (data && data.chargerCount > 0 && !station) {
    return <Status icon={<CarLogoIcon />} text='충전소를 선택해주세요.' />;
  }

  if (data && station) {
    return (
      <Box w='full' maxW='container.xl' pt={2}>
        <StationHeader station={station} />
        <Divider h={2} mt={1} mb={1} bg='gray.200' />
        <ChargerTable chargers={station.chargers} availableCount={station.availableCount} />
        <Divider h={2} mt={1} mb={1} bg='gray.200' />
        <StationTable station={station} />
        <Text color='gray.400' fontSize='xs' textAlign='center' mt={2} mb={6}>
          데이터 출처: 한국환경공단
        </Text>
      </Box>
    );
  }

  return (
    <Status icon={<Spinner color={theme.colors.primary} size='xl' thickness='3px' />} text=' ' />
  );
};

export default ChargerDetail;
