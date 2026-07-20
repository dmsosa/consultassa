import ReactPaginate from "react-paginate";

function ItemsPagination({ totalCount, perPage, onPageChange }) {
	return (
	<ReactPaginate
	activeClassName="ac"
	breakLabel="more"
	onPageChange={onPageChange}
	pageCount={Math.ceil(totalCount / perPage)}>
	</ReactPaginate>);
};

export default ItemsPagination;
