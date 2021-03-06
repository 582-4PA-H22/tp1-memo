import './Utilisateur.scss';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function Utilisateur() {
  return (
    <div className="Utilisateur">
      <span className="nom">Monsieur Untel</span>
      <Avatar className="avatar" alt="Le même Monsieur Untel" title="Email de l'utilisateur ici" />
      
      <Button 
        variant="outlined"
        size="small"
        className="btn-deconnexion"
        onClick={() => alert('À compléter')}
      >
        Déconnexion
      </Button>
    </div>
  );
}