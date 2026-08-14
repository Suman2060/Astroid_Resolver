type InputProps = {
  id: string;
  name: string;
  type?: "text" | "search" | "email" | "password";
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  id,
  name,
  type = "text",
  value,
  placeholder,
  disabled = false,
  onChange,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      className="rounded-md border px-3 py-2"
    />
  );
}

export default Input;