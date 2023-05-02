import { useState } from "react"
import { useClientsContext } from "../hooks/useClientsContext"
import { VscChevronRight } from 'react-icons/vsc';

export default function NewClient() {
  const { dispatch } = useClientsContext()
  const [title, setTitle] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const client = {title}

    const response = await fetch('/api/clients', {
      method: 'POST',
      body: JSON.stringify(client),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    } 
    if (response.ok) {
      setTitle('')
      setError(null)
      console.log('new client added', json)
      dispatch({type: 'CREATE_CLIENT', payload: json})
    }
  }

  return (
    <form action="create" className="client__tab newClient__form" onSubmit={handleSubmit}>
      <div className="button--tab">
        <VscChevronRight />
      </div>
      <input 
        className="newClient__input"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      {error && <div className="error">{error}</div>}
    </form>
  )
}
