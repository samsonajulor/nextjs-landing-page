import Box from '@mui/material/Box';
import Carousel from './carousel';

const styles = {
  box: {
    maxWidth: '357px',
  },
};
/**
 *
 * @returns
 */
export default function NewsCard() {
  return (
    <Box className='Carousel__Image' sx={styles.box}>
      <Carousel />
    </Box>
  );
}
