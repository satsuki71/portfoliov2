'use client';
import Image from 'next/image';
import styles from './Projects.module.scss';

export default function Projects() {
  const projects = [
    {
      title: 'Crypto Watcher',
      url: 'https://crypto-watcher-exam.netlify.app',
      tag: 'Examen',
      tech: [{ path: '/javascript-svgrepo-com.svg', alt: 'JavaScript logo' }],
      description:
        'Crypto Watcher est une application web développée dans le cadre d’un examen pratique. Elle permet de suivre en temps réel l’évolution des principales cryptomonnaies grâce à l’intégration d’une API externe.',
    },
    {
      title: 'Crisis OS',
      url: 'https://crisis-os.netlify.app',
      tag: 'Examen',
      tech: [
        {
          path: '/typescript-official-svgrepo-com.svg',
          alt: 'TypeScript logo',
        },
        {
          path: '/react-javascript-js-framework-facebook-svgrepo-com.svg',
          alt: 'React logo',
        },
      ],
      description:
        'Crisis OS est une application développée dans le cadre d’un examen qui permet de suivre en temps réel l’état sanitaire ou critique de différentes villes. Grâce à une interface épurée et responsive, elle affiche les données essentielles comme la gravité de la situation, les actions recommandées, le tout via une API externe pour garantir la fiabilité des informations.',
    },
    {
      title: 'Loopstudio',
      url: 'https://loopstudio-exam.netlify.app',
      tag: 'Examen',
      tech: [
        { path: '/html-5-svgrepo-com.svg', alt: 'HTML logo' },
        { path: '/css-3-svgrepo-com.svg', alt: 'CSS logo' },
      ],
      description:
        'Loopstudio est une landing page réalisée dans le cadre d’un examen et d’un challenge Frontend Mentor. Le but : reproduire un design fourni aussi fidèlement que possible avec HTML, CSS, tout en assurant un rendu responsive sur différents appareils.',
    },
    {
      title: 'Convertisseur de devises',
      url: 'https://currency-converter-exo.netlify.app',
      tag: 'Exercice',
      tech: [
        {
          path: '/typescript-official-svgrepo-com.svg',
          alt: 'TypeScript logo',
        },
        {
          path: '/react-javascript-js-framework-facebook-svgrepo-com.svg',
          alt: 'React logo',
        },
      ],
      description:
        'Convertisseur de devises est une application web réalisée dans le cadre d’un exercice afin de pratiquer React. Elle permet de convertir des montants entre différentes monnaies grâce à une API externe, avec une interface simple, claire et responsive.',
    },
    {
      title: 'To do List',
      url: 'https://todolist-exo.netlify.app',
      tag: 'Exercice',
      tech: [
        {
          path: '/typescript-official-svgrepo-com.svg',
          alt: 'TypeScript logo',
        },
        {
          path: '/react-javascript-js-framework-facebook-svgrepo-com.svg',
          alt: 'React logo',
        },
      ],
      description:
        'To-Do List est une application web réalisée dans le cadre d’un exercice de pratique de React. Elle permet de gérer une liste de tâches : ajouter, supprimer, marquer comme terminée, le tout avec une interface réactive et responsive.',
    },
  ];

  return (
    <div id="projects" className={styles.projects}>
      <h2>Mes projets</h2>
      <ul className={styles.projectList}>
        {projects.map((item, index) => (
          <li className={styles.projectLi} key={index}>
            <h3>
              <a href={item.url} target="blank">
                {item.title}
              </a>
            </h3>
            <p></p>
            <p>{item.description}</p>
            <div>
              {item.tech.map((image, index) => (
                <Image
                  key={index}
                  src={image.path}
                  width={50}
                  height={50}
                  alt={image.alt}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
