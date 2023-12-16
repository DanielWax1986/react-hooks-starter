
export function About() {
  return (
      <section className="about-page">
          <div className="about">
              <h2>
                  Welcome to <span className="logo">Appsus!</span>
              </h2>
              <br />
              <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus assumenda dol          </h4>
              <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus assumenda dol          </h4>
              <br />
          </div>
          <hr />
          <section className="team-container">
              <div className="team-member-1">
                  <img className="profile-img" src="assets/img/about/Iris.JPG" />
                  <div className="member-info">
                      <h3>Hi ! I'm Iris </h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus assumenda dol</p>
                      <a href="https://github.com/IrisY22" target="_blank">see more here <i className="fab fa-github"></i></a>
                  </div>
                 
              </div>
              <div className="team-member-2">
                  <div className="member-info">
                      <h3>Hi ! I'm Daniel</h3>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus assumenda dol</p>
                  <a href="https://github.com/DanielWax1986" target="_blank">see more here <i className="fab fa-github"></i></a>
                  </div>
                  <img className="profile-img" src="assets/img/about/Daniel.jpg" />
              </div>
          </section>
      </section>
  )
}
