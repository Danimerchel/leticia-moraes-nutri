import styles from './footer.module.scss';
import {links, footerInstagram} from './footerData';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                {/* Coluna esquerda: logo e nome */}
                <div className={styles.brand}>
                    <img src="/logo.png" alt="Logo Letícia Moraes" className={styles.brandLogo} />
                    {/* <p className={styles.brandRole}>NUTRICIONISTA</p> */}
                </div>

                {/* Coluna do meio: navegação */}
                <nav className={styles.nav}>
                    <p className={styles.navTitle}>NAVEGAÇÃO</p>
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Coluna direita: instagram */}
                <div className={styles.instagram}>
                    <p className={styles.instagramTitle}>SIGA NO INSTAGRAM</p>
                    <p className={styles.instagramHandle}>{footerInstagram.handle}</p>
                    {footerInstagram.bio.map((line) => (
                        <p key={line} className={styles.instagramBio}>{line}</p>
                    ))}
                    <div className={styles.divider} />
                </div>

            </div>

            {/* Barra de copyright */}
            <div className={styles.copyright}>
                <p>© 2026 Letícia Moraes &nbsp;|&nbsp; Todos os direitos reservados &nbsp;|&nbsp; Desenvolvido por Daniela Camazano</p>
            </div>
        </footer>
    )
}