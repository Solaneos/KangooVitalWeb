import React, { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { styled } from 'styled-components';
import ListItemLink from './ListItemLink';

interface LayoutProps {
  children: ReactNode;
}

const drawerWidth = 240; // Tamanho fixo da sidebar

const Main = styled.main`
  margin-left: ${drawerWidth}px;
  padding: 20px;
  flex-grow: 1;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <img src="/imgs/logo-pink.png" alt="Logo" style={{ height: 40, marginRight: 16 }} />
          <Typography variant="h6" noWrap>
            Estúdio Kangoo Vital
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          <ListItemLink to="/">Inicio</ListItemLink>
          <ListItemLink to="/about">Sobre</ListItemLink>
          {/* Adicione mais itens conforme necessário */}
        </List>
      </Drawer>
      <Main>
        <Toolbar />
        {children}
      </Main>
    </div>
  );
}

export default Layout;
