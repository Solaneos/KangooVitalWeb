import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import { styled } from 'styled-components';

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`;

const ListItemLink = (props: any) => {
  return (
    <ListItem button component={StyledLink} {...props}>
      {props.children}
    </ListItem>
  );
};

export default ListItemLink;
