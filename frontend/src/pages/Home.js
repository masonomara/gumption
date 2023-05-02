import { useEffect } from 'react'
import { useClientsContext } from "../hooks/useClientsContext"

import ClientNav from '../components/ClientNav';


const Home = () => {
  const {clients, dispatch} = useClientsContext()


  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('/api/clients')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_CLIENTS', payload: json})
      }
    }

    fetchClients()
  }, [dispatch])

  return (
    <>
      <ClientNav clients={clients}/>
    </>

  )
}

export default Home