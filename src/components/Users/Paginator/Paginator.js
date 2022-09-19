import React, {useState} from "react";
import s from "./Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const [portionNumber] = useState(((currentPage - 1) - (currentPage - 1) % portionSize) / portionSize + 1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    debugger
    return (
        <div>
            {leftPortionPageNumber !== 1 && <span>
                <span className={s.change} onClick={() => {
                    onPageChange(1)
                }}>&laquo;</span>
                <span className={s.changePortion} onClick={() => {
                    onPageChange(currentPage - 1)
                }}>&lt;</span></span>}
            {pages
                .filter(p => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))
                .map(p => {
                    return <span
                        className={currentPage === p ? s.selectedPageNumber : s.pageNumber}
                        onClick={(e) => onPageChange(p)}
                    >{p}</span>
                })}
            {currentPage !== pagesCount && <span>
                <span onClick={() => {
                    onPageChange(currentPage + 1)
                }}>&gt;</span>
                <span className={s.change} onClick={() => {
                    onPageChange(pagesCount)
                }}>&raquo;</span>
                </span>}
        </div>)
}
export default Paginator