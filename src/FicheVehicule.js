import PropTypes from 'prop-types';

function FicheVehicule({ marque, modele, couleur }) {
  return (
    <p>
      Vehicule : {marque} {modele} - Couleur : {couleur}
    </p>
  );
}

FicheVehicule.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
};

export default FicheVehicule;