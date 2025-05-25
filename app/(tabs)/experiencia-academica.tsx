import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../_layout';

const education = [
  {
    degree: 'Ensino Médio',
    institution: 'Colégio Equipe Recife',
    period: '2019 - 2021',
    description: '',
    logo: require('../../assets/Imagem7.jpg'),
  },
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'Universidade Católica de Pernambuco',
    period: '2023 - atual',
    description: '',
    logo: require('../../assets/Imagem6.jpg'),
  },
];

export default function ExperienciaAcademicaScreen() {
  const { dark } = useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.container, dark && styles.containerDark]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={[styles.title, dark && styles.titleDark]}>Experiência Acadêmica</Text>
          {education.map((edu, index) => (
            <View key={index} style={[styles.educationCard, dark && styles.educationCardDark]}>
              <Image source={edu.logo} style={styles.logo} />
              <View style={styles.educationInfo}>
                <Text style={[styles.degree, dark && styles.degreeDark]}>{edu.degree}</Text>
                <Text style={[styles.institution, dark && styles.institutionDark]}>{edu.institution}</Text>
                <Text style={[styles.period, dark && styles.periodDark]}>{edu.period}</Text>
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
    marginBottom: 30,
    textAlign: 'center',
    color: '#222',
  },
  titleDark: {
    color: '#fff',
  },
  educationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  educationCardDark: {
    backgroundColor: '#232323',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: '#fff',
  },
  educationInfo: {
    flex: 1,
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#222',
  },
  degreeDark: {
    color: '#fff',
  },
  institution: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 5,
  },
  institutionDark: {
    color: '#4da3ff',
  },
  period: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  periodDark: {
    color: '#bbb',
  },
}); 