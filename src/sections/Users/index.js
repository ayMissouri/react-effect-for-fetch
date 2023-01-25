import { useEffect, useState } from "react"



function UsersSection() {

  const [listOfUsers, setListOfUsers] = useState([])

  useEffect(()=>{
    fetch(`https://randomuser.me/api/?results=10`)
      .then(res=>res.json())
      .then(data=>setListOfUsers(data.results))
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {listOfUsers.map((user, index)=>(
            <li key={index} className={user.gender==='male' ? 'bg-blue' : 'bg-pink'}>
              <img src={user.picture.thumbnail} alt="😳" />
              <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
              <p>{`Email: ${user.email}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
