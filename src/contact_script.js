function Nav(props){
	return(
	<div className="row navbar">
	
	{/* Navigation Bar */}
	<nav className="row justify-content-md-space-around align-items-lg-center
	align-items-md-center">

		{/*Hamburgers for smaller screens*/}
		<ul className="hamburgers col-2">
		<li id="ham-1"></li>
		<li id="ham-2"></li>
		<li id="ham-3"></li>
		</ul>

		{/* Navigation Links */}
		<ul className="links row col-12 col-md-5"> 
		<li className="col-md-2 active"><a href="index.html">HOME</a></li>
		<li className="col-md-2" style={{"marginRight":"10px"}}><a href="">CLIENTS</a></li>
		<li className="col-md-2"><a href="">ABOUT</a></li>
		<li className="col-md-2"><a href="contact.html">CONTACT</a></li>
		</ul>

		{/* Company Brand Identity */}
		<a className="brand col-8  col-md-5 col-md-align-self-left">Alson</a>


		<span className="fa fa-search col-1"></span>

		
	</nav>

</div>
)
}

function Content(props){
	return(
		<div className="row content">
		<div className="image col-12 col-md-5">
		<img src="media/img4.jpg" />
		<div className="info">
		<h1>Contact Us</h1>
		<p>MASS IMPRESSIONS</p>
		</div>
		<br />
		<a href=""><div className="button">GET DIRECTIONS</div>
		<div className="white"><span className="fas fa-location-arrow">
		</span></div>
		</a>
		</div>


		<div className="details col-12 col-md-6">
		<h1>Alson</h1>
		<p>We would love to hear from you, whether you want more information on
		any of our acts or wish to discover how our models can support 
		your event</p>
		<div className="contact">
		<div className="combined">
		<p><span className="fas fa-home"></span>  House 49 Ramford Street
		Suncity Estate<br />900001</p>
		<p><span className="fas fa-phone"></span> 07034269906 <br />
		08153478903</p></div>
		<p><span className="fas fa-envelope"></span> shayolaw@gmail.com</p>
		</div>
		</div>


		</div>


		)
}
function Decor(props){
	return(
		<div className="decor">
		<div className="box">
		</div>
		</div>)
}
function Footer(props){
	return(
		<div className="footer col-md-12">
		<hr />
		<div className="row">
		<p className="col-12 col-md-8"> &copy; 2020 Engineered By STL For Alson</p>
		<div className="socials row col-12 col-md-4">
		<a href=""><span className="fab fa-facebook-square"></span></a>
		<a href=""><span className="fab fa-twitter"></span></a>
		<a href=""><span className="fab fa-youtube"></span></a>
		<a href=""><span className="fab fa-instagram"></span></a>
		</div>
		</div>
		</div>)
}
function App(props){
	return(
		<div>
		<Nav />
		<Content />
		<Decor />
		<Footer />
		</div>
		)
}
ReactDOM.render(
	<App />,
	document.getElementById('root'))