interface ButtonProps {
  className: string;
  actionOnClick: () => void;
  text: "Increase mass" | "Decrease mass" | "Reset mass";
}

const Button = ({ text, actionOnClick }: ButtonProps): React.ReactElement => {
  return (
    <button className="button" onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
