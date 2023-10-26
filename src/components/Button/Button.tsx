interface ButtonProps {
  text: "+" | "-" | "Reset mass";
  actionOnClick: () => void;
}

const Button = ({ text, actionOnClick }: ButtonProps): React.ReactElement => {
  return (
    <button className="button" onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
