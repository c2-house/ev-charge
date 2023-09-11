import { Box, useTheme } from '@chakra-ui/react';

const BottomSheet = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <Box
      w='full'
      maxW='container.xl'
      mt={2}
      h={`calc(100vh - ${theme.sizes.mapHeight} - ${theme.sizes.navHeight} - 8px)`}
      overflowY='auto'
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default BottomSheet;
