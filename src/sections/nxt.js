/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/vector.svg';
import Editing from 'assets/editing.svg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Vector',
    title: 'NXT Trade',
    text: 'Some long text Some long text Some long text Some long text Some long text Some long text Some long text Some long text Some long text.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Tech',
    title: 'NXT Tech',
    text: 'Some long textSome long text Some long text Some long text Some long text Some long text Some long text.',
  },
];

export default function Nxt() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='feature'>
      <Container>
        <SectionHeader
          title='Some long text Some long text Some long text Some long text Some long text Some long text'
          slogan='NXT Subsidiaries'
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <>
              <FeatureCardColumn
                key={item.id}
                src={item.imgSrc}
                alt={item.title}
                title={item.title}
                text={item.text}
              />
            </>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(2,1fr)',],
    width: ['100%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
