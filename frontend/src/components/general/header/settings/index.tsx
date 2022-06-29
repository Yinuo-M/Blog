import styles from './Settings.module.scss';

type Setting = {
  label: string;
  onClick: () => void;
  key: string | number;
};

type Props = {
  settings: Setting[];
};

export default function Settings({ settings }: Props) {
  return (
    <div className={styles.settings}>
      {settings.map((setting) => (
        <button onClick={setting.onClick} type="button" key={setting.key}>
          {setting.label}
        </button>
      ))}
    </div>
  );
}
