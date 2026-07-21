import { useEffect, useState } from "react";
import { itemsGetAll } from "../data/items";

function useItemsArray(options = {}) {
  const [{ items, itemsCount }, setItemsData] = useState({
	items: [],
	itemsCount: 0,
  });
  const itemsPerPage = options.itemsPerPage ?? 3;
  const startOffset = options.startOffset ?? 0;
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(startOffset);


  useEffect(() => {
	setLoading(true);
	itemsGetAll()
	  .then((data) => {
		console.log(data);
		setItemsData(data);
	  })
	  .catch(console.error)
	  .finally(() => setLoading(false));
  }, []);

  const slicedItems = items.slice(offset, offset + itemsPerPage);
  return { itemsArray: slicedItems, itemsCount, itemsPerPage, loading, setItemsData, setOffset };
}

export default useItemsArray;
