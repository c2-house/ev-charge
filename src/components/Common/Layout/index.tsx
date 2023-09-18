import { useRouter } from "next/router";
import { Text, Container, useTheme, Divider } from "@chakra-ui/react";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const router = useRouter();
  const mapPage = router.asPath === "/";

  return (
    <>
      <Navigation />
      <Container
        as="main"
        maxW="container.lg"
        p={mapPage ? 0 : [4, 6]}
        mt={theme.sizes.navHeight}
        mb="env(safe-area-inset-bottom)"
      >
        {children}
      </Container>
      <Container as="footer" textAlign="center" maxW="container.lg" py={2}>
        <Divider />
        <Text color="gray.500" my={2}>
          &copy; 전기차G | 문의: chaechae.couple@gmail.com
        </Text>
      </Container>
    </>
  );
};

export default Layout;
