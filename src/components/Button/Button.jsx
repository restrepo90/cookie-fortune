
import './Button.css'

const Button = ({ handlerClick }) => {

 

  return (
    <div>
      <button onClick={handlerClick}>
      <i class='bx bx-chevrons-right'></i>
      </button>
    </div>
  );
};

export default Button;
