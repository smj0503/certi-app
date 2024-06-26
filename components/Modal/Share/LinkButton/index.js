import { Flex } from 'antd';
import styles from './LinkButton.module.css';

export default function ({ name, logo, onClick }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      data-button-animation={true}
    >
      <Flex vertical align='center' gap={10}>
        {logo}
        <span className={styles.name}>{name}</span>
      </Flex>
    </button>
  );
}
