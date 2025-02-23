// Import necessary dependencies
import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

// Define and export the App component
function App() {
  const [data, setData] = useState(null) // State to store fetched data
  const [loading, setLoading] = useState(false) // State to track loading status
  const [showModal, setShowModal] = useState(false) // State to manage modal visibility

  // Function to toggle the modal visibility
  function handleToggleModal() {
    setShowModal(!showModal)
  }

  // useEffect hook to fetch API data when the component mounts
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY // Retrieve NASA API key from environment variables
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}` // Construct the API URL

      const today = (new Date()).toDateString() // Get today's date as a string
      const localKey = `NASA-${today}` // Create a unique key for localStorage based on today's date

      // Check if data for today is already in localStorage
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey)) // Parse the cached data
        setData(apiData) // Set the data state with cached data
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear() // Clear localStorage if no data for today is found

      // Fetch data from the NASA API
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData)) // Store fetched data in localStorage
        setData(apiData) // Set the data state with fetched data
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message) // Log any errors
      }
    }
    fetchAPIData() // Call the fetchAPIData function
  }, [])

  return (
    <>
      {/* Conditionally render the Main component or a loading state based on the data state */}
      {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {/* Conditionally render the SideBar component based on the showModal state */}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {/* Conditionally render the Footer component based on the data state */}
      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  )
}

export default App

/**
 * Flow Chart:
 * - Import necessary dependencies.
 * - Define and export the App functional component.
 * - Initialize state variables: data, loading, showModal.
 * - Define the handleToggleModal function to toggle the modal visibility.
 * - Use the useEffect hook to fetch API data when the component mounts:
 *   - Construct the API URL and retrieve today's date.
 *   - Check for cached data in localStorage.
 *   - If cached data is found, set the data state.
 *   - If no cached data is found, clear localStorage and fetch data from the API.
 *   - Store the fetched data in localStorage and set the data state.
 * - Render the component structure:
 *   - Conditionally render the Main component or a loading state based on the data state.
 *   - Conditionally render the SideBar component based on the showModal state.
 *   - Conditionally render the Footer component based on the data state.
 */
