export default function Projects() {
  return (
    <div id="projects" className="container py-5 mt-5 bg-warning rounded">
      <h2 className="fw-bold text-center mb-5 text-white">Projects</h2>

      <div className="row g-4">
        {/* Project 1 */}
        <div className="col-12">
          <div className="card h-100 shadow-lg border-secondary bg-success text-dark rounded-3">
            <div className="card-body d-flex flex-column flex-md-row align-items-md-center justify-content-between">
              <div className="flex-grow-1">

                <h5 className="card-title fw-bold mb-1">Portfolio Website</h5>
                <p className="card-text mb-1">
                  A full-stack personal portfolio built using React, Node.js, Express, and MongoDB.
                </p>
                {/* Technologies Section */}
        <div className="mt-2">
          <span className="badge bg-primary me-1">React</span>
          <span className="badge bg-danger me-1">Node</span>
          <span className="badge bg-info text-dark me-1">Express</span>
          <span className="badge bg-secondary">MongoDB</span>
        </div>
              </div>
              
              <div className="mt-3 mt-md-0 ms-md-4 flex-shrink-0">
                <a href="https://github.com/asmaasma3528-ai/Asma-portfolio" className="btn btn-outline-warning btn-sm me-2">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-12">
          <div className="card h-100 shadow-lg border-secondary bg-success text-dark rounded-3">
            <div className="card-body d-flex flex-column flex-md-row align-items-md-center justify-content-between">
              <div className="flex-grow-1">
                <h5 className="card-title fw-bold mb-1">React app with redux template</h5>
                <p className="card-text mb-1">
                  A robust web application utilizing the core React-Redux architecture to manage complex global state. This project demonstrates a deep understanding of the unidirectional data flow, using a centralized store to synchronize data across multiple deeply nested components.
                </p>
                {/* Technologies Section */}
              <div className="mt-2">
                <span className="badge bg-primary me-1">React</span>
                <span className="badge bg-danger me-1">Redux (Core)</span>
                <span className="badge bg-info text-dark me-1">Redux-Thunk</span>
                <span className="badge bg-secondary">JavaScript ES6</span>
              </div>
              </div>
              
              <div className="mt-3 mt-md-0 ms-md-4 flex-shrink-0">
                <a href="#" className="btn btn-outline-warning btn-sm me-2">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
<div className="col-12">
  <div className="card h-100 shadow-lg border-secondary bg-success text-dark rounded-3">
    <div className="card-body d-flex flex-column flex-md-row align-items-md-center justify-content-between">
      
      <div className="flex-grow-1">
        <h5 className="card-title fw-bold mb-1 text-warning">Grocery Inventory Manager</h5>
        <p className="card-text mb-1">
          Developed a state-managed inventory tool using the <strong>React Context API</strong>. 
          Features include real-time item addition/deletion and a live total product counter 
          driven by a centralized data store to prevent prop-drilling.
        </p>
        
        <div className="mt-2">
          <span className="badge bg-primary me-1">React</span>
          <span className="badge bg-success me-1">Context API</span>
          <span className="badge bg-info text-dark me-1">State Management</span>
          <span className="badge bg-secondary">JavaScript ES6</span>
        </div>
      </div>
      
      <div className="mt-3 mt-md-0 ms-md-4 flex-shrink-0">
        <a href="#" className="btn btn-outline-warning btn-sm me-2">GitHub</a>
      </div>

    </div>
  </div>
</div>
      </div>
    </div>
  );
}