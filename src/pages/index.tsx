import { useCheckout } from '../mock-backend';
import styles from './index.module.scss';

const Index = () => {
  const { items, buy } = useCheckout();

  return (
    <main className={styles.main}>
      <h1>Create, Inc. Store</h1>
      {/** @TODO: Not implemented */}
    </main>
  );
};

export default Index;
