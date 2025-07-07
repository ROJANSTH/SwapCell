// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [showForm, setShowForm] = useState('home'); // 'home', 'login', 'register', 'sell'
//   const [loginData, setLoginData] = useState({ email: '', password: '' });
//   const [registerData, setRegisterData] = useState({ 
//     name: 'adam', 
//     email: 'adam123@gmail.com', 
//     phone: '123456789',
//     password: '@adam123', 
//     confirmPassword: '@adam123' 
//   });
//   const [sellData, setSellData] = useState({
//     laptopModel: '234',
//     brand: 'Dell',
//     price: '9999',
//     condition: 'fresh',
//     description: 'new model'
//   });

//   // Handle form changes
//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   const handleRegisterChange = (e) => {
//     const { name, value } = e.target;
//     setRegisterData({ ...registerData, [name]: value });
//   };

//   const handleSellChange = (e) => {
//     const { name, value } = e.target;
//     setSellData({ ...sellData, [name]: value });
//   };

//   // Form submissions
//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login data:", loginData);
//     setShowForm('home');
//   };

//   const handleRegisterSubmit = (e) => {
//     e.preventDefault();
//     console.log("Registration data:", registerData);
//     setShowForm('home');
//   };

//   const handleSellSubmit = (e) => {
//     e.preventDefault();
//     console.log("Sell data:", sellData);
//     alert('Your laptop listing has been submitted!');
//     setShowForm('home');
//   };

//   // Sample laptop listings
//   const laptopListings = [
//     {
//       id: 1,
//       model: "MacBook Pro 2020",
//       price: "Rs. 150,000",
//       specs: "16GB RAM, 512GB SSD, M1 Chip",
//       condition: "Excellent"
//     },
//     {
//       id: 2,
//       model: "Dell XPS 15",
//       price: "Rs. 120,000",
//       specs: "8GB RAM, 256GB SSD, i7 Processor",
//       condition: "Good"
//     },
//     {
//       id: 3,
//       model: "HP Pavilion",
//       price: "Rs. 80,000",
//       specs: "8GB RAM, 1TB HDD, i5 Processor",
//       condition: "Fair"
//     }
//   ];

//   return (
//     <div className="app">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="container">
//           <div className="logo">SwapCell</div>
//           <div className="nav-links">
//             <a href="#" onClick={() => setShowForm('home')}>Home</a>
//             <a href="#">Browse Laptops</a>
//             <a href="#">About Us</a>
//             <a href="#">Contact</a>
//             {showForm === 'home' && (
//               <>
//                 <a href="#" onClick={() => setShowForm('login')}>Login</a>
//                 <a href="#" onClick={() => setShowForm('register')}>Register</a>
//                 <button className="sell-button" onClick={() => setShowForm('sell')}>Sell Your Laptop</button>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       {showForm === 'home' && (
//         <section className="hero">
//           <div className="container">
//             <h1>SwapCell - KoBhanchaPurano</h1>
//             <p>Nepal's trusted marketplace for buying and selling used laptops</p>
//             <div className="cta-buttons">
//               <button onClick={() => setShowForm('sell')}>Sell Your Laptop</button>
//               <button>Browse Listings</button>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Login Form */}
//       {showForm === 'login' && (
//         <section className="auth-form">
//           <div className="container">
//             <h2>Login to Your Account</h2>
//             <form onSubmit={handleLoginSubmit}>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input 
//                   type="email" 
//                   name="email" 
//                   value={loginData.email}
//                   onChange={handleLoginChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input 
//                   type="password" 
//                   name="password" 
//                   value={loginData.password}
//                   onChange={handleLoginChange}
//                   required
//                 />
//               </div>
//               <button type="submit">Login</button>
//               <p>
//                 Don't have an account?{' '}
//                 <a href="#" onClick={() => setShowForm('register')}>Register here</a>
//               </p>
//             </form>
//           </div>
//         </section>
//       )}

