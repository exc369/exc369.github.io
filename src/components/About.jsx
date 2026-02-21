function About({ isActive }) {
  return (
    <article className={`about${isActive ? ' active' : ''}`}>

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi, I’m Eric, a Computer Science graduate from Case Western Reserve University and a Software Developer at JPMorgan Chase & Co. I focus on mobile (Android) and web development, building scalable, user-focused applications that solve real problems.
        </p>
        <p>
          I enjoy working across the full stack and throughout the entire lifecycle of a project. From architecture and design to implementation and integration, I’m drawn to thoughtful engineering and clean, maintainable systems. I care deeply about building software that is not only functional, but well-structured and sustainable over time.
        </p>
        <p>
          Outside of engineering, I’m passionate about music, video games, and spoiling my good boy with more treats than he probably deserves. These interests keep me grounded and continually shape how I approach creativity, curiosity, and problem-solving.
        </p>
      </section>

      <section className="service">

        <h3 className="h3 service-title">What I Do</h3>

        <ul className="service-list">

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                Building and maintaining production web applications with React and Node.js that support thousands of daily users.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-design.svg" alt="API development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">API development</h4>
              <p className="service-item-text">
                Designing and maintaining RESTful microservices with Spring Boot, Java, and Apache Cassandra, focused on scalability and reliability.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="/assets/images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>
              <p className="service-item-text">
                Developing Android applications in Java and Kotlin using MVVM architecture and modern mobile engineering practices.
              </p>
            </div>
          </li>

        </ul>

      </section>

    </article>
  )
}

export default About
