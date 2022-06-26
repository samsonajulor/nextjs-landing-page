/** @jsx jsx */
import React from 'react';
import { jsx, Box, Text, Container, Heading, Input, Button } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
import logo from 'assets/logo.svg';
import menuItems from './footer.data';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box>
          <Logo image={logo} />
        </Box>
      </Container>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          {/* subcribe form */}
          <Box as='section' sx={styles.subscribe}>
            <Container>
              <Text as='p'>subscribe</Text>
              <Box as='form' sx={styles.form}>
                <Box as='label' htmlFor='subscribeEmail' variant='styles.srOnly'>
                  Email
                </Box>
                <Input
                  placeholder='Enter your email'
                  type='email'
                  id='subscribeEmail'
                  sx={styles.input}
                />
                <Button type='submit' sx={styles.button}>
                  Subscribe
                </Button>
              </Box>
            </Container>
          </Box>
          {/* end subscribe form */}
          {menuItems.map(({ header, items }, i) => (
            <Box sx={styles.footer.menus} key={i}>
              <Heading sx={styles.footer.heading}>{header}</Heading>
              <nav>
                {items.map(({ path, label }, i) => (
                  <Link path={path} key={i} label={label} sx={styles.footer.link} />
                ))}
              </nav>
            </Box>
          ))}
        </Box>
      </Container>
      <Text sx={styles.footer.copyright}>All right reserved</Text>
    </footer>
  );
}


const styles = {
  subscribe: {
    h3: {
      textAlign: 'center',
      fontSize: ['23px', null, null, null, null, '30px', '36px'],
      lineHeight: [1.5, null, null, '1'],
      color: 'black',
      letterSpacing: ['-0.5px'],
      mb: ['0px', null, null, '15px'],
      width: ['40%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
    },
    p: {
      fontSize: ['16px'],
      color: 'black',
      opacity: '.6',
      letterSpacing: ['-0.5px'],
      textAlign: 'center',
      width: ['40%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '0'],
    },
  },
  form: {
    // width: ['100%'],
    // maxWidth: ['555px'],
    mx: ['auto'],
    display: ['flex'],
    flexWrap: ['wrap'],
    mt: ['30px', null, null, null, '60px'],
  },
  input: {
    width: ['60%'],
    borderRadius: '5px',
    border: '1px solid black',
    backgroundColor: 'white',
    outline: 'blue',
    color: 'black',
    fontSize: '10px',
    textAlign: ['center', null, null, 'left'],
  },
  button: {
    backgroundColor: 'black',
    borderRadius: '5px',
    fontSize: ['10px'],
    color: 'white',
    outline: 'none',
    padding: ['0px 20px'],
    width: ['40%'],
    '&:hover': {
      backgroundColor: 'orange',
      opacity: '0.8',
    },
  },
  footer: {
    container: {
      width: '100%',
      alignItems: 'stretch',
    },
    footerTopArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    },
    menus: {
      width: ['45%', '20%', '20%', '20%'],
      display: 'flex',
      flexDirection: 'column',
    },

    heading: {
      color: 'text_secondary',
      fontWeight: '500',
      mb: 3,
      lineHeight: '1.35',
    },

    link: {
      fontSize: ['14px', null, 1],
      color: 'text',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
    copyright: {
      fontSize: ['14px', null, 1],
      width: '100%',
      textAlign: 'center',
      p: ['20px 20px'],
      backgroundColor: '#FCFDFE',
      color: 'text',
      a: {
        textDecoration: 'none',
        color: 'inherit',
        pl: 1,
        transition: 'all 0.25s',
        '&:hover': {
          color: 'primary',
        },
      },
    },
  },
};
