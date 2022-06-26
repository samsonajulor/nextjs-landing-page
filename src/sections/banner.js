import React from 'react';
import { Box, Container, Image, Heading } from 'theme-ui';
import bannerImage from 'assets/banner-mockup.png';

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.container}>
        <Heading as="h2">Top class products to serve you</Heading>
        <Image src={bannerImage} sx={styles.bannerImage} alt="banner moc" />
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    overflow: 'hidden',
    backgroundColor: '#F9FBFD',
    textAlign: 'center',
    pt: ['110px', null, null, null, '130px'],
    h2: {
      fontSize: ['28px', null, null, '32px', '38px', '48px', '64px'],
      lineHeight: 1.25,
      color: '#02073E',
      fontWeight: 700,
      width: '100%',
      maxWidth: ['100%', null, null, '55%', '500px', '640px', '851px'],
      mx: 'auto',
      mt: '30px',
      mb: ['40px', null, null, '65px'],
    },
  },
  bannerImage: {
    display: 'block',
    mx: 'auto',
    position: 'relative',
    maxWidth: ['100%', null, null, '80%', null, '100%'],
  },
  container: {
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block'],
    },
  },
};
