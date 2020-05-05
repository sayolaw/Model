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
		<li className="col-md-2"><a href="contact.html">CONTACT</a></li>
		</ul>

		{/* Company Brand Identity */}
		<a className="brand col-8  col-md-5 col-md-align-self-left">Alson</a>


		<span className="fa fa-search col-1"></span>

		
	</nav>

</div>
)
}

function Decor(props){
	return(
			<div className="decor">
			<div className="box col-md-4">
			</div>
			<div className="socials col-12 col-md-1">
			<ul>
			<li className="fab fa-facebook-square"></li>
			<li className="fab fa-instagram active"></li>
			<li className="fab fa-youtube"></li>
			<li className="fab fa-twitter"></li>
			</ul>
			<div className="number">
			<span className="bar"></span>
			<p>02</p>
			</div>
			</div>
			<div class="track">
			<ul>
			<li>01 <div className="bar"></div></li>
			<li className="active">02 <div className="bar"></div></li>
			<li>03 <div className="bar"></div></li>
			<li>04 <div className="bar"></div></li>
			</ul>
			
			</div>
			</div>


		)
}
function Top(props){
	return(
		<div id="top">
		<div className="info offset-md-2">
		<h2>Alexandra <br /> Onuorah</h2>
		<p>YOUNG MODEL 2020</p>
		</div>
		<div className="top-cover col-12 col-md-8">
		<div className="top col-12">
		<img src="media/babe.jpg" className="col-12" />
		<img src="media/babe2.jpg" className="col-12" />
		<img src="media/babe3.jpg" className="col-12" />
		<button className="button"><span className="fab fa-google-play"></span>
		</button>
		</div>
		</div>
		<button className="profile-button offset-md-2"><a href="profile.html">VIEW PROFILE</a></button>
		</div>
		)
}


function Models(props){
	return(
		<div className="models ">
		<h3>Our Models</h3>
		<div className="list row col-12 justify-content-center">
		<Model name="Alexandra Onuorah" image="media/babe4.jpg" address="profile.html"/>
		<Model  name="Keith RIchards" image="media/img.jpg" address="profile.html" />
		<Model name="Max Onuorah" image="media/img2.jpg" address="profile.html"/>
		<Model  name="Keith Alex" image="media/img3.jpg" address="profile.html" />
		<Model name="Pete Onuorah" image="media/img4.jpg" address="profile.html"/>
		<Model  name="James RIchards" image="media/img5.jpg" address="profile.html" />
		<Model name="Sayo Onuorah" image="media/img6.jpg" address="profile.html"/>
		<Model  name="Law RIchards" image="media/img7.jpg" address="profile.html" />
		<button className="col-md-2">EXPLORE MORE</button>
		</div>
		
		
		</div>
		)
}
function Model(props){
	return(
		<a href={props.address} className="model col-md-3">
		<img src={props.image} className="col-md-12" />
		<div className="info">
		<h4>{props.name}</h4>
		<p>MODEL</p>
		</div>
		
		</a>
		)
}
function News(props){
	return(
		<div className="news">
		<h3>Latest News</h3>
		<div className="bar"></div>
		<div className="news-items row">
		<div className="col-12 col-md-7">
		<Newsini image="media/img5.jpg"  topic="Five Reasons To Keep Your Beauty Salon Reservation" date="20th March 2020"/>
		<div className="row col-12">
		<Newsitem image="media/img7.jpg"  topic="Motivation And Your Personal Vision An Unbeateable Force" date="12th Febuary 2020"/>
		<Newsitem image="media/img8.jpg"  topic="Dream Interpretation Common Symbols And Their Meanings" date="10th Febuary 2020"/>
		</div>
		</div>
		<Item image="media/img6.jpg"  topic="29 Motivational Quotes For Business And Other Work Environments" date="19th March 2020"/>
		</div>
		</div>
		)
}
function Newsitem(props){
	return(
		<div className="item col-6">
		<img src={props.image} className="col-12" />
		<div className="info">
		<h4>{props.topic}</h4>
		<p>{props.date}</p>
		</div>
		</div>
		)

}
function Newsini(props){
	return(
		<div className="ini">
		<div className="info col-5 col-md-4">
		<h4>{props.topic}</h4>
		<p>{props.date}</p>
		</div>
		<img src={props.image} className="col-12" />
		
		</div>
		)

}
function Item(props){
	return(
		<div className="last-item col-md-5">
		<img src={props.image} className="col-12" />
		<div className="info">
		<h4>{props.topic}</h4>
		<p>{props.date}</p>
		</div>
		</div>
		)

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
		<Decor />
		<Top />
		<Models />
		<News />
		<Footer />
		</div>

		)
}




ReactDOM.render(
	<App />,
	document.getElementById('root'))