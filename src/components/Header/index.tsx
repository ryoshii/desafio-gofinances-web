import React from 'react';

import { Link } from 'react-router-dom';

import { Container, NavLink } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        {
          // Todo
        }
        <NavLink to="/">Listagem</NavLink>
        <NavLink to="/import">Importar</NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
