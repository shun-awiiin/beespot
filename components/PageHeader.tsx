export default function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
    </div>
  )
} 