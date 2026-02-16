export default function ComingSoon() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Coming Soon
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#888' }}>
        We are building something amazing. Stay tuned!
      </p>
    </main>
  );
}