function Nav(props) {
		return React.createElement(
				"div",
				{ className: "row navbar" },
				React.createElement(
						"nav",
						{ className: "row justify-content-md-space-around align-items-lg-center\r align-items-md-center" },
						React.createElement(
								"ul",
								{ className: "hamburgers col-2" },
								React.createElement("li", { id: "ham-1" }),
								React.createElement("li", { id: "ham-2" }),
								React.createElement("li", { id: "ham-3" })
						),
						React.createElement(
								"ul",
								{ className: "links row col-12 col-md-5" },
								React.createElement(
										"li",
										{ className: "col-md-2 active" },
										React.createElement(
												"a",
												{ href: "" },
												"HOME"
										)
								),
								React.createElement(
										"li",
										{ className: "col-md-2", style: { "marginRight": "10px" } },
										React.createElement(
												"a",
												{ href: "" },
												"CLIENTS"
										)
								),
								React.createElement(
										"li",
										{ className: "col-md-2" },
										React.createElement(
												"a",
												{ href: "" },
												"ABOUT"
										)
								),
								React.createElement(
										"li",
										{ className: "col-md-2" },
										React.createElement(
												"a",
												{ href: "" },
												"CONTACT"
										)
								)
						),
						React.createElement(
								"a",
								{ className: "brand col-8  col-md-5 col-md-align-self-left" },
								"Alson"
						),
						React.createElement("span", { className: "fa fa-search col-1" })
				)
		);
}

function Top(props) {
		return React.createElement(
				"div",
				{ className: "top" },
				React.createElement(
						"div",
						{ id: "top" },
						React.createElement("img", { src: "media/babe.jpg" }),
						React.createElement("img", { src: "media/babe2.jpg" }),
						React.createElement("img", { src: "media/babe3.jpg" })
				),
				React.createElement(
						"button",
						null,
						"ENQUIRE ABOUT ALEX"
				),
				React.createElement(
						"div",
						{ id: "play" },
						React.createElement("i", { className: "fab fa-google-play" })
				),
				React.createElement(
						"div",
						{ className: "track" },
						React.createElement(
								"p",
								{ className: "active" },
								React.createElement("div", null),
								"01"
						),
						React.createElement(
								"p",
								null,
								React.createElement("div", null),
								"02"
						),
						React.createElement(
								"p",
								null,
								React.createElement("div", null),
								"03"
						),
						React.createElement(
								"p",
								null,
								React.createElement("div", null),
								"04"
						)
				),
				React.createElement(
						"div",
						{ className: "info" },
						React.createElement(
								"h3",
								null,
								"Alexandra ",
								React.createElement("br", null),
								" Onuorah"
						),
						React.createElement(
								"p",
								null,
								"NIGERIAN MODEL"
						)
				)
		);
}

function Profile(props) {
		return React.createElement(
				"div",
				{ className: "profile row col-md-12 align-items-center" },
				React.createElement("img", { className: "col-md-5", src: "media/babe5.jpg" }),
				React.createElement(
						"div",
						{ className: "info col-md-5" },
						React.createElement(
								"ul",
								null,
								React.createElement(
										"li",
										null,
										React.createElement(
												"a",
												{ href: "", className: "active" },
												"PROFILE"
										)
								),
								React.createElement(
										"li",
										null,
										React.createElement(
												"a",
												{ href: "" },
												"PRESS"
										)
								),
								React.createElement(
										"li",
										null,
										React.createElement(
												"a",
												{ href: "" },
												"AWARDS"
										)
								),
								React.createElement(
										"li",
										null,
										React.createElement(
												"a",
												{ href: "" },
												"CREDITS"
										)
								)
						),
						React.createElement(
								"h3",
								null,
								"Profile."
						),
						React.createElement(
								"h5",
								null,
								"Alexandra Onuorah is a leading model,actor and all round creative"
						),
						React.createElement(
								"small",
								null,
								React.createElement("span", { className: "fa fa-star" }),
								"Young Model 2020"
						),
						React.createElement(
								"p",
								null,
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident , sunt in culpa qui officia deserunt mollit anim id est laborum."
						)
				),
				React.createElement(
						"div",
						{ className: "socials col-md-2" },
						React.createElement(
								"ul",
								null,
								React.createElement(
										"li",
										null,
										React.createElement(
												"a",
												{ href: "" },
												React.createElement("span", { className: "fab fa-facebook-square" })
										)
								),
								React.createElement(
										"li",
										null,
										React.createElement(
												"a",
												{ href: "" },
												React.createElement("span", { className: "fab fa-twitter" })
										)
								),
								React.createElement(
										"li",
										null,
										React.createElement(
												"a",
												{ href: "" },
												React.createElement("span", { className: "fab fa-instagram" })
										)
								),
								React.createElement(
										"li",
										null,
										React.createElement(
												"a",
												{ href: "" },
												React.createElement("span", { className: "fab fa-youtube" })
										)
								)
						)
				)
		);
}

function Press(props) {
		return React.createElement(
				"div",
				{ className: "press row" },
				React.createElement(
						"div",
						{ className: "info col-md-7" },
						React.createElement(
								"h3",
								null,
								"Alexandra Onuorah on Press"
						),
						React.createElement("div", { className: "bar" }),
						React.createElement(Item, { image: "media/babe2.jpg", topic: "29 Motivational Quotes For Business And Other Work Environments", date: "8 March 2020" }),
						React.createElement(Item, { image: "media/babe3.jpg", topic: "5 Reasons To Keep Your Beauy Salon Reservation", date: "1st April 2020" }),
						React.createElement(
								"a",
								{ href: "" },
								"EXPLORE MORE ",
								React.createElement("span", { className: "fa fa-arrow-right" })
						)
				),
				React.createElement("img", { className: "col-md-5", height: "550px", src: "media/babe6.jpg" })
		);
}
function Item(props) {
		return React.createElement(
				"div",
				{ className: "item row " },
				React.createElement("img", { src: props.image, div: true, className: "col-4 col-md-6" }),
				React.createElement(
						"div",
						{ className: "dets col-8 col-md-6" },
						React.createElement(
								"h4",
								null,
								props.topic
						),
						React.createElement(
								"small",
								null,
								props.date
						)
				)
		);
}
function App(props) {
		return React.createElement(
				"div",
				null,
				React.createElement(Nav, null),
				React.createElement(Top, null),
				React.createElement(Profile, null),
				React.createElement(Press, null)
		);
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));