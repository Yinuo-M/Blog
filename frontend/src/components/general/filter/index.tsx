import styles from './Filter.module.scss';

type Filter = {
  label: string;
  onClick: () => void;
  key: string | number;
};

type Props = { filters: Filter[]; selected: string };

export default function Filter({ filters, selected }: Props) {
  return (
    <div className={styles.filter}>
      {filters.map((filter) => (
        <div className={styles.buttonWrapper} key={filter.key}>
          <button
            className={`${filter.label === selected ? styles.selected : ''}`}
            onClick={filter.onClick}
            type="button"
          >
            {filter.label}
          </button>
        </div>
      ))}
    </div>
  );
}
