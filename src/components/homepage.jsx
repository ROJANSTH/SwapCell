import './Homepage.css'

function Homepage() {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Welcome to LaptopStore</h1>
        <p>Buy and sell used laptops at the best prices</p>
        <button>Browse Laptops</button>
      </section>

      <section className="featured">
        <h2>Featured Laptops</h2>
        <div className="laptops">
          <div className="laptop-card">
            <img src="/laptop1.jpg" alt="Laptop" />
            <h3>MacBook Pro</h3>
            <p>Rs. 120,000</p>
          </div>
          <div className="laptop-card">
            <img src="/laptop2.jpg" alt="Laptop" />
            <h3>Dell XPS</h3>
            <p>Rs. 90,000</p>
          </div>
          <div className="laptop-card">
            <img src="/laptop3.jpg" alt="Laptop" />
            <h3>HP Pavilion</h3>
            <p>Rs. 70,000</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage;