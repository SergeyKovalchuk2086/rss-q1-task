interface InputProps {
  inputValue: string;
  onChange: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const { inputValue, onChange } = props;

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Tap something"
    />
  );
};
