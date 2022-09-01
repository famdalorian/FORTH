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
    <li className='TopListItem'>Home</li>
    <li className='TopListItem'>About</li>
    <li className='TopListItem'>Contact</li>
    <li className='TopListItem'>Write</li>
    <li className='TopListItem'>Logout</li>
    <li className='TopListItem'></li>

        </ul>
      </div>
      <div className="TopRight">
       <img className="TopImg" src="https://github.com/famdalorian/FORTH/blob/main/frontend/src/Images/Forth-PH.png" alt="logo4th" />
      </div>
<div className="TopSearchIcon">

</div>

    </div>

  )
}
export default Topbar;