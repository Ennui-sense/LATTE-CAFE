import "./Button.scss";

interface IButton {
  children: string;
}

const Button = ({ children }: IButton) => {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
};

export default Button;
