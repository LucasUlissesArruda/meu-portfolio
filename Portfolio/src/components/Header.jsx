import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Meu Portifolio</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  )
}
