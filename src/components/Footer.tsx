import { Box, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-[#112240] text-[#CCD6F6] p-4 mt-10">
      <Box className="container mx-auto flex flex-col items-center gap-4">
        <Typography variant="body2" className="text-center">
          © {new Date().getFullYear()} Gustavo de Alencar. All rights reserved.
        </Typography>
        <Box className="flex gap-4">
          <Link href="https://github.com/GustavoRocha3" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </Link>
          <Link href="https://www.linkedin.com/in/gustavo-de-alencar-b-rocha/" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
          </Link>
        </Box>
      </Box>
    </footer>
  );
}