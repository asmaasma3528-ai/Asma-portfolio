import "../styles/about.css";

export default function About() {
  return (
    <div id="about" className="container py-5">
      <div className="row align-items-center">
        
        {/* Left side */}
        <div className="col-md-6 mb-4">
          <h2 className="fw-bold mb-3">Overview</h2>
          <p className="fw-bold" style={{ color: '#0DCAF0', textShadow: '0 0 10px rgba(13, 202, 240, 0.3)' }}>
            &apos;I am a Full-Stack Developer driven by the challenge of turning a blank canvas into a functional reality. With a foundation in Business Administration and deep expertise in the MERN stack, I focus on building seamless, end-to-end applications. My goal is simple: to create web experiences that are as intuitive for the user as they are robust on the backend.&apos;
          </p>
          <p style={{ color: '#0DCAF0', textShadow: '0 0 10px rgba(13, 202, 240, 0.3)'}} className="fw-bold">
            &apos;My technical toolkit is centered on the MERN stack, where I transform design concepts into live, data-driven applications. From crafting responsive front-end components in React to managing server-side logic in Node.js, I bridge the gap between user experience and database efficiency. I am driven by a cycle of continuous learning—constantly refining my craft through real-world deployment and practical problem-solving.&apos;
          </p>
        </div>

        {/* Right side */}
        <div className="col-md-6">
          <div className="card bg-dark text-light shadow-lg rounded-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Quick Info</h5>
             <ul className="list-group list-group-flush">
  {/* Education Section */}
  
                <li className="list-group-item bg-dark text-light border-secondary py-3">
                <div className="d-flex align-items-center mb-1">
                <span className="me-2" style={{ color: '#0DCAF0', textShadow: '0 0 10px rgba(13, 202, 240, 0.3)' }}>🎓</span>
                <span className="fw-bold">BBA (Final Year)</span>
                </div>
                <div className="small text-secondary ps-4">
                Enlight College Of Science And Commerce 
                <br />
                • Expected June 2026 <br />
                Current Aggregate: 85%
                </div>
            </li>

            {/* Technical Section */}
            <li className="list-group-item bg-dark text-light border-secondary py-3">
                <div className="d-flex align-items-center mb-1">
                <span className="me-2" style={{ color: '#0DCAF0', textShadow: '0 0 10px rgba(13, 202, 240, 0.3)' }}>💻</span>
                <span className="fw-bold">MERN Stack Developer</span>
                </div>
                <div className="small text-secondary ps-4">
                Specializing in Scalable Web Apps
                </div>
            </li>

            {/* Location Section */}
            <li className="list-group-item bg-dark text-light border-0 py-3">
                <span>📍 India</span>
            </li>
            </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
