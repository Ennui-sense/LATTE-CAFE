import "./Button.scss";

interface IButton {
  children: string;
	isActive?: boolean;
	onClick?: () => void;
}

const Button = ({ children, isActive, onClick }: IButton) => {
  return (
    <button type="button" className={isActive ? "button active" : "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
