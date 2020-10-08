import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PageinationButton from "./PageinationButton";
const Pagegination = ({ data, title, itemsPerPage }: any) => {

    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage] = useState(itemsPerPage)

    const indexOfLastItems = currentPage * perPage
    const indexOfFirstItems = indexOfLastItems - perPage
    const currentItems = items.slice(indexOfFirstItems, indexOfLastItems)

    useEffect(() => {
        setItems(data)
    }, [])

    const pageinate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div>
            <h3 className="mb-5">
                {title}
            </h3>
            <div className="container">
                <div className="row">
                    <Card data={currentItems} />
                </div>
                <PageinationButton
                    currentIndex = {currentPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={items.length}
                    pageinate={pageinate}
                />
            </div>
        </div>
    )
}

export default Pagegination