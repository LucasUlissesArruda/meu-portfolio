export default function Home() {
  return (
    <section className="text-center mt-10">
      <img src="/profile.jpg" alt="Foto de Lucas" className="rounded-full w-32 mx-auto mb-4" />
      <h2 className="text-2xl font-bold">Lucas Ulisses</h2>
      <p className="text-gray-600">Desenvolvedor Full Stack em formação</p>
      <div className="mt-4 space-x-4">
        <a href="https://github.com/LucasUlissesArruda" className="text-blue-500 underline">GitHub</a>
        <a href="https://linkedin.com/in/seu-perfil" className="text-blue-500 underline">LinkedIn</a>
      </div>
    </section>
  )
}
