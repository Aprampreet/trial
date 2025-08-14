import SearchForm from "../../components/SearchForm";

export default async function Home({searchPrams,}:{searchPrams: Promise<{query?:string}>}) {
  const query = searchPrams?.query || "";

  return (
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
    <p className="text-gray-400 mb-6 max-w-md">
      Blog, Blogs and Beelog...
    </p>
    <SearchForm query={query}/>
  </div>
</section>


  );
}
