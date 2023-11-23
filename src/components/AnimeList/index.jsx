"use client";

import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ anime }) => {
    return (
        <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-2 gap-4">
            {anime.data?.map((item) => (
                <div key={item.mal_id} className="shadow-md text-color-primary hover:text-color-accent">
                    <Link className="cursor-pointer" href={`/anime/${item.mal_id}`}>
                        <Image
                            src={item.images.webp.image_url}
                            alt="..."
                            width={350}
                            height={350}
                            className="w-full max-h-72 object-cover" />
                        <h3 className="text-md md:text-xl font-bold p-4">{item.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default AnimeList;