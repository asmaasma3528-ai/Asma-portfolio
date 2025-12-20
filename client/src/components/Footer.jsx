import "../styles/footer.css";

export default function Footer(){
    return (
        <footer className="bg-dark text-white py-5 mt-5 border-top border-secondary">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Side: Name and Copyright */}
      <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
        <h5 className="fw-bold mb-1">Asma's Portfolio</h5>
        <p className="text-light small mb-0">© 2025 All Rights Reserved.</p>
      </div>

      {/* Right Side: Social Icons */}
      <div className="col-md-4 text-center text-md-start">
        <div className="d-flex justify-content-center justify-content-md-end gap-3">
           {/* GitHub  */}
          <a href="https://github.com/asmaasma3528-ai" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
             <i className="bi bi-github fs-5">
            GitHub
             </i>
          </a>
          {/* LinkedIn  */}
          <a href="https://www.linkedin.com/in/asma-shaik-5901222a6/" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
             <i className="bi bi-linkedin fs-5 text-primary">
              Linkedin
             </i>
          </a>

          {/* WhatsApp  */}
          <a href="https://wa.me/7416268682" target="_blank" rel="noreferrer" className="text-white text-decoration-none">
             <i className="bi bi-whatsapp fs-5 text-success">
              WhatsApp
             </i>
          </a>

          {/* Email  */}
          <a href="mailto:asmaasma3528@gmail.com" className="text-white text-decoration-none">
             <i className="bi bi-envelope-fill fs-5 text-warning">
              Email
             </i>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}