// CarteUtilisateur.js
import PropTypes from 'prop-types';

function CarteUtilisateur({ personne, largeur }) {
  return (
    <div>
      <img src={personne.photo} width={largeur} alt={personne.prenom} />
      <p>Nom : {personne.prenom}</p>
      <p>Ville : {personne.ville}</p>
    </div>
  );
}

CarteUtilisateur.propTypes = {
  personne: PropTypes.shape({
    prenom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    ville: PropTypes.string.isRequired,
  }).isRequired,
  largeur: PropTypes.number,
};

CarteUtilisateur.defaultProps = {
  largeur: 120,
};

export default CarteUtilisateur;