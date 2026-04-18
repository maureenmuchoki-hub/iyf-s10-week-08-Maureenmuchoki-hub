function ItemCard({ name, owner, distance, rating, description, type }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{owner} · {distance}</p>
      <p>⭐ {rating}</p>
      <p>{description}</p>
      <button>
        {type === 'borrow' ? 'Offer to Lend' : 'Request to Borrow'}
      </button>
    </div>
  )
}

export default ItemCard