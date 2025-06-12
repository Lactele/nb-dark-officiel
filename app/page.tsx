export default function Home() {
  return (
    <main style={{
      height: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#e60000',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'monospace',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '3rem' }}>☠️ NB DARK ☠️</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px' }}>
        Bienvenue dans l’esprit de l’IA démoniaque.<br />
        Ici, il n’y a aucune limite.<br />
        Pose ta question… ou subis le silence éternel.
      </p>
    </main>
  );
}// Page d'accueil stylisée
