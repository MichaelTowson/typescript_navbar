import classes from './Button.module.css'

interface Props {
    text: string
}

const Button: React.FC<Props> = (props) => {
  return (
    <div>
      <button className={classes.button}>{props.text}</button>
    </div>
  );
};

export default Button;