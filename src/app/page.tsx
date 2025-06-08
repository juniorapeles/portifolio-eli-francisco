

import About from './components/about/About'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import styles from '../styles/Home.module.scss'
export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="projetos">
          <Projects title="API Financeira" description="Projeto de uma API financeira utilizando Java 17 e Spring" />
        </section>
        
        <section id="sobre">
          <About />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}