import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  
  useEffect(() => {
    // Using exchangerate-api.com (free tier available)
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((error) => {
        console.error("Error fetching currency data:", error)
        setData({})
      })
  }, [currency])
  
  return data
}

export default useCurrencyInfo