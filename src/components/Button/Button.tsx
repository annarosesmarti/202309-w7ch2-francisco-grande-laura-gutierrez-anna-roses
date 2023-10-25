interface ButtonProps {
  symbol: "+" | "-" | "Reset";
  actionOnClick: () => void;
}

const Button = ({ symbol, actionOnClick }: ButtonProps): React.ReactElement => {
  return (
    <button className="button" onClick={actionOnClick}>
      {symbol}
    </button>
  );
};

export default Button;
