"use client";

import ArticleCard from "@/components/article-card";
import SearchBar from "@/components/search-bar";

export default function Blogs() {
    const tags = [
        {name: "Lorem", count: 12},
        {name: "Ipsum", count: 4},
        {name: "Dolor", count: 8},
        {name: "Sit", count: 2},
        {name: "Amet", count: 1},
        {name: "Consectetur", count: 3},
        {name: "Adipisicing", count: 5},
        {name: "Elit", count: 7},
        {name: "Enim", count: 9},
        {name: "Illum", count: 11},
        {name: "Quo", count: 13},
        {name: "Architecto", count: 15},
        {name: "Aspernatur", count: 17},
        {name: "Nisi", count: 19},
        {name: "Necessitatibus", count: 21},
        {name: "Tempora", count: 23},
        {name: "Suscipit", count: 25},
        {name: "Expedita", count: 27},
        {name: "Ullam", count: 29},
        {name: "Tenetur", count: 31},
    ];

    return (
        <main className="mb-auto">
            <h1 className="title-xl">All posts</h1>
            <div className="flex gap-16">
                <section className="hidden max-h-96 flex-1 flex-col items-start gap-1 overflow-x-auto rounded-lg bg-gray-100 p-4 sm:flex ">
                    <h3 className="font-bold text-primary">All tags</h3>
                    {
                        tags.map((tag, i) => (
                            <button key={i} className="ml-4 text-left text-sm font-medium text-gray-700 hover:text-blue-600">
                                <span className="">{tag.name} ({tag.count})</span>
                            </button>
                        ))
                    }
                </section>
                <section className="sm:flex-[3]">
                    <div className="mb-8">
                        <SearchBar onChange={(value) => { }} />
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                        {
                            Array(4).fill(0).map((_, i) => (
                                <ArticleCard
                                    key={i}
                                    thumbnail="https://picsum.photos/300/200?random=1"
                                    title="Lorem ipsum dolor sit amet consectetur."
                                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim illum..."
                                    author={{ name: "FirsName Last", avatar: "https://picsum.photos/300/200?random=1" }}
                                    date="16 janv 2024"
                                />
                            ))
                        }
                    </div>
                </section>
            </div>
        </main>
    );
};