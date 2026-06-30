export type BlogCategory = {
  id: string;
  title: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: 'blog-dicas',
    title: 'Dicas da nutri',
    description:
      'Conteudos praticos para te ajudar na rotina alimentar, escolhas mais inteligentes e uma relacao mais leve com a comida.',
  },
  {
    id: 'blog-receitas',
    title: 'Receitas',
    description:
      'Receitas nutritivas, saborosas e faceis de preparar para o seu dia a dia sem radicalismos.',
  },
]
