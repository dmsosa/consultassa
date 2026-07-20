import useItemsCtx from "../../context/itemsContext";
import useItemsArray from "../../hooks/useItemsArray";
import ItemCard from "./ItemCard";
import ItemsPagination from "./ItemsPagination";

function ItemsArray() {
	const {itemsArray, loading, itemsCount, setOffset } = useItemsArray();
  	const { addItem, removeItem } = useItemsCtx();
	const onPageChange = (e) => {
		const newOffset = (e.selected * itemsPerPage) % items.length;
		console.log(
		`User requested page number ${e.selected}, which is offset ${newOffset}`
		);
		setOffset(newOffset);
	}
	return (
		itemsArray.length > 0 ?
		<div className="container d-flex flex-wrap">
			<div className="container d-flex flex-wrap">
				{itemsArray.map((item) => (
				<ItemCard key={item.id} {...item} onItemAdd={addItem} onItemRemove={removeItem}></ItemCard>))}
			</div>
			<ItemsPagination totalCount={itemsCount} perPage={3} onPageChange={onPageChange}></ItemsPagination>
		</div>
		
		: loading ? 
		<div>Items loading...</div>
		:
		<div>No items available</div>
	);
	}

export default ItemsArray;
