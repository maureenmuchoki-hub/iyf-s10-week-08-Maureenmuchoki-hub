import ItemCard from './ItemCard'

function ItemList({ items, type }) {
  return (
    <div>
      {items.map(item => (
        <ItemCard
          key={item.id}
          name={item.name}
          owner={item.owner}
          distance={item.distance}
          rating={item.rating}
          description={item.description}
          type={type}
        />
      ))}
    </div>
  )
}

export default ItemList