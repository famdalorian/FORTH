import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
             <span className='sidebarTitle'>About Us</span>
             <img className='liverpoolImg' src="https://eu-assets.simpleview-europe.com/marketingliverpool/imageresizer/?image=%2Fdmsimgs%2FLiverpool_Waterfront_1_1886578565.jpg&action=ProductDetail" alt="liverpol" />
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, delectus!</p>
             <span className="sidebarItem">Sections</span>
             <ul className='sidebarListItem'>
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Sports</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Tech</li>
                <li className='sidebarListItem'>Food</li>
                <li className='sidebarListItem'>Art</li>
                <li className='sidebarListItem'>Research</li>
             </ul>
        </div>
        <div className="sidebarItem">
           <span className='sidebarTitle'>Follow Us</span>
           <div className="sidebarSocial">
           <i  className="TopIcon fa-brands fa-twitter"></i>
      <i  className="TopIcon fa-brands fa-instagram"></i>
      <i  className="TopIcon fa-brands fa-square-facebook"></i>
           </div>

        </div>
    </div>
  )
}
