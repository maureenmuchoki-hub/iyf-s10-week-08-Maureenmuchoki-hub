import { useState } from 'react'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import ItemList from './components/Items/ItemList'

function App() {
  const [borrowRequests, setBorrowRequests] = useState([
    { id: 1, name: "Borrowing a Drill for a Day", owner: "Paul", distance: "700m", rating: "4.8", description: "Need a drill for some home repairs." },
    { id: 2, name: "Looking for a Large Cooking Pot", owner: "Sarah", distance: "500m", rating: "5.5", description: "Need a big pot for a family gathering this weekend." }
  ])

  const [availableItems, setAvailableItems] = useState([
    { id: 1, name: "Tent Available for the Weekend", owner: "James", distance: "300m", rating: "5.6", description: "Camping tent available for the weekend." },
    { id: 2, name: "Ladder for Short-Term Use", owner: "Anne", distance: "850m", rating: "4.7", description: "Sturdy ladder available to borrow." }
  ])

  const [showForm, setShowForm] = useState(null) // 'borrow' or 'lend'

  return (
    <div className="app">
      <Header />
      <main>
        <div>
          <button onClick={() => setShowForm('borrow')}>
            🤲 Need to Borrow
          </button>
          <button onClick={() => setShowForm('lend')}>
            🤝 Have to Lend
          </button>
        </div>

        {showForm === 'borrow' && <p>Borrow form coming soon...</p>}
        {showForm === 'lend' && <p>Lend form coming soon...</p>}

        <section>
          <h2>I Need to Borrow</h2>
          <ItemList items={borrowRequests} type="borrow" />
        </section>
        <section>
          <h2>Items Available Nearby</h2>
          <ItemList items={availableItems} type="lend" />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App