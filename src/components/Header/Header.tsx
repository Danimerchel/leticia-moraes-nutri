/// <reference types="react" />
import styles from './header.module.scss';
import React, { useState } from 'react';

type Link = { 
  label: string; 
  href: string; 
  children?: Array<{
    label: string;
    href: string;
  }>;
}

type HeaderProps = { 
  title: string; 
  links: Link[]; 
}

export function Header({ title, links }: HeaderProps) {

  const [temaEscuro, setTemaEscuro] = useState(false);
  const [openMenuHref, setOpenMenuHref] = useState<string | null>(null);
  const alternarTema = () => setTemaEscuro(!temaEscuro);

  function handleParentClick(linkHref: string) {
    setOpenMenuHref((current) => (current === linkHref ? null : linkHref));
  }

  return (
    
    <header className={temaEscuro ? styles.headerEscuro : styles.header}>
      <div id="headerContent" className={styles.headerContent}>
        {/* <button onClick={alternarTema} className={styles.themeButton}>
          {temaEscuro ? 'Tema Claro' : 'Tema Escuro'}
        </button> */}
        <img src="/logo.png" alt="Logo Letícia Moraes Nutricionista" className={styles.headerLogo} />
        <nav id="headerNav" className={styles.headerNav}>
          {links.map((link) => (
            <div
              key={link.href}
              className={`${styles.navItem} ${link.children && link.children.length > 0 ? styles.navItemHasDropdown : ''} ${openMenuHref === link.href ? styles.navItemOpen : ''}`}
            >
              {link.children && link.children.length > 0 ? (
                <button
                  type="button"
                  className={styles.navDropdownToggle}
                  aria-expanded={openMenuHref === link.href}
                  aria-controls={`submenu-${link.label.toLowerCase()}`}
                  onClick={() => handleParentClick(link.href)}
                >
                  {link.label}
                  <span
                    className={`${styles.dropdownArrow} ${openMenuHref === link.href ? styles.dropdownArrowOpen : ''}`}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <a className={styles.navLink} href={link.href}>
                  {link.label}
                </a>
              )}

              {link.children && link.children.length > 0 && (
                <div
                  id={`submenu-${link.label.toLowerCase()}`}
                  className={`${styles.dropdownMenu} ${openMenuHref === link.href ? styles.dropdownMenuOpen : ''}`}
                >
                  {link.children.map((childLink) => (
                    <a
                      key={childLink.href}
                      className={styles.dropdownItem}
                      href={childLink.href}
                      onClick={() => setOpenMenuHref(null)}
                    >
                      {childLink.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <a className={styles.headerButton} href="#">
          AGENDAR CONSULTA <span>&rarr;</span>
        </a>
      </div>
    </header>
  )
}
