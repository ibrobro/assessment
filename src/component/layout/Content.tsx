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
    <Container sx={{minHeight: '95vh', mt: '100px'}}>
      {children}
    </Container>
  )
}