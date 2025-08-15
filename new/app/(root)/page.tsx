import SearchForm from "../../components/SearchForm";
import BlogCard from "@/components/BlogCard";

export default function Home({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || "";

  const posts = [
  {
    _createdAt: "yesterday",
    views: 55,
    author: { _id: 1,author:'mithu' },
    description: "hello hi i am working on next js",
    category: "robotics",
    title: "we humans",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=500&q=80",
  },
];


  return (
    <>
      <section className="relative pattern bg-black text-white py-20 overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-[160px]"></div>
          <div className="absolute bottom-10 right-1/3 w-[500px] h-[500px] bg-gradient-to-tl from-pink-500/20 via-fuchsia-500/10 to-transparent rounded-full blur-[140px]"></div>
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-indigo-400/10 via-purple-400/5 to-transparent rounded-full blur-[100px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Welcome to My App
          </h1>
          <p className="text-gray-400 mb-6 max-w-md">Blog, Blogs and Beelog...</p>
          <SearchForm query={query} />
        </div>
      </section>

      <section className="p-2 container mx-auto text-white flex flex-col items-center justify-center">
        <h1
          className="text-3xl md:text-5xl font-semibold tracking-tight mb-6
          bg-gradient-to-r from-slate-400 via-slate-300 to-slate-100
          bg-clip-text text-transparent"
        >
          {query ? `Search for ${query}` : "All Blogs"}
        </h1>

        <div className="w-full max-w-5xl">
          {posts.length > 0 ? (
            posts.map((post, index) => <BlogCard key={index} post={post} />)
          ) : (
            <p>No results found</p>
          )}
        </div>
      </section>
    </>
  );
}
