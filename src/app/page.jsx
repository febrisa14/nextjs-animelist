import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header";
import fetchDataAnime from "./lib/api";

export default async function Home() {
  const anime = await fetchDataAnime("top/anime", "limit=8");

  return (
    <>
      <section>
        <Header title="Paling Populer" link={"/popular"}>
          <AnimeList anime={anime} />
        </Header>
      </section>
    </>
  )
}
