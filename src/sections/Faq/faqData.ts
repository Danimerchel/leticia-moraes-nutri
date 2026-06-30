export type FaqItem = {
    question: string;
    answer: string;
};

export const faqItems: FaqItem[] = [
    {
        question: 'Quanto tempo dura a consulta?',
        answer:
            'A consulta tem duração média de 1 hora, permitindo uma avaliação completa e individualizada.'
    },
    {
        question: 'É realizada avaliação física no atendimento online?',
        answer:
            'Sim. Durante o atendimento online, solicito fotos e algumas medidas corporais para auxiliar na avaliação e no acompanhamento da evolução.'
    },
    {
        question: 'Como funciona o acompanhamento via WhatsApp?',
        answer:
            'Após a consulta, você conta com suporte via WhatsApp durante o período de adaptação para esclarecer dúvidas, receber orientações e realizar ajustes quando necessário.'
    },
    {
        question: 'Quantas consultas são necessárias para alcançar resultados?',
        answer:
            'Os resultados variam de pessoa para pessoa, mas já na primeira consulta você recebe orientações e um plano personalizado para iniciar sua mudança de hábitos.'
    },
    {
        question: 'Você atende por plano de saúde?',
        answer:
            'Atualmente os atendimentos são realizados apenas de forma particular.'
    },
    {
        question: 'Como funciona a consulta online?',
        answer:
            'A consulta é realizada por videochamada em horário agendado, proporcionando um atendimento personalizado e completo, com a mesma atenção e cuidado de uma consulta presencial.'
    }
];
