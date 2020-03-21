import React from 'react';
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import './design.css'

function App() {
  return (
      <Container centered paddind="extra">
        <Input placeholder="Имя пользователя" size="l" type="text" className="mb-1" />
        <br />
        <Input placeholder="Пароль" type="password" size="l" className="mb-1" />
        <br />
        <Button size="l" color="pink">Войти</Button>
      </Container>
  );
}

export default App;
