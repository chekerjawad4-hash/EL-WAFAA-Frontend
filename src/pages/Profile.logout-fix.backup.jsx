import { useNavigate } from "react-router-dom";

function Profile(){

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  function logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return(

    <div style={{
      background:"#0b0f14",
      minHeight:"100vh",
      color:"#fff",
      padding:"20px"
    }}>

      <h1>👤 الحساب</h1>

      <div style={{
        background:"#171b22",
        padding:"20px",
        borderRadius:"14px",
        marginTop:"20px"
      }}>

        <h2>{user?.username}</h2>

        <p>📧 {user?.email}</p>

        <p>🆔 UID: {user?.uid}</p>

      </div>

      <button
        onClick={logout}
        style={{
          width:"100%",
          marginTop:"30px",
          padding:"15px",
          background:"#d32f2f",
          color:"#fff",
          border:"none",
          borderRadius:"12px",
          fontSize:"18px",
          cursor:"pointer"
        }}
      >
        🚪 تسجيل الخروج
      </button>

    </div>

  );

}

export default Profile;
