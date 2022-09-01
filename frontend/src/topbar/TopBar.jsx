import './Topbar.css'



export function Topbar() {
  return (
    <div className="TopBar">
      <div className='TopLeft'>
      <i   class="fa-brands fa-twitter"></i>
      <i  class="fa-brands fa-instagram"></i>
      <i  class="fa-brands fa-square-facebook"></i>
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
       <img src="https://github.com/famdalorian/FORTH/blob/main/frontend/src/Images/Forth-PH.png" alt="" />
      </div>


    </div>

  )
}
export default Topbar;