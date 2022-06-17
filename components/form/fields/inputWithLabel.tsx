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
      <span className="label mb-2">
        {labelText}
        {!optional ? (
          <span className="text-darkgreen400 p-1 inline-block">*</span>
        ) : null}
      </span>
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
