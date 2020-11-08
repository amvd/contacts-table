import React, { useState, useEffect } from 'react'
import './App.css'
import { processData } from './data/response'
import { Contact } from './data/contact'
import Row from './row'
import { isEmpty } from 'lodash-es'

const CORS_API_URL = 'https://cors-anywhere.herokuapp.com/'
const CONTACTS_URL = `${
  process.env.REACT_APP_API_HOST
}/contacts?include=deals,geoIps.geoAddress,contactTags`
const API_KEY = process.env.REACT_APP_API_KEY || ''

const fetchContacts = async () => {
  const requestHeaders = {
    'Accept': 'application/json',
    'Api-Token': API_KEY
  }

  const options = {
    method: 'GET',
    headers: requestHeaders
  }

  const response = await fetch(CORS_API_URL + CONTACTS_URL, options)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const json = await response.json()

  console.log('response data:', json)
  
  return json
}

function App() {
  const [loaded, setLoaded] = useState(false)
  const [contactData, setContactData]: [Contact[], Function] = useState<Contact[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchContacts()

      const data: Contact[] = processData(result)

      console.log(data)

      setContactData(data)
      setLoaded(true)
    }

    fetchData()
  }, [])

  if (!loaded || isEmpty(contactData)) return <div className="loading">Loading...</div>

  console.log('data:', contactData)

  return (
    <div className="App">
      {contactData.map((contact: Contact) => <Row key={contact.id} contact={contact} />)}
    </div>
  );
}

export default App;

console.log('host:', process.env.REACT_APP_API_HOST)