import "./Button.scss";

interface IButton {
  children: string;
	isActive?: boolean
}

const Button = ({ children, isActive }: IButton) => {
  return (
    <button type="button" className={isActive ? "button active" : "button"}>
      {children}
    </button>
  );
};

export default Button;
