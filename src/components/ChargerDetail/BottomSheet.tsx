import { Container, useTheme } from '@chakra-ui/react';

const BottomSheet = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <Container
      pos='fixed'
      bottom={0}
      zIndex={theme.zIndex.bottomSheet}
      maxW='container.lg'
      h={`calc(100vh - ${theme.sizes.mapHeight} - ${theme.sizes.navHeight} + 8px)`}
      overflowY='auto'
      p={0}
      bg='white'
      shadow={theme.shadows.bottomSheet}
      borderRadius='16px 16px 0 0'
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      _before={{
        content: '""',
        display: 'block',
        pos: 'sticky',
        top: 0,
        left: 0,
        zIndex: 10,
        h: '16px',
        w: 'full',
        bg: 'white',
      }}
    >
      {children}
    </Container>
  );
};

export default BottomSheet;
