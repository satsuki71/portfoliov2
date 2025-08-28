import { GiPositionMarker } from "react-icons/gi";

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

      return (
        <div id="experiences">
            {careerPath.map((item, index) => (
                <details key={index}>
                    <summary>{item.cardTitle} {item.title}</summary>
                    <p><GiPositionMarker /> {item.cardSubtitle} {item.cardDetailedText}</p>

                </details>
            ))}
        </div>
      )
}