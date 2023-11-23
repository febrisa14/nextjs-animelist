"use client";

import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import Pagination from "@/components/Utils/Pagination"
import { useEffect, useState } from "react";
import fetchDataAnime from "../lib/api";

const PopularPage = () => {
    const [page, setPage] = useState(1);
    const [topAnime, setTopAnime] = useState([]);

    const fetchData = async () => {
        const data = await fetchDataAnime("top/anime", `page=${page}`)
        setTopAnime(data);
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <section>
                <Header title={`Anime Terpopuler #${page}`}>
                    <AnimeList anime={topAnime} />
                </Header>
                <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
            </section>
        </>
    )
}

export default PopularPage