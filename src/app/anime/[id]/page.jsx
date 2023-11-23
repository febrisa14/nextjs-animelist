import fetchDataAnime from "@/app/lib/api"
import VideoPlayer from "@/components/Utils/VideoPlayer";
import Image from "next/image";

const AnimePage = async ({ params: { id } }) => {
    const anime = await fetchDataAnime(`anime/${id}`);
    return (
        <div className="px-4 py-6 max-w-7xl mx-auto space-y-3">
            <h3 className="text-color-primary text-2xl">{anime.data?.title} - {anime.data?.year}</h3>
            <div className="text-color-primary flex space-x-2">
                <div className="border-color-primary rounded border w-36 flex flex-col justify-center items-center">
                    <h3>Peringkat</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="border-color-primary rounded border w-36 flex flex-col justify-center items-center">
                    <h3>Score</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="border-color-primary rounded border w-36 flex flex-col justify-center items-center">
                    <h3>Member</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="border-color-primary rounded border w-36 flex flex-col justify-center items-center">
                    <h3>Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className="flex pt-4 sm:flex-nowrap flex-col sm:flex-row gap-4 text-color-primary">
                <Image
                    src={anime.data?.images.webp.image_url}
                    alt={anime.data?.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-lg">{anime.data?.synopsis}</p>
            </div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
    )
}

export default AnimePage