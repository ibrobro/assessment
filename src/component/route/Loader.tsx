import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme/theme';
import Header from '../layout/Header';
import Content from '../layout/Content';
import Footer from '../layout/Footer';
import CircularProgress from '@mui/material/CircularProgress';


/**
 * Loader when lazy loading page
 */
export default function Loader() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content>
        <Container>
          <Paper sx={{backgroundColor: 'info', p: 2}}>
            <Stack direction='row'>
              <CircularProgress />
              <Typography color='warning' variant='h3'>
                Loading!
              </Typography>
            </Stack>
          </Paper>
        </Container>
      </Content>
      <Footer />
    </ThemeProvider>
  );
}