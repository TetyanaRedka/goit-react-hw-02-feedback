import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={styles.list}>Good: {good}</p>
      <p className={styles.list}>Neutral: {neutral}</p>
      <p className={styles.list}>Bad: {bad}</p>
      <p className={styles.list}>Total: {total()} </p>
      <p className={styles.list}>Positive feedback: {positivePercentage()} % </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
