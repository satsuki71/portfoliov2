import Carousel from '@/components/carousel/Carousel';
import './page.module.css'
import Experiences from '@/components/experiences/Experiences';

export default function Home() {
  return (
    <main>
      <div id="hero_section">
        <h1>Developpeur Web</h1>
        <h2>
          Passionnée par le web, je transforme des idées en sites intéractifs
        </h2>

        <div id="skills">
            <Carousel/>
        </div>

        <div id="my-projects">
            
        </div>

        <div id="profesionnal-experiences">
            <Experiences/>
        </div>
      </div>
    </main>
  );
}
