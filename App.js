import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function PureMediaHome() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Top Navigation Bar */}
      <View style={styles.header}>
        <Text style={styles.logoText}>PURE-MEDIA</Text>
        <View style={styles.founderBadge}>
           <Text style={styles.badgeEmoji}>👑</Text>
        </View>
      </View>

      {/* 4K Video Feed Placeholder */}
      <View style={styles.videoContainer}>
        <View style={styles.videoPlaceholder}>
          <Text style={styles.videoText}>[ High-Bitrate 4K Stream ]</Text>
          {/* Your Gold Diamond Logo would sit here as a watermark */}
          <View style={styles.watermark}>
             <Text style={styles.watermarkText}>💎</Text>
          </View>
        </View>
      </View>

      {/* Monetization Overlay (The 15% Silent Split Zone) */}
      <View style={styles.interactionBar}>
         <View style={styles.iconColumn}>
            <Text style={styles.iconText}>❤️</Text>
            <Text style={styles.iconSubText}>1.2M</Text>
         </View>
         <View style={styles.iconColumn}>
            <Text style={styles.iconText}>🪙</Text>
            <Text style={styles.iconSubText}>Tip</Text>
         </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Obsidian Black
  },
  header: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  logoText: {
    color: '#FFD700', // Royal Gold
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 5,
  },
  founderBadge: {
    position: 'absolute',
    right: 20,
    top: 55,
  },
  videoContainer: {
    flex: 1,
    width: width,
    height: height - 150,
  },
  videoPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  videoText: {
    color: '#E5E4E2', // Platinum Silver
    fontSize: 16,
  },
  watermark: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    opacity: 0.5,
  },
  interactionBar: {
    position: 'absolute',
    right: 15,
    bottom: 120,
    alignItems: 'center',
  },
  iconColumn: {
    marginBottom: 20,
    alignItems: 'center',
  },
  iconText: {
    fontSize: 30,
  },
  iconSubText: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
