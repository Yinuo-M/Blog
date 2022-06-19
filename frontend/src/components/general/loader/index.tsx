import styles from './Loader.module.scss';

type Props = {
  text: string;
};

export default function Loader({ text }: Props) {
  return (
    <span className={styles.loader}>
      {text}
      <span className={styles.dotOne}>.</span>
      <span className={styles.dotTwo}>.</span>
      <span className={styles.dotThree}>.</span>
    </span>
  );
}
