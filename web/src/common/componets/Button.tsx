type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?:boolean;
};

const Button = ({ children, type = "button", className = "", disabled}: ButtonProps) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
