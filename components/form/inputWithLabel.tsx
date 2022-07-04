import CustomBottomMessage from './bottomMessage';
import CustomLabel from './label';

interface TextInputWithLabelProps {
  labelText: string;
  inputProps?: any;
  bottomMessage?: string;
  errorMsg?: string;
  optional?: boolean;
  textarea?: boolean;
}

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({
  labelText,
  inputProps,
  bottomMessage,
  errorMsg,
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
        <textarea className="text-field -mb-2" {...inputProps} />
      ) : (
        <input
          type="text"
          className={errorMsg ? 'text-field-error' : 'text-field'}
          {...inputProps}
        />
      )}
      <CustomBottomMessage text={bottomMessage} errorMsg={errorMsg} />
    </div>
  );
};

export default TextInputWithLabel;
