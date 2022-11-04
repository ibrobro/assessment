import React, { ReactNode, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme/theme';
import {RouterProvider, Outlet} from 'react-router-dom';
import router from '../route/router';
import Typography from "@mui/material/Typography";
import Loader from '../route/Loader';

/**
 * Main Layout
 * Main Page Structure
 */
 export default function MainLayout() {
  return (
    <Suspense fallback={<Loader/>}>
      <ThemeProvider theme={theme}>
        <Header />
        <Content><Outlet /></Content>
        <Footer />
      </ThemeProvider>
    </Suspense>
  )
}