//       {/* Registration Form */}
//       {showForm === 'register' && (
//         <section className="auth-form">
//           <div className="container">
//             <h2>Create Your Account</h2>
//             <form onSubmit={handleRegisterSubmit}>
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input 
//                   type="text" 
//                   name="name" 
//                   value={registerData.name}
//                   onChange={handleRegisterChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input 
//                   type="email" 
//                   name="email" 
//                   value={registerData.email}
//                   onChange={handleRegisterChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Phone Number</label>
//                 <input 
//                   type="tel" 
//                   name="phone" 
//                   value={registerData.phone}
//                   onChange={handleRegisterChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input 
//                   type="password" 
//                   name="password" 
//                   value={registerData.password}
//                   onChange={handleRegisterChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Confirm Password</label>
//                 <input 
//                   type="password" 
//                   name="confirmPassword" 
//                   value={registerData.confirmPassword}
//                   onChange={handleRegisterChange}
//                   required
//                 />
//               </div>
//               <button type="submit">Register</button>
//               <p>
//                 Already have an account?{' '}
//                 <a href="#" onClick={() => setShowForm('login')}>Login here</a>
//               </p>
//             </form>
//           </div>
//         </section>
//       )}

//       {/* Sell Laptop Form */}
//       {showForm === 'sell' && (
//         <section className="sell-form">
//           <div className="container">
//             <h2>Sell Your Laptop</h2>
//             <form onSubmit={handleSellSubmit}>
//               <div className="form-group">
//                 <label>Laptop Model</label>
//                 <input 
//                   type="text" 
//                   name="laptopModel" 
//                   value={sellData.laptopModel}
//                   onChange={handleSellChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Brand</label>
//                 <select 
//                   name="brand" 
//                   value={sellData.brand}
//                   onChange={handleSellChange}
//                   required
//                 >
//                   <option value="">Select Brand</option>
//                   <option value="Apple">Apple</option>
//                   <option value="Dell">Dell</option>
//                   <option value="HP">HP</option>
//                   <option value="Lenovo">Lenovo</option>
//                   <option value="Asus">Asus</option>
//                   <option value="Acer">Acer</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Price (NPR)</label>
//                 <input 
//                   type="number" 
//                   name="price" 
//                   value={sellData.price}
//                   onChange={handleSellChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Condition</label>
//                 <select 
//                   name="condition" 
//                   value={sellData.condition}
//                   onChange={handleSellChange}
//                   required
//                 >
//                   <option value="">Select Condition</option>
//                   <option value="Brand New">Brand New</option>
//                   <option value="Like New">Like New</option>
//                   <option value="Excellent">Excellent</option>
//                   <option value="Good">Good</option>
//                   <option value="Fair">Fair</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea 
//                   name="description" 
//                   value={sellData.description}
//                   onChange={handleSellChange}
//                   required
//                 />
//               </div>
//               <button type="submit">Submit Listing</button>
//             </form>
//           </div>
//         </section>
//       )}

//       {/* Featured Listings (Home Page Only) */}
//       {showForm === 'home' && (
//         <section className="featured-listings">
//           <div className="container">
//             <h2>Featured Laptops</h2>
//             <div className="listings-grid">
//               {laptopListings.map(laptop => (
//                 <div key={laptop.id} className="laptop-card">
//                   <div className="laptop-image">
//                     <img src={`/laptop-${laptop.id}.jpg`} alt={laptop.model} />
//                   </div>
//                   <div className="laptop-details">
//                     <h3>{laptop.model}</h3>
//                     <p className="price">{laptop.price}</p>
//                     <p className="specs">{laptop.specs}</p>
//                     <p className="condition">Condition: {laptop.condition}</p>
//                     <button>View Details</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Features Section */}
//       {showForm === 'home' && (
//         <section className="features">
//           <div className="container">
//             <h2>Why Choose SwapCell?</h2>
//             <div className="features-grid">
//               <div className="feature">
//                 <h3>Trusted Sellers</h3>
//                 <p>All sellers are verified to ensure genuine products</p>
//               </div>
//               <div className="feature">
//                 <h3>Best Prices</h3>
//                 <p>Get the best deals on used laptops in Nepal</p>
//               </div>
//               <div className="feature">
//                 <h3>Easy Process</h3>
//                 <p>Simple listing and buying process</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-section">
//               <h3>SwapCell</h3>
//               <p>KoBhanchaPurano - Nepal's trusted laptop marketplace</p>
//             </div>
//             <div className="footer-section">
//               <h3>Quick Links</h3>
//               <a href="#" onClick={() => setShowForm('home')}>Home</a>
//               <a href="#">Browse</a>
//               <a href="#" onClick={() => setShowForm('sell')}>Sell</a>
//             </div>
//             <div className="footer-section">
//               <h3>Contact Us</h3>
//               <p>Email: info@swapcell.com</p>
//               <p>Phone: +977 9841XXXXXX</p>
//             </div>
//           </div>
//           <div className="copyright">
//             <p>&copy; {new Date().getFullYear()} SwapCell. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

