import React, { useContext } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from '../_layout';

export default function ExperienciaProfissionalScreen() {
  const { dark } = useContext(ThemeContext);
  const experiences = [
    {
      role: 'Desenvolvedor Mobile Senior',
      company: 'Tech Solutions Inc.',
      period: '2022 - Presente',
      description: 'Desenvolvimento de aplicativos mobile usando React Native e Expo. Liderança de equipe e arquitetura de software.',
      achievements: [
        'Implementação de arquitetura limpa em 3 projetos',
        'Redução de 40% no tempo de desenvolvimento',
        'Mentoria de 5 desenvolvedores júnior',
      ],
    },
    {
      role: 'Desenvolvedor Full Stack',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Desenvolvimento de aplicações web e mobile usando React, Node.js e React Native.',
      achievements: [
        'Desenvolvimento de 5 aplicativos mobile',
        'Implementação de CI/CD',
        'Otimização de performance em 3 projetos',
      ],
    },
  ];

  return (
    <SafeAreaView style={[styles.container, dark && styles.containerDark]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={[styles.title, dark && styles.titleDark]}>Experiência Profissional</Text>
          {experiences.map((exp, index) => (
            <View key={index} style={[styles.experienceCard, dark && styles.experienceCardDark]}>
              <View style={styles.timeline}>
                <FontAwesome name="briefcase" size={24} color={dark ? '#4da3ff' : '#007AFF'} />
                <View style={[styles.timelineLine, dark && styles.timelineLineDark]} />
              </View>
              <View style={styles.experienceInfo}>
                <Text style={[styles.role, dark && styles.roleDark]}>{exp.role}</Text>
                <Text style={[styles.company, dark && styles.companyDark]}>{exp.company}</Text>
                <Text style={[styles.period, dark && styles.periodDark]}>{exp.period}</Text>
                <Text style={[styles.description, dark && styles.descriptionDark]}>{exp.description}</Text>
                <View style={styles.achievements}>
                  <Text style={[styles.achievementsTitle, dark && styles.achievementsTitleDark]}>Principais Conquistas:</Text>
                  {exp.achievements.map((achievement, idx) => (
                    <View key={idx} style={styles.achievementItem}>
                      <FontAwesome name="check-circle" size={16} color="#28a745" />
                      <Text style={[styles.achievementText, dark && styles.achievementTextDark]}>{achievement}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ))}
          <Text style={[styles.illustrativeNote, dark && styles.illustrativeNoteDark]}>
            * As experiências profissionais acima são meramente ilustrativas. Ainda estou buscando oportunidades de trabalho.
          </Text>
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
  experienceCard: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 10,
  },
  experienceCardDark: {
    backgroundColor: '#232323',
  },
  timeline: {
    alignItems: 'center',
    marginRight: 15,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#007AFF',
    marginVertical: 10,
  },
  timelineLineDark: {
    backgroundColor: '#4da3ff',
  },
  experienceInfo: {
    flex: 1,
  },
  role: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#222',
  },
  roleDark: {
    color: '#fff',
  },
  company: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 5,
  },
  companyDark: {
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
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
    marginBottom: 10,
  },
  descriptionDark: {
    color: '#bbb',
  },
  achievements: {
    marginTop: 10,
  },
  achievementsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  achievementsTitleDark: {
    color: '#fff',
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  achievementText: {
    fontSize: 14,
    color: '#444',
    marginLeft: 8,
  },
  achievementTextDark: {
    color: '#bbb',
  },
  illustrativeNote: {
    marginTop: 30,
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  illustrativeNoteDark: {
    color: '#bbb',
  },
}); 