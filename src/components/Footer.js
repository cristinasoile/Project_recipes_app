import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/footer.css';

export default function Footer() {
  const history = useHistory();

  const styles = {
    position: 'fixed',
    bottom: '0px',
  };

  return (
    <footer
      data-testid="footer"
      style={ styles }
    >
      <input
        className="drink"
        type="image"
        src={ drinkIcon }
        alt="Icone para a página de bebidas"
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/drinks') }
      />
      <input
        className="meals"
        type="image"
        src={ mealIcon }
        alt="Icone para a página de comidas"
        data-testid="meals-bottom-btn"
        onClick={ () => history.push('/meals') }
      />
    </footer>
  );
}
