import React, {useState} from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import './RedStripe.scss'

export const RedStripe = () => {

    let [userName, setUserName] = useState("")
    let [userEmail, setUserEmail] = useState("")
    const url = 'https://jsonplaceholder.typicode.com/users/1'
    const usersQuery = useQuery(`users/1`, async () => await axios.get(url), {
      refetchOnWindowFocus: false,
      enabled: false
    })

    if (usersQuery.isFetched && userName === "") {
          setUserName(usersQuery.data.data.name)
          setUserEmail(usersQuery.data.data.email)

        }
    
    const onHandlePush = () => { 
        usersQuery.refetch()
    }


  return (
    <div className='RedStripe'> 
      <button onClick={() => onHandlePush()}>Get User</button>
      Username: {userName} {userEmail}
    </div>
  )
}
