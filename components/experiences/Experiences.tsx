"use client";
import { GiPositionMarker } from "react-icons/gi";
import styles from './Experiences.module.scss'

export default function Experiences() {
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

      let boolean = false

      const HandleClick = () => {
        if(boolean) {
          boolean = true
        } else {
          boolean = false
        }
      }

      return (
        <div id="experiences" className={styles.experiences}>
          <h2>Mon parcours</h2>
            {careerPath.map((item, index) => (
                <details key={index}>
                    <summary onClick={HandleClick}>{item.cardTitle} {item.title} <strong></strong></summary>
                    <p><GiPositionMarker /> {item.cardSubtitle} {item.cardDetailedText}</p>
                </details>
            ))}
        </div>
      )
}