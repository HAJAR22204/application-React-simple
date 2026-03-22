import MessageAccueil from './MessageAccueil';
import Salutation from './Salutation';
import CarteUtilisateur from './CarteUtilisateur';
import FicheVehicule from './FicheVehicule';
import ListeArticles from './ListeArticles';

function App() {
  const personne = { prenom: 'Karim', photo: '/avatar.png', ville: 'Casablanca' };
  const fruits = ['Pomme', 'Banane', 'Orange', 'Mangue'];
  const pays = ['Maroc', 'France', 'Espagne', 'Portugal'];

  return (
    <div>
      <MessageAccueil />
      <Salutation nom="Karim" />
      <Salutation nom="Sara" />
      <CarteUtilisateur personne={personne} largeur={150} />
      <FicheVehicule marque="Toyota" modele="Corolla" couleur="Blanc" />
      <FicheVehicule marque="Renault" modele="Clio" couleur="Rouge" />
      <FicheVehicule marque="Dacia" modele="Logan" couleur="Gris" />
      <h3>Liste de fruits :</h3>
      <ListeArticles articles={fruits} />
      <h3>Liste de pays :</h3>
      <ListeArticles articles={pays} />
    </div>
  );
}

export default App;
