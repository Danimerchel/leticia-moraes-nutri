/// <reference types="react" />
import './Hero.css';

export function Hero() {
    return (
        <section className='hero'>
            <div className='hero-content'>
                <div className='hero-left'>
                    <p className='hero-role'>Nutricionista</p>
                    <h1 className='hero-name'>Leticia Moraes</h1>
                    <p className='hero-crn'>CRN 75848</p>
                </div>
                <div>
                    <h2 className='hero-right'>Alimentação sem restrições</h2>
                    <p className='hero-right-p'>
                        Aqui você terá um plano alimentar individualizado, realizado de acordo com suas necessidades específicas e focado em mudanças de hábitos.
                    </p>
                    <p className='hero-highlight'>Nutrição é cuidado, não punição.</p>
                </div>
            </div>
            <div className='hero-button-container'>
                <button className='hero-button'>Agendar consulta</button>
            </div>
        </section>
    );
}
