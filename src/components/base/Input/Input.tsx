interface InputProps {
  value: string;
  placeholder: string;
  className: string;
  onChange: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const { value, onChange, placeholder, className } = props;

  return (
    <input
      className={className}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
