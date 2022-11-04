import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {useRouteError, Link} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import MENUS from '../../data/menu';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme/theme';
import Header from '../layout/Header';
import Content from '../layout/Content';
import Footer from '../layout/Footer';


/**
 * Router Error Object
 */
interface RouterError {
  statusText: string; 
  message: string;
};


/**
 * Error component for no-route found
 */
export default function NotFound() {
  const error: RouterError = useRouteError() as RouterError;

  return (
    <ThemeProvider theme={theme}>
    <Header />
    <Content>
      <Container>
        <Paper sx={{backgroundColor: 'info', p: 2}}>
          <Stack>
            <Typography color='error' variant='h3'>
              Oops!
            </Typography>
            <Typography color='error' variant='body1'>
              {error.statusText || error.message}.
            </Typography>
              <Link to={MENUS.home.link}>
                <Button variant='outlined'>Back to Home</Button>
              </Link>
          </Stack>
        </Paper>
      </Container>
    </Content>
    <Footer />
  </ThemeProvider>

  );
  
}