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
		<li className="col-md-2 active"><a href="">HOME</a></li>
		<li className="col-md-2" style={{"marginRight":"10px"}}><a href="">CLIENTS</a></li>
		<li className="col-md-2"><a href="">ABOUT</a></li>
		<li className="col-md-2"><a href="">CONTACT</a></li>
		</ul>

		{/* Company Brand Identity */}
		<a className="brand col-8  col-md-5 col-md-align-self-left">Alson</a>


		<span className="fa fa-search col-1"></span>

		
	</nav>

</div>
)
}

function Top(props){
	return(
		<div className="top">
		<div id="top">
		<img src="media/babe.jpg" />
		<img src="media/babe2.jpg" />
		<img src="media/babe3.jpg" />
		</div>
		<button>ENQUIRE ABOUT ALEX</button>
		<div id="play"><i className="fab fa-google-play"></i></div>
		<div className="track">
		<p className="active"><div></div>01</p>
		<p><div></div>02</p>
		<p><div></div>03</p>
		<p><div></div>04</p>
		</div>
		<div className="info">
		<h3>Alexandra <br /> Onuorah</h3>
		<p>NIGERIAN MODEL</p>
		</div>
		</div>
		)
}


function Profile(props){
	return(
		<div className="profile row col-md-12 align-items-center">
		<img className="col-md-5" src="media/babe5.jpg" />
		<div className="info col-md-5">
		<ul>
		<li><a href="" className="active">PROFILE</a></li>
		<li><a href="">PRESS</a></li>
		<li><a href="">AWARDS</a></li>
		<li><a href="">CREDITS</a></li>
		</ul>
		<h3>Profile.</h3>
		<h5>Alexandra Onuorah is a leading model,actor and all round creative</h5>
		<small><span className="fa fa-star"></span>Young Model 2020</small>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
		non proident
		, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
		<div className="socials col-md-2">
		<ul>
			<li><a href=""><span className="fab fa-facebook-square"></span></a></li>
			<li><a href=""><span className="fab fa-twitter"></span></a></li>
			<li><a href=""><span className="fab fa-instagram"></span></a></li>
			<li><a href=""><span className="fab fa-youtube"></span></a></li>
		</ul>
		</div>
		</div>

		)
}


function Press(props){
	return(
		<div className="press row">
		<div className="info col-md-7">
		<h3>Alexandra Onuorah on Press</h3>
		<div className="bar"></div>
		<Item image="media/babe2.jpg" topic="29 Motivational Quotes For Business And Other Work Environments" date="8 March 2020" />
		<Item image="media/babe3.jpg" topic="5 Reasons To Keep Your Beauy Salon Reservation" date="1st April 2020" />
		<a href="">EXPLORE MORE <span className="fa fa-arrow-right"></span></a>
		</div>
		<img className="col-md-5" height="550px" src="media/babe6.jpg"/>
		</div>
		)
}
function Item(props){
	return(
		<div className="item row ">
		<img src={props.image} div className="col-4 col-md-6"/>
		<div className="dets col-8 col-md-6">
		<h4>{props.topic}</h4>
		<small>{props.date}</small>
		</div>
		</div>
		)
}
function App(props){
	return(
		<div>
		<Nav />
		<Top />
		<Profile />	
		<Press />
		</div>

		)
}




ReactDOM.render(
	<App />,
	document.getElementById('root'))