interface LabelProps {
  text: string;
  optional?: boolean;
  className?: string;
}

const CustomLabel: React.FC<LabelProps> = ({ text, optional, className }) => {
  return (
    <span className={`label ${className ? className : ''}`}>
      {text}
      {!optional ? (
        <span className="text-darkgreen400 p-1 inline-block">*</span>
      ) : null}
    </span>
  );
};

export default CustomLabel;
