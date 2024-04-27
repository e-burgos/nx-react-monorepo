import styles from './wallets.module.css';

/* eslint-disable-next-line */
export interface WalletsProps {}

export function Wallets(props: WalletsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Wallets!</h1>
    </div>
  );
}

export default Wallets;
