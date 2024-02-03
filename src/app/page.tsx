import ArticleCard from "@/components/article-card";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <HeroSection />
      
      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Recent posts</h2>
          <a href="" className="blue-button">View all</a>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {
            Array(4).fill(0).map((_, i) => (
              <ArticleCard
                key={i}
                thumbnail="https://picsum.photos/300/200?random=1"
                title="Lorem ipsum dolor sit amet consectetur."
                content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim illum quo architecto aspernatur, nisi necessitatibus tempora suscipit expedita ullam tenetur..."
                author={{ name: "FirsName Last", avatar: "https://picsum.photos/300/200?random=1" }}
                date="16 janv 2024"
              />
            ))
          }
        </div>
        <button className="blue-button mx-auto mt-8 w-max">Loading more...</button>
      </section>
    </main>
  )
}
