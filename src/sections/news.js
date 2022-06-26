import { Grid, Stack } from '@mui/material';
import { CgExtensionAdd } from 'react-icons/cg';
import NewsCard from 'components/latestNews/newsCard';
import CardsContainer from 'components/cardsContainer';

// styles
const styles = {
  card: {
    maxWidth: '100%',
    marginBottom: 2,
    backgroundColor: '#F3A35C',
    borderRadius: '10px',
  },
  cardActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

/**
 *
 * @returns
 */
const MarketCard = () => {
  return (
    <Stack className='Carousel__Image' direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Grid item xs={16} data-testid='extensions-marketplace'>
        <CardsContainer
          componentHeight='320px'
          cardLable='Extensions Marketplace'
          hasDate={false}
          Icon={<CgExtensionAdd size={25} color='#103B66' />}
          hasReadMoreArrow={true}
          readMoreLink='Discover all extensions'
        >
          <NewsCard />
        </CardsContainer>
      </Grid>
    </Stack>
  );
};

export default MarketCard;
