const projetos = [
  {
    nome: 'Controle Bancário',
    link: 'https://github.com/LucasUlissesArruda/Controle-Bancario',
    desc: 'Aplicativo em C para controle de contas e transações.'
  },
  {
    nome: 'API Locação de Carros',
    link: 'https://github.com/LucasUlissesArruda/API-Locacao-de-Carros',
    desc: 'API em Java com banco de dados MySQL para gerenciar locações.'
  },
  {
    nome: 'Santo BPO',
    link: 'https://github.com/LucasUlissesArruda/Santo-BPO',
    desc: 'Landing page para empresa de terceirização financeira.'
  },
  {
    nome: 'Projeto Integrador',
    link: 'https://github.com/LucasUlissesArruda/Projeto-Integrador',
    desc: 'Sistema integrador com foco em gestão de processos.'
  },
  {
    nome: 'Projeto Trindade',
    link: 'https://github.com/LucasUlissesArruda/Projeto-Trindade',
    desc: 'Site para corretora de imóveis com painel de administração.'
  },
  {
    nome: 'Drop Pace',
    link: 'https://github.com/LucasUlissesArruda/Drop-Pace',
    desc: 'Sistema de vendas com integração Java e PHP.'
  },
]

export default function Projetos() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center my-6">Projetos</h2>
      <div className="grid gap-6">
        {projetos.map((p, i) => (
          <div key={i} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{p.nome}</h3>
            <p className="text-gray-600 mb-2">{p.desc}</p>
            <a href={p.link} className="text-blue-500 underline" target="_blank">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  )
}
