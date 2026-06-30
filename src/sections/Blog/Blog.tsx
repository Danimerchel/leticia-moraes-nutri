/// <reference types="react" />
import styles from './Blog.module.scss'
import { blogCategories } from './blogData'

export function Blog() {
  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.inner}>
        <p className={styles.kicker}>BLOG</p>
        <h2 className={styles.title}>Conteudos para te acompanhar</h2>

        <div className={styles.grid}>
          {blogCategories.map((category) => (
            <article id={category.id} key={category.id} className={styles.card}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <a href="#contato" className={styles.readMore}>
                Quero saber mais <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
