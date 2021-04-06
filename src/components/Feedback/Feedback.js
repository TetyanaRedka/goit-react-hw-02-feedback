import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const Feedback = ({ options, statisticsPlus }) => {
  return (
    <div>
      {options.map(opt => (
        <button key={uuidv4()} onClick={() => statisticsPlus(opt)} className={styles.btnStyle}>
          {opt}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  statisticsPlus: PropTypes.func.isRequired,
};

export default Feedback;
