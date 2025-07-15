
const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" onClick={(e)=>{e.preventDefault();setCategory("general")}}><span className="badge bg-light text-dark fs-4">News</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a className="nav-link fs-5" style={{cursor:"pointer"}} onClick={()=>setCategory("Technology")}>Technology</a>
        </li>

        <li className="nav-item">
          <a className="nav-link fs-5" style={{cursor:"pointer"}} onClick={()=>setCategory("Business")}>Business</a>
        </li>

        <li className="nav-item">
          <a className="nav-link fs-5" style={{cursor:"pointer"}} onClick={()=>setCategory("Health")}>Health</a>
        </li>

        <li className="nav-item">
          <a className="nav-link fs-5" style={{cursor:"pointer"}} onClick={()=>setCategory("Sport")}>Sport</a>
        </li>

        <li className="nav-item">
          <a className="nav-link fs-5" style={{cursor:"pointer"}} onClick={()=>setCategory("Entertainment")}>Entertainment</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar