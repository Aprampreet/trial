import Form from 'next/form'

export default function SearchForm({query}:{query?:string}) {
  return (
    <Form
      action="/search"
      className="flex w-full max-w-lg items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/20"
    >
      <input
        name="query"
        placeholder="Search for Belog..."
        className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder-gray-300"
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-all"
      >
        Search
      </button>
    </Form>
  )
}
