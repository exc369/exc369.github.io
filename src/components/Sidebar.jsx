function Sidebar({ isOpen, onToggle }) {
  return (
    <aside className={`sidebar${isOpen ? ' active' : ''}`}>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src="/assets/images/my-avatar.png" alt="Eric Chang" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Eric Chang">Eric Chang</h1>
          <p className="title">Full Stack developer</p>
        </div>

        <button className="info_more-btn" onClick={onToggle}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:nonoeric123@gmail.com" className="contact-link">nonoeric123@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2000-07-01">July 1, 2000</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Columbus, Ohio, USA</address>
            </div>
          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="https://github.com/exc369" className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.linkedin.com/in/eric-chang-62b450172/" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/shimotheshibe" className="social-link">
              <ion-icon name="paw-outline"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </aside>
  )
}

export default Sidebar
