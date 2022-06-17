import CustomLabel from '../label';

interface TextInputWithLabelProps {
  labelText: string;
  inputProps?: any;
  bottomMessage?: string;
  optional?: boolean;
  textarea?: boolean;
}

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({
  labelText,
  inputProps,
  bottomMessage,
  optional,
  textarea,
}) => {
  return (
    <div className="mb-6">
      <CustomLabel
        text={labelText}
        optional={Boolean(optional)}
        className="mb-2"
      />
      {textarea ? (
        <textarea className="text-field" {...inputProps} />
      ) : (
        <input type="text" className="text-field" {...inputProps} />
      )}
      {bottomMessage ? (
        <span className="label-bottom mt-2">{bottomMessage}</span>
      ) : null}
    </div>
  );
};

export default TextInputWithLabel;
