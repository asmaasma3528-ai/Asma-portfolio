export default function Skills() {
  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Skills</h2>

      <div className="row g-4">
        {/* Frontend */}
        <div className="col-md-4">
          <div className="card h-100 bg-dark text-light shadow rounded-4">
            <div className="card-body">
              <h5 className="card-title text-warning">Frontend</h5>
              <ul className="list-unstyled mt-3">
                <li>⚡ HTML5</li>
                <li>🎨 CSS3</li>
                <li>🧠 JavaScript (ES6+)</li>
                <li>⚛️ React</li>
                <li>🅱️ Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="col-md-4">
          <div className="card h-100 bg-dark text-light shadow rounded-4">
            <div className="card-body">
              <h5 className="card-title text-warning">Backend</h5>
              <ul className="list-unstyled mt-3">
                <li>🟢 Node.js</li>
                <li>🚀 Express.js</li>
                <li>🔐 REST APIs</li>
                <li>🧩 MVC Architecture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Database & Tools */}
        <div className="col-md-4">
          <div className="card h-100 bg-dark text-light shadow rounded-4">
            <div className="card-body">
              <h5 className="card-title text-warning">Database & Tools</h5>
              <ul className="list-unstyled mt-3">
                <li>🍃 MongoDB</li>
                <li>🧬 Mongoose</li>
                <li>🐙 Git & GitHub</li>
                <li>🛠 Postman</li>
                 <li>🔥 Firebase Firestore</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 bg-dark text-light shadow rounded-4">
            <div className="card-body">
              <h5 className="card-title text-warning">Tools</h5>
              <ul className="list-unstyled mt-3">
                <li>🐙 Git & GitHub</li>
                <li>🛠 Postman</li>
                <li>🧪 VS Code</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deployment */}
        <div className="col-md-6">
          <div className="card h-100 bg-dark text-light shadow rounded-4">
            <div className="card-body">
              <h5 className="card-title text-warning">Deployment & Cloud</h5>
              <ul className="list-unstyled mt-3">
                <li>☁️ Render</li>
                <li>☁️ AWS (EC2 / Basic Cloud)</li>
                <li>🌐 Netlify</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
