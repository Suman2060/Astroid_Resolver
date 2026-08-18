type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?:boolean;
};

const Button = ({ children, type = "button", className = "" }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
