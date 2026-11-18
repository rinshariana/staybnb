import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadStay, addStayReview } from '../store/actions/stay.actions'


export function StayDetails() {

  const { stayId } = useParams()
  const stay = useSelector(storeState => storeState.stayModule.stay)

  useEffect(() => {
    loadStay(stayId)
  }, [stayId])

  async function onAddStayReview(stayId) {
    try {
      await addStayReview(stayId, 'bla bla ' + parseInt(Math.random() * 10))
      showSuccessMsg(`Stay review added`)
    } catch (err) {
      showErrorMsg('Cannot add stay review')
    }

  }

  return (
    <section className="stay-details">
      <Link to="/stay">Back to list</Link>

      {stay && <div>
        <header className="stay-details-header">
          <h1>{stay.name}</h1>
        </header>

        <section className="stay-overview">
          <h2>
            {stay.type} in {stay.loc.city}, {stay.loc.country}
          </h2>

          <p>{stay.capacity} guests</p>
        </section>

        <pre>{JSON.stringify(stay, null, 2)}</pre>

        <button onClick={() => { onAddStayReview(stay._id) }}>
          Add stay review
        </button>
      </div>
      }

    </section>
  )
}