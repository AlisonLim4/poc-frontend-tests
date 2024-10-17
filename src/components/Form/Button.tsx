import './Button.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className='button' onClick={props.onClick} {...props}>
      {children}
    </button>
  );
};
