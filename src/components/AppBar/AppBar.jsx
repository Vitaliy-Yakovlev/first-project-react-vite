import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
