type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button = ({ children, type = "button", className = "" }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
