import React from 'react';
import PropTypes from 'prop-types';
import s from './Container.module.css';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Container;
