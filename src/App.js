import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    selectedPackage: 'Big Cats Week at Maasai Mara',
    itinerary: [
      {
        day: 'Day 1',
        date: 'Nov 14th 2023',
        description:
          'Pick up from JKIA airport, travel to Maasai Mara, first game drive in the afternoon.',
      },
      {
        day: 'Day 2',
        date: 'Nov 15th 2023',
        description:
          'Morning and afternoon game drives, bush breakfast, and search for leopards.',
      },
      {
        day: 'Day 3',
        date: 'Nov 16th 2023',
        description:
          'Full-day game drive to Sand River, chance to see the Big 4, and return to camp.',
      },
      {
        day: 'Day 4',
        date: 'Nov 17th 2023',
        description: 'Return journey to Nairobi, drop-off at JKIA airport.',
      },
    ],
    showBookingModal: false,
  }

  toggleBookingModal = () => {
    this.setState(prevState => ({
      showBookingModal: !prevState.showBookingModal,
    }))
  }

  render() {
    const {selectedPackage, itinerary, showBookingModal} = this.state
    return (
      <div className="landing-container">
        <header>
          <h1>{selectedPackage}</h1>
          <p>
            Experience the breathtaking Maasai Mara with our exclusive tour
            package.
          </p>
        </header>

        <section className="itinerary">
          <h2>Itinerary</h2>
          {itinerary.map(item => (
            <div key={item.id} className="itinerary-item">
              <h3>
                {item.day} - {item.date}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <section className="booking">
          <h2>Secure Your Spot</h2>
          <button type="button" onClick={this.toggleBookingModal}>
            Check Availability
          </button>
        </section>

        {showBookingModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Booking Inquiry</h3>
              <p>Contact us for special offers and availability.</p>
              <button type="button" onClick={this.toggleBookingModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
