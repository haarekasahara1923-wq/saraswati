export default function DashboardHome() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', color: 'var(--secondary-color)', marginBottom: '30px' }}>Dashboard Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        
        <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#888', marginBottom: '10px' }}>Total Gallery Items</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>12</p>
        </div>

        <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#888', marginBottom: '10px' }}>Active Announcements</h3>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>3</p>
        </div>
        
      </div>
    </div>
  );
}
