/// <reference types="react" />
import styles from './Specializations.module.scss'
import { specializationsData } from './specializationsData'

export function Specializations() {
  return (
    <section className={styles.specializationsSection} id="especializacoes">
      <div className={styles.container}>
        <div className={styles.grid}>
          {specializationsData.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <img src={item.logo} alt={item.institution} className={styles.logo} />
              <span className={styles.logoDivider} aria-hidden="true" />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
