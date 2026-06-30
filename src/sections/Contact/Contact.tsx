/// <reference types="react" />
import styles from './Contact.module.scss'
import {
    FiArrowRight,
    FiClock,
    FiLock,
    FiMapPin,
    FiMessageCircle,
    FiCalendar,
    FiMail,
} from 'react-icons/fi'

export function Contact() {
    return (
        <section id="contato" className={styles.contactSection}>
            <div className={styles.heroPanel}>

                <div className={styles.heroImage}>
                    <img src="/contact.jpeg" />
                </div>

                <div className={styles.heroContent}>
                    <p className={styles.kicker}>ENTRE EM CONTATO</p>
                    <h2>Vamos cuidar da sua saúde juntos?</h2>
                    <p className={styles.heroText}>
                        Estou aqui para te ouvir, entender suas necessidades e te ajudar a conquistar seus objetivos com
                        equilibrio e bem-estar.
                    </p>
                </div>
            </div>

            <div className={styles.contactCard}>
                <aside className={styles.contactInfo}>
                    <h3>Fale comigo</h3>

                    <div className={styles.infoItem}>
                        <span className={styles.iconWrap}>
                            <FiMessageCircle />
                        </span>
                        <div>
                            <strong>WhatsApp</strong>
                            <p>(11) 99999-9999</p>
                            <small>Clique para conversar</small>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.iconWrap}>
                            <FiMail />
                        </span>
                        <div>
                            <strong>E-mail</strong>
                            <p>leticiamoraes.nutr@gmail.com</p>
                            <small>Envie sua mensagem</small>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.iconWrap}>
                            <FiMapPin />
                        </span>
                        <div>
                            <strong>Atendimento presencial</strong>
                            <p>Sao Paulo - SP</p>
                            <small>Rua Harmonia, 123 - Conj. 45, Vila Mariana</small>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.iconWrap}>
                            <FiClock />
                        </span>
                        <div>
                            <strong>Horarios de atendimento</strong>
                            <p>Segunda a Sexta: 8h as 18h</p>
                            <small>Sabado: 8h as 12h</small>
                        </div>
                    </div>

                    <div className={styles.noticeBox}>
                        Atendimento online para todo o Brasil e brasileiros que estao no exterior.
                    </div>
                </aside>

                <div className={styles.formContent}>
                    <h3>Envie sua mensagem</h3>

                    <form className={styles.formGrid}>
                        <label>
                            Nome
                            <input type="text" placeholder="Seu nome" />
                        </label>

                        <label>
                            E-mail
                            <input type="email" placeholder="Seu melhor e-mail" />
                        </label>

                        <label className={styles.fullWidth}>
                            WhatsApp
                            <input type="text" placeholder="(11) 99999-9999" />
                        </label>

                        <label className={styles.fullWidth}>
                            Assunto
                            <input type="text" placeholder="Qual o motivo do contato?" />
                        </label>

                        <label className={styles.fullWidth}>
                            Mensagem
                            <textarea rows={4} placeholder="Como posso te ajudar?" />
                        </label>

                        <button type="button" className={styles.sendButton}>
                            ENVIAR MENSAGEM <FiArrowRight />
                        </button>
                    </form>

                    <p className={styles.securityText}>
                        <FiLock /> Suas informacoes estao seguras e nao serao compartilhadas.
                    </p>
                </div>
            </div>

            <div className={styles.locationCard}>
                <div className={styles.locationInfo}>
                    <p className={styles.kicker}>ONDE ESTOU</p>
                    <h4>Atendimento presencial Sao Paulo - SP</h4>
                    <p>
                        Localizado em uma regiao de facil acesso, com estrutura acolhedora e pensada para o seu bem-estar.
                    </p>

                    <address>
                        Rua Harmonia, 123 - Conj. 45
                        <br />
                        Vila Mariana, Sao Paulo - SP
                        <br />
                        CEP: 04100-000
                    </address>

                    <a href="#" className={styles.routeButton}>
                        COMO CHEGAR <FiArrowRight />
                    </a>
                </div>

                <div className={styles.mapPreview}>
                    <div className={styles.mapPinCard}>
                        <FiMapPin />
                        <div>
                            <strong>Leticia Moraes Nutricionista</strong>
                            <p>Atendimento presencial</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomCta}>
                <div className={styles.bottomLeft}>
                    <span className={styles.iconWrap}>
                        <FiCalendar />
                    </span>
                    <div>
                        <h5>Prefere agendar agora?</h5>
                        <p>Clique no botao ao lado e agende sua consulta de forma pratica.</p>
                    </div>
                </div>

                <a href="#" className={styles.bottomButton}>
                    <FiMessageCircle /> AGENDAR PELO WHATSAPP <FiArrowRight />
                </a>
            </div>
        </section>
    )
}