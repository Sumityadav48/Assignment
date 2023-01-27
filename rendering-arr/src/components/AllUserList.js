import React from "react";
import UserDetails from "./UserDetails";

const AllUserList = () => {
  let allUsers = [
    {
      name: "Sumit",
      email: "sumit@gmail.com",
      phoneNumber: 9939456821,
    },
    { name: "Suraj", email: "suraj@gmail.com", phoneNumber: 9939456822 },
    { name: "Utkarsh", email: "utkarsh@gmail.com", phoneNumber: 9939456823 },
  ];

//   let array =[<UserDetails user={allUsers[0]}/>,
//   <UserDetails user={allUsers[1]}/>,
//   <UserDetails user={allUsers[2]}/>]

  return(
    <div>
        {allUsers.map((user, index) => (
        <UserDetails key={index} user={user}/>
     ))}
    </div>
  )
};

export default AllUserList;
