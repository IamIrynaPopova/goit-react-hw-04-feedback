import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  bad,
  good,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.list_item}>Good: {good}</li>
      <li className={css.list_item}>Neutral: {neutral}</li>
      <li className={css.list_item}>Bad: {bad}</li>
      <li className={css.list_item}>Total: {total}</li>
      <li className={css.list_item}>Positive feedback: {positivePercentage}</li>
    </ul>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
