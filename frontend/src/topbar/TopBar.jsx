import './Topbar.css'



export function Topbar() {
  return (
    <div className="TopBar">
      <div className='TopLeft'>
      <i  className="TopIcon fa-brands fa-twitter"></i>
      <i  className="TopIcon fa-brands fa-instagram"></i>
      <i  className="TopIcon fa-brands fa-square-facebook"></i>
      </div>
      <div className="topCenter">
        <ul className='TopList'>
    <li className='topListItem'>Home</li>
    <li className='topListItem'>About</li>
    <li className='topListItem'>Contact</li>
    <li className='topListItem'>Write</li>
    <li className='topListItem'>Logout</li>
    <li className='topListItem'></li>

        </ul>
      </div>
      <div className="TopRight">
       <img className="TopImg" src="https://github.com/famdalorian/FORTH/blob/main/frontend/src/Images/Forth-PH.png?raw=true" alt="logo4th" />
       <i className="TopSearchIcon fas fa-search" ></i>
      </div>
<div className="TopSearchIcon">

</div>

    </div>

  )
}
export default Topbar;