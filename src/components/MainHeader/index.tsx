import React, {useMemo} from 'react';
import { 
  Container, 
  Profile, 
  Welcome, 
  UserName } from './styles';

import {arEmojis} from '../../utils/emojis';
import Toggle from '../Toggle';

const MainHeader: React.FC = () => {

  const emoji = useMemo(() =>{
    const indice = Math.floor(Math.random() * arEmojis.length);
    return arEmojis[indice];
  }, []);

  return (
    <>
      <Container>
        <Toggle></Toggle>
        <Profile>
  <Welcome>Olá, {emoji}</Welcome>
          <UserName>Eduardo Amâncio</UserName>
        </Profile>
      </Container>
    </>
  );
};

export default MainHeader;