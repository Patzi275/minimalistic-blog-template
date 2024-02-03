import { MdOutlineArrowOutward } from "react-icons/md";
import Avatar from "./avatar";
import Image from "next/image";
import Link from "next/link";

interface Author {
    name: string;
    avatar: string;
}

export default function ArticleCard({ thumbnail, title, content, author, date, className }: { thumbnail: string, title: string, content: string, author: Author, date: string, className?: string }) {
    const postUrl = "post";
    return (
        <div className={className}>
            <Link href={postUrl}>
                <Image src={thumbnail} width={300} height={200} alt="hero image" className="min-w-full rounded-xl" />
            </Link>
            <div className="mt-4 flex flex-col gap-1">
                <div className="flex items-start justify-between">
                    <Link href={postUrl}>
                        <h3 className="text-xl font-bold">{title}</h3>
                    </Link>
                    <Link href={postUrl} target="_blank">
                        <MdOutlineArrowOutward size={40} className="hidden transition-opacity hover:opacity-50 sm:block" />
                    </Link>
                </div>
                <Link href={postUrl}>
                    <p >{content}</p>
                </Link>
                <div className="mt-2 flex items-center gap-1 font-bold">
                    <Avatar src={author.avatar} alt="avatar" size={32} />
                    <p className="ml-2">{author.name}</p>
                    •
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
};

// Exemple of use:
// <ArticleCard
//     thumbnail="https://picsum.photos/300/200?random=1"
//     title="Lorem ipsum dolor sit amet consectetur."
//     description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim illum quo architecto aspernatur, nisi necessitatibus tempora suscipit expedita ullam tenetur..."
//     author={{name: "FirsName Last", avatar: "https://picsum.photos/300/200?random=1"}}
//     date="16 janv 2024"
// />