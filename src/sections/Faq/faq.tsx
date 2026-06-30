/// <reference types="react" />
import { useState } from 'react';
import styles from './faq.module.scss';
import type { FaqItem } from './faqData';

type FaqProps = {
	items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
	const [openIndex, setOpenIndex] = useState(-1);

	function handleToggle(index: number) {
		setOpenIndex((current) => (current === index ? -1 : index));
	}

	return (
		<section id="duvidas" className={styles.faqSection}>
			<div className={styles.inner}>
				<p className={styles.kicker}>DÚVIDAS FREQUENTES</p>
				<h2 className={styles.title}>FAQ</h2>
				<p className={styles.subtitle}>
					Aqui você encontra respostas para
					<br />
					as dúvidas mais comuns sobre o meu atendimento.
				</p>

				<div className={`${styles.accordion} ${openIndex !== -1 ? styles.hasOpen : ''}`}>
					{items.map((item, index) => {
						const isOpen = openIndex === index;
						const panelId = `faq-panel-${index}`;
						const buttonId = `faq-button-${index}`;

						return (
							<article key={item.question} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
								<button
									id={buttonId}
									type="button"
									className={styles.trigger}
									aria-expanded={isOpen}
									aria-controls={panelId}
									onClick={() => handleToggle(index)}
								>
									<span className={styles.question}>{item.question}</span>
									<span className={styles.chevron} aria-hidden="true" />
								</button>

								{isOpen && (
									<div
										id={panelId}
										role="region"
										aria-labelledby={buttonId}
										className={styles.panel}
									>
										<p>{item.answer}</p>
									</div>
								)}
							</article>
						);
					})}
				</div>

				<aside className={styles.contactCard}>
					<div>
						<h3>Ainda tem dúvidas?</h3>
						<p>Estou aqui para te ajudar!</p>
					</div>

					<a href="#contato" className={styles.contactButton}>
						FALAR COMIGO <span aria-hidden="true">&rarr;</span>
					</a>
				</aside>
			</div>
		</section>
	);
}
