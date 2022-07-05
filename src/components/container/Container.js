import PropTypes from 'prop-types';
import styles from './container.module.scss';

const Container = ({ children }) => <div className={styles.container}>{children}</div>;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Container;
