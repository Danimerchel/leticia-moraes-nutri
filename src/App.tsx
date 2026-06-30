/// <reference types="react" />
import { Hero } from './sections/Hero/Hero'
import { Header } from './components/Header/header'
import { About } from "./sections/About/About"
import { aboutSections } from './sections/About/aboutData'
import { links } from './components/Header/linksData'
import { Faq, faqItems } from './sections/Faq'
import { Specializations } from './sections/Specializations'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer/footer'
import { Blog } from './sections/Blog'

function App() {
  return (
    <div>
      <Header title="Letícia Moraes Nutricionista" links={links} />
      <Hero
        leftSection={{
          role: "Nutricionista",
          name: "Leticia Moraes",
          crn: "CRN 75848"
        }}
        rightSection={{
          title: "Alimentação\nsem restrições",
          text: "Aqui você terá um plano alimentar individualizado, realizado de acordo com suas necessidades específicas e focado em mudanças de hábitos.",
          highlight: "Nutrição é cuidado, não punição."
        }}
        buttonText="AGENDAR CONSULTA"
      />
      <Specializations />
      <About
        intro="Prazer, eu sou"
        name="Leticia Moraes"
        role="Nutricionista"
        sections={aboutSections}
      />
      <Faq items={faqItems} />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
