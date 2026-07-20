function ItemCard({ id, title, img, price, onItemAdd, onItemRemove }) {
  return (
    <div className="item-card">
      <div className="item-card-header">
        <span>{title}</span>
      </div>
      <img src={img} alt={`${title}'s image`} />
      <div className="item-card-footer">
        <span>{price}</span>
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <button className="btn btn-primary" onClick={() => onItemAdd({ id, title, img, price })}>
            Add to cart
          </button>
          <button className="btn btn-info" onClick={() => onItemRemove(id)}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;