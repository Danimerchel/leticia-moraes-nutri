/// <reference types="react" />
import './About.css'

export function About() {
    return (
        <section className="about" id="sobre">
            <div className="about-content">
                <div className="about-text">
                    <p className="about-intro">Prazer, eu sou</p>
                    <h2 className="about-title">Letícia Moraes</h2>
                    <p className="about-role">Nutricionista</p>
                    <h3 className="about-description">
                        Nutrição não precisa ser punição.
                    </h3>
                    <p className="about-text">
                        Eu sempre gostei de cuidar do corpo, porém, minhas escolhas nem sempre me levavam a ter uma saúde perfeita que me trouxeram consequências.
                    </p>
                    <h3 className="about-description">
                        Hoje, acredito em equilibrio e liberdade.
                    </h3>
                    <p className="about-text">
                        Eu até me alimentava bem mas a rotina de trabalhar com eventos, frequentar festas, bebidas em exagero e noites mal dormidas me trouxeram consequências.
                    </p>
                    <h3 className="about-description">
                        Transformação verdadeira vem de dentro.
                    </h3>
                    <p className="about-text">
                        Estava sempre engordando e emagrecendo, engordava com esses péssimos hábitos e emagrecia com dietas restritivas. Eu não encontrava um equilíbrio para o meu corpo e nem para a minha mente.
                    </p>
                    <h3 className="about-description">
                        Meu propósito é te ajudar a encontrar o seu.
                    </h3>
                    <p className="about-text">
                        A gente não consegue cuidar do corpo sem cuidar da mente, toda aquela rotina era, na verdade, uma válvula de escape!
                    </p>
                    <h3 className="about-description-finale">
                        Hoje eu escolho por uma vida leve e saudável que reflete no meu bem-estar.
                    </h3>
                    <p className="about-text-finale">
                        E você, suas escolhas estão te levando para aonde você quer chegar? Para a saúde que você quer ter? Ou quem você quer se tornar?
                    </p>

                    <a href="#" className="about-button">
                        Agende sua consulta
                    </a>
                </div>

                <div className="about-image">
                    <img src="/about.jpeg" alt="Nutricionista Letícia Moraes sentada no consultório" />
                </div>
            </div>
        </section>
    )
}
