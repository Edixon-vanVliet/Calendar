import styles from './days.module.scss';

const Days = () => (
  <div className={styles.days}>
    <div className={styles.day}>Su</div>
    <div className={styles.day}>Mo</div>
    <div className={styles.day}>Tu</div>
    <div className={styles.day}>We</div>
    <div className={styles.day}>Th</div>
    <div className={styles.day}>Fr</div>
    <div className={styles.day}>Sa</div>
  </div>
);

export default Days;
