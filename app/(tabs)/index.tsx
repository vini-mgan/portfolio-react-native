import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, Linking, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from '../_layout';

export default function HomeScreen() {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, dark && styles.containerDark]}>
      <View style={styles.themeSwitchRow}>
        <Text style={[styles.themeLabel, dark && styles.themeLabelDark]}>{dark ? 'Modo Escuro' : 'Modo Claro'}</Text>
        <Switch value={dark} onValueChange={toggle} />
      </View>
      <View style={styles.content}>
        <Image
          source={require('../../assets/Imagem1.jpeg')}
          style={styles.profileImage}
        />
        <Text style={[styles.title, dark && styles.titleDark]}>Vinícius Martins</Text>
        <Text style={[styles.subtitle, dark && styles.subtitleDark]}>Estudante de Ciência da Computação</Text>
        <Text style={[styles.university, dark && styles.universityDark]}>Universidade Católica de Pernambuco</Text>
        <View style={styles.socials}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/vini-mgan')} style={styles.iconButton}>
            <FontAwesome name="github" size={28} color={dark ? '#fff' : '#333'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/vini-mgan/')} style={styles.iconButton}>
            <FontAwesome name="linkedin" size={28} color="#0077B5" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#181818',
  },
  themeSwitchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,
  },
  themeLabel: {
    fontSize: 16,
    color: '#333',
    marginRight: 8,
  },
  themeLabelDark: {
    color: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#222',
  },
  titleDark: {
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitleDark: {
    color: '#bbb',
  },
  university: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  universityDark: {
    color: '#4da3ff',
  },
  socials: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  iconButton: {
    marginHorizontal: 10,
  },
}); 