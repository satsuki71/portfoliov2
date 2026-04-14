import Carousel from '@/components/carousel/Carousel';
import './page.module.css';
import './globals.css'
import Experiences from '@/components/experiences/Experiences';
import Projects from '@/components/projects/Projects';
import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Image
          src="/background.jpg"
          alt="Code informatique"
          fill
          priority
          className={styles.bgImage}
        />

        <div className={styles.overlay}>
          <h1>Développeur Web</h1>
          <h2>
            Passionnée par le web, je transforme des idées en sites interactifs
          </h2>
        </div>
      </section>
        <Carousel />
        <Projects />
        <Experiences />
    </main>
  );
}
