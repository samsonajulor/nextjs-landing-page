export default {
  // example colors with dark mode
  breakpoints: ['376px', '576px', '768px', '992px', '1200px', '1650px'],
  colors: {
    text: '#343D48', // body color and primary color
    text_secondary: '#02073E', // secondary body color
    heading: '#02073E', // primary heading color
    heading_secondary: '#343D48', // heading color
    background: '#FFFFFF', // body background color
    background_secondary: '#F9FBFD', // secondary background color
    border_color: '#E9EDF5', // border color
    primary: '#8D448B', // primary button and link color
    secondary: '#793677', // secondary color - can be used for hover states
    black: '#0F2137', // black color
    gray: '#F8FAFC',
    muted: '#7B8188', // muted color
    accent: '#609', // a contrast color for emphasizing UI
  },
  fonts: {
    body: 'DM Sans',
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'DM Sans',
    // heading: 'Bree Serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [13, 14, 16, 18, 20, 21, 30, 36, 48, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 2,
    heading: '50px',
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  // space: [0, 4, 8, 16, 32, 64],
  sizes: {
    container: ['1250px'],
  },
  // variants can use custom, user-defined names
  layout: {
    container: {
      px: ['15px', null, null, '30px', '40px'],
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'space-between',
    },
    main: {},
    footer: {
      backgroundColor: 'background_secondary',
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: 'heading',
      color: 'heading',
    },
    heroPrimary: {
      fontSize: [5, 55],
      fontWeight: 'normal',
      lineHeight: ['40px', '80px'],
      letterSpacing: '-1px',
      textAlign: ['center', 'left'],
    },
    title: {
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137',
    },
    heroSecondary: {
      color: 'text_secondary',
      lineHeight: ['30px', '42px'],
      letterSpacing: '0.1em',
      textAlign: ['center', 'left'],
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137',
    },
    muted: {
      lineHeight: '26px',
      color: 'muted',
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px',
    },
  },
  links: {
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      display: ['none', null, 'inline-block'],
      p: 2,
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none'],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    primary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      cursor: 'pointer',
      transition: '500ms',
      fontSize: 2,
      outline: 'none',
      '&:hover': {
        bg: 'secondary',
      },
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      WebkitFontSmoothing: 'antialiased',
    },
    a: {
      cursor: 'pointer',
      textDecoration: 'none',
    },
    button: {
      cursor: 'pointer',
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7',
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
  section: {
    keyFeature: {
      py: [8, null, 9, null, null, 10],
    },
    feature: {
      py: [8, null, 9, null, null, 10],
    },
    partner: {
      pt: [2, null, null, 5],
      pb: [8, null, 9, null, null, 10],
    },
    testimonial: {
      py: [8, null, 9, null, null, 10],
      overflow: 'hidden',
    },
    securePayment: {
      overflow: 'hidden',
      position: 'relative',
      pt: 9,
    },
    faq: {
      py: [8, null, 9, null, null, 10],
    },
  },
  sectionHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: -1,
    marginBottom: ['50px', null, '60px', null, '65px', '75px'],
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, 1.2],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px',
    },

    subTitle: {
      fontSize: [0, null, '14px'],
      color: 'heading',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: '8px',
      lineHeight: 1.5,
    },
  },
};
