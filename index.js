import React from 'react';

export default function PureMediaHome() {
  return (
    <div style={styles.container}>
      {/* Top Navigation Bar */}
      <div style={styles.header}>
        <h1 style={styles.logoText}>PURE-MEDIA</h1>
        <div style={styles.founderBadge}>
           <span style={styles.badgeEmoji}>👑</span>
        </div>
      </div>

      {/* 4K Video Feed Placeholder */}
      <div style={styles.videoContainer}>
        <div style={styles.videoPlaceholder}>
          <p style={styles.videoText}>[ High-Bitrate 4K Stream ]</p>
          {/* Your Gold Diamond Logo watermark */}
          <div style={styles.watermark}>
             <span style={styles.watermarkText}>💎</span>
          </div>
        </div>
      </div>

      {/* Monetization Overlay (The 15% Silent Split Zone) */}
      <div style={styles.interactionBar}>
         <div style={styles.iconColumn}>
            <span style={styles.iconText}>❤️</span>
            <p style={styles.iconSubText}>1.2M</p>
         </div>
         <div style={styles.iconColumn}>
            <span style={styles.iconText}>🪙</span>
            <p style={styles.iconSubText}>Tip</p>
         </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#000000', // Obsidian Black
    margin: 0,
    overflow: 'hidden',
    position: 'relative',
    fontFamily: 'sans-serif',
  },
  header: {
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px',
  },
  logoText: {
    color: '#FFD700', // Royal Gold
    fontSize: '22px',
    fontWeight: '900',
    letterSpacing: '5px',
    margin: 0,
  },
  founderBadge: {
    position: 'absolute',
    right: '20px',
  },
  videoContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
  },
  videoPlaceholder: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    position: 'relative',
  },
  videoText: {
    color: '#E5E4E2', // Platinum Silver
    fontSize: '16px',
  },
  watermark: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    opacity: 0.5,
  },
  interactionBar: {
    position: 'absolute',
    right: '15px',
    bottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconColumn: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconText: {
    fontSize: '30px',
  },
  iconSubText: {
    color: '#FFD700',
    fontSize: '12px',
    fontWeight: 'bold',
    margin: '5px 0 0 0',
  }
};
