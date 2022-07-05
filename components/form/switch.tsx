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
      <div className="flex items-center" onClick={onChange}>
        <div className={styles.switch}>
          <input type="checkbox" checked={selected} onChange={onChange} />
          <span className={styles.slider}></span>
        </div>
        <span className=" ml-2 font-light">{label}</span>
      </div>
    );
  }

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={selected} {...inputProps} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
