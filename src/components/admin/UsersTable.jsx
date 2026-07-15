import { useEffect,useState } from "react";
import "../../styles/UsersTable.css";

export default function UsersTable(){

const [users,setUsers]=useState([]);
const [search,setSearch]=useState("");

useEffect(()=>{

const token=localStorage.getItem("token");

fetch("http://127.0.0.1:3001/api/admin/users",{
headers:{
Authorization:`Bearer ${token}`
}
})
.then(res=>res.json())
.then(data=>setUsers(data.users||[]))
.catch(console.error);

},[]);

const filteredUsers=users.filter(user=>
String(user[1]||"").toLowerCase().includes(search.toLowerCase()) ||
String(user[2]||"").toLowerCase().includes(search.toLowerCase())
);

return(

<div className="users-table">

<h2>Users ({filteredUsers.length})</h2>

<input
className="search-box"
placeholder="Search username or email..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<table>

<thead>
<tr>
<th>ID</th>
<th>Username</th>
<th>Email</th>
<th>USDT</th>
<th>DZC</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{filteredUsers.map(user=>(

<tr key={user[0]}>
<td>{user[0]}</td>
<td>{user[1]}</td>
<td>{user[2]}</td>
<td>{user[4]}</td>
<td>{user[5]}</td>
<td>
<button onClick={()=>window.location.href=`/admin/user/${user[0]}`}>View</button>
</td>
</tr>

))}

</tbody>

</table>

</div>

);

}
