import React from 'react';
import { useHistory } from 'react-router-dom';

function Footer() {
  const history = useHistory();
  return (
    <footer data-testid="footer">
      <input
        type="image"
        src="../images/drinkIcon.svg"
        alt="Icone para a página de bebidas"
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/drinks') }
      />
      <input
        type="image"
        src="../images/mealIcon.svg"
        alt="Icone para a página de comidas"
        data-testid="meals-bottom-btn"
        onClick={ () => history.push('/meals') }
      />
    </footer>
  );
}

export default Footer;
