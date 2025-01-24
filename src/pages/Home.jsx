import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0)

  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
    navigate(`/cards/${numberOfPlayers}`)
}

  return (
    <>
      <div className="container-fluid text-center">
        <div className='row mb-3'>
          <h2>
            Select the Number of players
          </h2>
        </div>
        <div className='row mb-5'>
          <form onSubmit={submit}>
                    <input
                        value={numberOfPlayers}
                        onChange={e => setNumberOfPlayers(e.target.value)}
                        className='form-control mb-3'
                    >
                    </input>
                    <button
                      type="submit"
                      className="btn btn-primary mb-3">
                        Ok
                    </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Home
