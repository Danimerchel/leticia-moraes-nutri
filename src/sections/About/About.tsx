/// <reference types="react" />
import styles from './About.module.scss'

type AboutSection = {
  title: string;
  text: string;
  icon?: string;
  iconAfter?: string;
};

type AboutProps = {
  intro: string;
  name: string;
  role: string;
  sections: AboutSection[];
};

export function About({ intro, name, role, sections }: AboutProps) {
  return (
    <section className={styles.about} id="sobre">
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p className={styles.aboutIntro}>{intro}</p>
          <h2 className={styles.aboutTitle}>{name}</h2>
          <p className={styles.aboutRole}>{role} <span className={styles.underline}></span></p>
          {sections.map((section, idx) => {
            const isLast = idx === sections.length - 1;
            return (
              <div key={idx}>
                <h3 className={isLast ? styles.aboutDescriptionFinale : styles.aboutDescription}>
                  {section.icon && (
                    <img src={section.icon} alt="" className={styles.icon} />
                  )}
                  {section.title}
                </h3>
                <p className={isLast ? styles.aboutTextFinale : styles.aboutText}>
                  {section.text}
                  {section.iconAfter && (
                    <img src={section.iconAfter} alt="" className={styles.iconAfter} />
                  )}
                </p>
              </div>
            );
          })}
          <a href="#" className={styles.aboutButton}>
            AGENDE SUA CONSULTA <span>&rarr;</span>
          </a>
        </div>
        <div className={styles.aboutImage}>
          <img src="/about.jpeg" alt={`Nutricionista ${name} sentada no consultório`} />
        </div>
      </div>
    </section>
  );
}