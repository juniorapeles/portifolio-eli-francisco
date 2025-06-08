

import About from './components/About/About'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import styles from '../styles/Home.module.scss'
import Contact from './components/Contact/Contact'
export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
      <section id="projetos" className={styles.container}>
        <Projects 
          title="House of Books" 
          description="Sistema completo para gerenciamento de livros e editoras, construído com Java 11, Spring Boot e PostgreSQL. Inclui autenticação, CRUD completo, boas práticas RESTful e testes com Insomnia." 
          codeLink="https://github.com/juniorapeles/House-Of-Books"
          projectLink="https://house-of-books.juniorapeles.xyz/"
        />
      </section>
        
        <section id="sobre">
          <About />
        </section>

        <section id="contato">
          <Contact/>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}