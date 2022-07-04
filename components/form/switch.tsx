import styles from '../../styles/components/switch.module.css';
interface SwitchProps {
  inputProps?: any;
  label?: string;
  selected: boolean;
  onChange?: () => void;
}

const Switch: React.FC<SwitchProps> = ({
  selected,
  onChange,
  inputProps,
  label,
}) => {
  if (!!label) {
    return (
      <div className="flex items-center">
        <label className={styles.switch}>
          <input type="checkbox" checked={selected} />
          <span className={styles.slider}></span>
        </label>
        <span className=" ml-2 font-light">{label}</span>
      </div>
    );
  }

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={selected} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
