export default function Home() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 fw-bold">
        Hi, I'm <span className="text-warning">Asma Shaik</span>
      </h1>

      <h2 className="text-secondary mb-4">
        Full Stack Web Developer
      </h2>

      <p className="lead text-info mx-auto fw-bold">
        A Full Stack Web Developer with a strong command of the MERN
        (MongoDB, Express.js, React, Node.js) stack, capable of handling
        every aspect of a web application's lifecycle. From building
        responsive and engaging user interfaces with React to developing
        secure APIs using Express.js and managing data efficiently with
        MongoDB and Mongoose, I focus on creating scalable, high-performance
        web applications that bridge front-end design with back-end logic.
      </p>

      <div className="mt-4">
        <a href="#projects" className="btn btn-warning me-3 rounded-pill px-4">
          View Projects
        </a>
        <a href="#contact" className="btn btn-warning rounded-pill px-4">
          Contact Me
        </a>
      </div>
    </div>
  );
}
