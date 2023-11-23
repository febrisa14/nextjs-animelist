import fetchDataAnime from "@/app/lib/api";
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header";

export default async function SearchPage({ params }) {
    const { keyword } = params;
    const decodedKeyword = decodeURI(keyword);
    const searchAnime = await fetchDataAnime("anime", `q=${decodedKeyword}`);

    return (
        <>
            <section>
                <Header title={`Pencarian untuk keyword: ${decodedKeyword}...`}>
                    <AnimeList anime={searchAnime} />
                </Header>
            </section>
        </>
    )
}
