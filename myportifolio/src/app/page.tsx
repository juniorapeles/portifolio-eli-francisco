import Image from "next/image";
import { Header } from "./components/header/header";

export default function Home() {
  return (
    <main>
      <Header/>
        <div className="experience">
          <h3>Experience</h3>
          <p>texto</p>
          <div className="experience-time">
          </div>
          <div className="infos">
            <h3>Languages</h3>
            <div className="languages-info">
              <span>En - basic</span>
              <span>PT-BR - Native Speaker</span>
            </div>
            <h3>Education</h3>
            <div className="educational-info">
              <p>Im Studying in Estacio de Sá, Análise e desenvolvimento de sistemas</p>
            </div>
          </div>
          <div className="buttons">
            <div className="social"></div>
            <button>contact me</button>
          </div>
        </div>
    </main>
  );
}
