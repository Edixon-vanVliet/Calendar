import { Button } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { nextMonth, previousMonth } from 'store/calendarSlice';

import styles from './header.module.scss';

const Header = () => {
  const current = useSelector((store) => store.calendar.current);
  const dispatch = useDispatch();

  return (
    <div className={styles.header}>
      <Button type="primary" onClick={() => dispatch(previousMonth())}>
        Previous
      </Button>
      <h2>{moment(`${current.year}-${current.month}`).format('MMMM YYYY')}</h2>
      <Button type="primary" onClick={() => dispatch(nextMonth())}>
        Next
      </Button>
    </div>
  );
};

export default Header;
