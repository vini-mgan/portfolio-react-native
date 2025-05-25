import React, { useContext } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from '../_layout';

export default function SobreScreen() {
  const { dark } = useContext(ThemeContext);
  const technologies = [
    { name: 'React Native', icon: 'mobile', description: 'Framework para desenvolvimento mobile multiplataforma' },
    { name: 'Expo', icon: 'rocket', description: 'Plataforma para desenvolvimento React Native simplificado' },
    { name: 'Expo Router', icon: 'map', description: 'Sistema de navegação baseado em arquivos' },
    { name: 'TypeScript', icon: 'code', description: 'Superset JavaScript com tipagem estática' },
    { name: 'React Navigation', icon: 'compass', description: 'Biblioteca de navegação para React Native' },
  ];

  return (
    <SafeAreaView style={[styles.container, dark && styles.containerDark]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={[styles.title, dark && styles.titleDark]}>Sobre o App</Text>
          <Text style={[styles.description, dark && styles.descriptionDark]}>
            Este portfólio foi desenvolvido utilizando as seguintes tecnologias:
          </Text>
          
          {technologies.map((tech, index) => (
            <View key={index} style={[styles.techCard, dark && styles.techCardDark]}>
              <FontAwesome name={tech.icon} size={24} color={dark ? '#4da3ff' : '#007AFF'} />
              <View style={styles.techInfo}>
                <Text style={[styles.techName, dark && styles.techNameDark]}>{tech.name}</Text>
                <Text style={[styles.techDescription, dark && styles.techDescriptionDark]}>{tech.description}</Text>
              </View>
            </View>
          ))}

        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
  },
  titleDark: {
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginBottom: 30,
    textAlign: 'center',
  },
  descriptionDark: {
    color: '#bbb',
  },
  techCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  techCardDark: {
    backgroundColor: '#232323',
  },
  techInfo: {
    marginLeft: 15,
    flex: 1,
  },
  techName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#222',
  },
  techNameDark: {
    color: '#fff',
  },
  techDescription: {
    fontSize: 14,
    color: '#666',
  },
  techDescriptionDark: {
    color: '#bbb',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  footerDark: {
    color: '#bbb',
  },
}); 