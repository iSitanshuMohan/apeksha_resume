import './App.css'

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Apeksha Mishra</h1>
          </div>
          <div className="hero-image">
            <img src="/img/hero_section.jpeg" alt="Hero" />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="about">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          <div className="about-box">
            <p className="about-text">
              I am a dedicated and enthusiastic individual with a strong ability to adapt to challenging situations. 
              I possess significant skills in managing and resolving critical issues effectively. 
              I am seeking a position within an organization where I can apply my knowledge, contribute to team success, 
              and continue to learn and grow professionally.
            </p>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="contact">
        <div className="contact-container">
          <h2 className="contact-title">Contact Me</h2>
          <div className="contact-box">
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Address</h3>
                <p>Faizullaganj, Lucknow</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <a href="mailto:mishraapeksha910@gmail.com">mishraapeksha910@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/apeksha-mishra-0543262ba/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/apeksha-mishra
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
