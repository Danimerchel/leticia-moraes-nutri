/// <reference types="react" />
import styles from './Hero.module.scss';

type HeroLeftSection = {
  role: string;
  name: string;
  crn: string;
}

type HeroRightSection = {
    text: string;
    title: string;
    highlight: string;
}

interface HeroProps {
  leftSection: HeroLeftSection;
  rightSection: HeroRightSection;
  buttonText: string;
};

export function Hero({ leftSection, rightSection, buttonText }: HeroProps) {
    const { role, name, crn } = leftSection;
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroLeft}>
          <p className={styles.heroRole}>{role}</p>
          <h1 className={styles.heroName}>{name}</h1>
          <p className={styles.heroCrn}>{crn}</p>
                </div>
                <div className={styles.heroRight}>
                    <h2 className={styles.heroRightTitle}>{rightSection.title}</h2>
                    <p className={styles.heroRightText}>
                        {rightSection.text}
                    </p>
                    <p className={styles.heroHighlight}>{rightSection.highlight}</p>
                </div>
            </div>
            <div className={styles.heroButtonContainer}>
                <button className={styles.heroButton}>{buttonText} <span style={{fontWeight: 400, fontSize: '1.2em'}}>&rarr;</span></button>
            </div>
        </section>
    );
}
