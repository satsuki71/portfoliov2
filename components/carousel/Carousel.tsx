'use client';
import Image from 'next/image';
import styles from './Carousel.module.css';

const logos = [
  { src: '/javascript-svgrepo-com.svg', alt: 'JavaScript' },
  {
    src: '/react-javascript-js-framework-facebook-svgrepo-com.svg',
    alt: 'React',
  },
  { src: '/redux-logo-svgrepo-com.svg', alt: 'Redux' },
  { src: '/typescript-official-svgrepo-com.svg', alt: 'TypeScript' },
  { src: '/flutter-svgrepo-com.svg', alt: 'Flutter' },
  { src: '/next-dot-js-svgrepo-com.svg', alt: 'Next.js' },
  { src: '/node-js-svgrepo-com.svg', alt: 'Node.js' },
  { src: '/tailwind-svgrepo-com.svg', alt: 'Tailwind' },
  { src: '/bootstrap-svgrepo-com.svg', alt: 'Bootstrap' },
];

export default function Carousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {logos.map((logo, i) => (
          <div className={styles.logoItem} key={i}>
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
