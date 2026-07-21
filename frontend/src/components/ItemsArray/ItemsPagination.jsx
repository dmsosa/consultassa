import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

function ItemsPagination({ totalCount, perPage, onPageChange }) {
	return (
	<ReactPaginate
	activeClassName="active"
	breakLabel="..."
	breakClassName="page-item page-link"
	nextClassName="page-item next"
	previousClassName="page-item prev"
	containerClassName="paginate"
	nextLabel={<FaArrowRight></FaArrowRight>}
	previousLabel={<FaArrowLeft></FaArrowLeft>}
	nextLinkClassName="page-link"
	previousLinkClassName="page-link"
	pageLinkClassName="page-link"
	pageClassName="page-item"
	renderOnZeroPageCount={null}
	onPageChange={onPageChange}
	pageCount={Math.ceil(totalCount / perPage)}
	pageRangeDisplayed={1}
	>
	</ReactPaginate>);
};

export default ItemsPagination;


//    activeClassName="active"
//       breakClassName="page-item"
//       breakLabel="..."
//       breakLinkClassName="page-link"
//       containerClassName="pagination pagination-sm"
//       nextClassName="page-item"
//       nextLabel={<i className="ion-arrow-right-b"></i>}
//       nextLinkClassName="page-link"
//       onPageChange={handlePageChange}
//       pageClassName="page-item"
//       pageCount={totalPages}
//       pageLinkClassName="page-link"
//       previousClassName="page-item"
//       previousLabel={<i className="ion-arrow-left-b"></i>}
//       previousLinkClassName="page-link"
//       renderOnZeroPageCount={null}