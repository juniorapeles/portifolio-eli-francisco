

import About from './components/about/About'
import Header from './components/header/header'
import Footer from './components/FooterTemp/Footer'
import Hero from './components/hero/Hero'
import Projects from './components/Projects/Projects'
import styles from '../styles/Home.module.scss'
import Contact from './components/contact/Contact'
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