import React, { useContext } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from '../_layout';

const projects = [
  {
    title: 'Bulls And Cows',
    description: 'Jogo de lógica onde você deve adivinhar uma senha de 4 dígitos. Cada tentativa recebe dicas de "bulls" e "cows" para ajudar a encontrar a resposta.',
    image: require('../../assets/Imagem2.png'),
    github: 'https://github.com/vini-mgan/web-mobile-2025.1',
    demo: 'https://mylandingpage-eta.vercel.app/pages/bulls-and-cows.html',
    technologies: ['React', 'CSS', 'JavaScript'],
  },
  {
    title: 'Portfólio Web',
    description: 'Meu portfólio web com projetos, experiências e contato.',
    image: require('../../assets/Imagem3.png'),
    github: 'https://github.com/vini-mgan/web-mobile-2025.1',
    demo: 'https://mylandingpage-eta.vercel.app/index.html',
    technologies: ['React', 'CSS', 'JavaScript'],
  },
  {
    title: 'Labyrinth of Leaves',
    description: 'Jogo em Java onde o objetivo é guiar o personagem Greg por um labirinto, coletando chaves e evitando perigos. Projeto acadêmico da UNICAP.',
    image: require('../../assets/Imagem4.gif'),
    github: 'https://github.com/Roberto20deluxe/Labirinto_OOP_2024.1',
    demo: '',
    technologies: ['Java', 'OOP'],
  },
  {
    title: 'FlavourIt',
    description: 'Aplicação para buscar receitas a partir dos ingredientes que você tem em casa. Projeto colaborativo com foco em sustentabilidade.',
    image: require('../../assets/Imagem5.png'),
    github: 'https://github.com/Dhu-a/FlavourIt',
    demo: '',
    technologies: ['Python', 'Django', 'Web'],
  },
  {
    title: 'Protótipo BeeBlioteca',
    description: 'Protótipo de aplicativo para gerenciamento de leitura que te acompanha antes, durante e depois da leitura..',
    image: require('../../assets/Imagem8.png'),
    github: '',
    demo: 'https://www.figma.com/proto/3jQVFXLb5AicrjZ07zpQ7m/Design-Projeto?node-id=1-2&starting-point-node-id=1%3A2&t=rMP8aSJovn0jdxVP-17',
    technologies: ['Figma', 'UI/UX'],
  },
];

export default function ProjetosScreen() {
  const { dark } = useContext(ThemeContext);
  const openLink = (url: string) => {
    if (url) Linking.openURL(url);
  };

  return (
    <SafeAreaView style={[styles.container, dark && styles.containerDark]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={[styles.title, dark && styles.titleDark]}>Projetos</Text>
          {projects.map((project, index) => (
            <View key={index} style={[styles.projectCard, dark && styles.projectCardDark]}>
              <Image
                source={project.image}
                style={styles.projectImage}
                resizeMode="cover"
              />
              <View style={styles.projectInfo}>
                <Text style={[styles.projectTitle, dark && styles.projectTitleDark]}>{project.title}</Text>
                <Text style={[styles.projectDescription, dark && styles.projectDescriptionDark]}>{project.description}</Text>
                <View style={styles.technologies}>
                  {project.technologies.map((tech, idx) => (
                    <View key={idx} style={[styles.techTag, dark && styles.techTagDark]}>
                      <Text style={[styles.techText, dark && styles.techTextDark]}>{tech}</Text>
                    </View>
                  ))}
                </View>
                <View style={styles.links}>
                  {project.github ? (
                    <TouchableOpacity
                      style={styles.linkButton}
                      onPress={() => openLink(project.github)}
                    >
                      <FontAwesome name="github" size={20} color="#fff" />
                      <Text style={styles.linkText}>Github</Text>
                    </TouchableOpacity>
                  ) : null}
                  {project.demo ? (
                    <TouchableOpacity
                      style={[styles.linkButton, styles.demoButton]}
                      onPress={() => openLink(project.demo)}
                    >
                      <FontAwesome name="play" size={20} color="#fff" />
                      <Text style={styles.linkText}>Demo</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
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
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  projectCardDark: {
    backgroundColor: '#232323',
  },
  projectImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  projectInfo: {
    padding: 15,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  projectTitleDark: {
    color: '#fff',
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  projectDescriptionDark: {
    color: '#bbb',
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  techTag: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  techTagDark: {
    backgroundColor: '#4da3ff',
  },
  techText: {
    color: '#fff',
    fontSize: 12,
  },
  techTextDark: {
    color: '#222',
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
  },
  demoButton: {
    backgroundColor: '#28a745',
    marginRight: 0,
  },
  linkText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
  },
}); 