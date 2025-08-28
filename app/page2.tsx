'use client';

import { FaArrowCircleDown } from 'react-icons/fa';
import { Chrono } from 'react-chrono';

export default function Home() {
  const careerPath = [
    {
      title: 'mai 2025 - maintenant',
      cardTitle: 'Titre Professionnel Développeur Web et Web Mobile',
      cardSubtitle: 'IRFA BFC',
      cardDetailedText: 'Le Creusot',
      job: false,
      tag: 'Formation',
    },
    {
      title: 'mars 2025',
      cardTitle:
        'DAQ à coloration numérique - Formation 2 semaines HTML, CSS, Javascript',
      cardSubtitle: 'IRFA BFC',
      cardDetailedText: 'Chalon-sur-Saône',
      job: false,
      tag: 'Formation',
    },
    {
      title: 'mai 2021 - septembre 2024',
      cardTitle: 'Vendeuse Aide Comptable',
      cardSubtitle: 'La Halle au Sommeil',
      cardDetailedText: 'Chalon-sur-Saône',
      job: true,
      tag: 'Emploi',
    },
    {
      title: 'décembre 2017 - juin 2021',
      cardTitle: 'Assistante de Caisse - CDI Etudiant',
      cardSubtitle: 'Carrefour Chalon Sud',
      cardDetailedText: 'Chalon-sur-Saône',
      job: true,
      tag: 'Emploi',
    },
    {
      title: 'septembre 2017 - août 2020',
      cardTitle: 'Préparation du Diplome de Comptabilité et de Gestion',
      cardSubtitle: 'Lycée Mathias',
      cardDetailedText: 'Chalon-sur-Saône',
      job: false,
      tag: 'Formation',
    },
  ];

  return (
    <main>
      <h1>
        Passionnée par le web, je transforme des idées en sites intéractifs
      </h1>
      <h3>Envie d&apos;en savoir plus ?</h3>
      <FaArrowCircleDown />

      <h3>Qui suis-je ?</h3>
      <p>
        Je m&apos;appelle Aurore LABORDERIE et je me forme au développement Web et
        Web mobile. Ce qui a commencé comme un projet pour le site de mon
        ancienne entreprise est devenu une véritable passion. Je crée
        aujourd’hui des expériences web modernes et interactives pour progresser
        dans mon futur métier.
      </p>

      <h3>Mon parcours</h3>
      <div style={{ width: '90%' }}>
        <Chrono
          items={careerPath}
          mode="VERTICAL_ALTERNATING"
          cardHeight={100}
          cardWidth={400}
          disableToolbar={true}
        />
      </div>
    </main>
  );
}
