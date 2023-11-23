const Pagination = ({ page, lastPage, setPage }) => {
    const scrollToTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1);
        scrollToTop();
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1);
        scrollToTop();
    }

    return (
        <div className="flex justify-center items-center py-8 gap-2">
            {page > 1 && (
                <button onClick={handlePrevPage} className="text-color-primary py-2 px-4 transition-all hover:text-color-accent">Previous</button>
            )}

            <p className="text-color-primary py-2 px-4">{page} of {lastPage}</p>

            {page < lastPage && (
                <button onClick={handleNextPage} className="text-color-primary py-2 px-4 transition-all hover:text-color-accent">Next</button>
            )}
        </div>
    )
}

export default Pagination