import { useCallback, useState } from "react";
import { createStrictContext } from "./createStrictContext";

const [ ItemsCtxProv, useItemsCtx ] = createStrictContext(undefined);

export function ItemsContextProvider({ children }) {
	const [ itemsState, setItemsState ] = useState({ itemsCart: [], gTotal: 0 });
	
	const addItem = useCallback((item) => {
		if (itemsState.itemsCart.some((i) => i.id === item.id))
			return ;
		setItemsState((prev) => {
		return {
			itemsCart: [...prev.itemsCart, item],
			gTotal: prev.gTotal + item.price,
		};
		});
	}, []);

  	const removeItem = useCallback((id) => {
		const item = prev.itemsCart.find((i) => i.id === id);
		if (!item) 
			return;
		setItemsState((prev) => {
		return {
			itemsCart: prev.itemsCart.filter((i) => i.id !== id),
			gTotal: prev.gTotal - item.price,
		};
		});
	}, []);

	return (<ItemsCtxProv value={{itemsState, addItem, removeItem}}>
		{children}
	</ItemsCtxProv>)
}

export default useItemsCtx;
