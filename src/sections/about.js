import React from 'react';
import { Box, Container, Flex, Text, Heading, Image } from 'theme-ui';
import { Link } from 'components/link';

import banner from 'assets/banner-mockup.png';

const about = () => {
  return (
    <Box as='section' sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Text as='span'>About Us</Text>
            <Text as='p'>
              A very log text here A very log text here A very log text here A very log text here A
              very log text here A very log text here A very log text here.
            </Text>
            <Link path='#' sx={styles.button}>
              Learn more
            </Link>
          </Box>
          <Box sx={styles.images}>
            <Image src={banner} alt='banner' />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default about;

const styles = {
  callToAction: {
    mt: ['-90px', null, null, null, '0'],
    py: ['50px', null, null, null, '110px', null, '140px'],
  },
  flex: {
    flexWrap: 'wrap',
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 38.5%'],
    textAlign: ['center', null, null, null, 'left'],
    pt: ['80px', null, null, null, '0'],
    maxWidth: ['100%', null, null, '80%', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['30px', null, null, null, '0'],
    span: {
      fontSize: '18px',
      fontWeight: 700,
      color: 'primary',
      display: 'block',
      lineHeight: 1,
    },
    p: {
      color: '#02073E',
      fontSize: ['16px', null, null, '18px'],
      lineHeight: ['2', null, null, 2.33],
      mb: '30px',
    },
  },
  button: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  images: {
   borderRadius: '50%',
    flex: ['0 0 100%', null, null, null, '0 0 61.5%'],
  },
};
