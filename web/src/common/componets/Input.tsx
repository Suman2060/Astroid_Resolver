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
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
    />
  );
}

export default Input;