import CharacterCard from "../CharacterCard/CharacterCard";

CharacterCard;
interface ButtonProps {
  className: string;
  actionOnClick: () => void;
  text: "Increase mass" | "Decrease mass" | "Reset mass";
}

const Button = ({
  className,
  actionOnClick,
  text,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={`custom-button ${className}`} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
