import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { ReactNode } from "react";


/**
 * Content Properties
 */
interface ContentProps {
  children: ReactNode;
}


/**
 * Content
 * Main Page Structure
 */
export default function Content({children}: ContentProps) {
  return (
    <Container sx={{minHeight: '95vh'}}>
      <Box sx={{color: 'red'}}>
        {children}
        <p>test</p>
      </Box>
    </Container>
  )
}