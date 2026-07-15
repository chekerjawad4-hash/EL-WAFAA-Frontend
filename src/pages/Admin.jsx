import { useEffect, useState } from "react";
import UsersTable from "../components/admin/UsersTable";
import "../styles/Admin.css";

export default function Admin(){

const [stats,setStats]=useState({
users:0,
wallets:0,
orders:0,
trades:0,
server:"..."
});

useEffect(()=>{

fetch("https://el-wafaa-backend.onrender.com/api/admin/dashboard")
.then(res=>res.json())
.then(data=>setStats(data))
.catch(console.error);

},[]);

return(

<div className="admin-page">

<h1>EL WAFAA Admin</h1>

<div className="admin-grid">

<div className="card">
<h3>👥 Users</h3>
<h2>{stats.users}</h2>
</div>

<div className="card">
<h3>💰 Wallets</h3>
<h2>{stats.wallets}</h2>
</div>

<div className="card">
<h3>📖 Orders</h3>
<h2>{stats.orders}</h2>
</div>

<div className="card">
<h3>🤝 Trades</h3>
<h2>{stats.trades}</h2>
</div>

<div className="card">
<h3>🟢 Server</h3>
<h2>{stats.server}</h2>
</div>

</div>

<UsersTable />

</div>

);

}
