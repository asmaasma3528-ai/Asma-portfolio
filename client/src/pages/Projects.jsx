export default function Projects() {
  return (
    <div id="projects" className="container py-5 container mt-5 bg-warning form-control rounded">
      <h2 className="fw-bold text-center mb-5 bg-light rounded">Projects</h2>

      <div className="row g-6">

        {/* Project 1 */}
        <div className="col-md-4 rounded-4 p-1">
          <div className="card h-100 shadow-lg rounded-4">
            <div className="card-body">
              <h5 className="card-title fw-bold">Portfolio Website</h5>
              <p className="card-text">
                A full-stack personal portfolio built using React, Node.js,
                Express, and MongoDB with a contact form and admin view.
              </p>
              <p className="text-muted">Tech: React, Node, Express, MongoDB</p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <a href="https://github.com/asmaasma3528-ai/Asma-portfolio" className="btn btn-outline-primary btn-sm me-2">
                GitHub
              </a>
              <a href="#" className="btn btn-outline-success btn-sm">
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-lg rounded-4">
            <div className="card-body">
              <h5 className="card-title fw-bold">BusyBuy App</h5>
              <p className="card-text">
                An e-commerce application with authentication, cart management,
                filters, and Firestore database integration.
              </p>
              <p className="text-muted">Tech: React, Firebase, Redux</p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <a href="#" className="btn btn-outline-primary btn-sm me-2">
                GitHub
              </a>
              <a href="#" className="btn btn-outline-success btn-sm">
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-lg rounded-4">
            <div className="card-body">
              <h5 className="card-title fw-bold">Contact Management API</h5>
              <p className="card-text">
                REST API to store and retrieve user messages with proper MVC
                architecture and error handling.
              </p>
              <p className="text-muted">Tech: Node, Express, MongoDB</p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <a href="#" className="btn btn-outline-primary btn-sm me-2">
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
