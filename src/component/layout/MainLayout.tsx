import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./footer";
import Content from "./Content";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme/theme';


/**
 * Main Layout Props
 */
interface MainLayoutProps {
  children: ReactNode;
}


/**
 * Main Layout
 * Main Page Structure
 */
 export default function MainLayout({children}: MainLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </ThemeProvider>
  )
}
