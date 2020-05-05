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

function Content(props) {
		return React.createElement(
				"div",
				{ className: "row content" },
				React.createElement(
						"div",
						{ className: "image col-12 col-md-5" },
						React.createElement("img", { src: "media/img4.jpg" }),
						React.createElement(
								"div",
								{ className: "info" },
								React.createElement(
										"h1",
										null,
										"Contact Us"
								),
								React.createElement(
										"p",
										null,
										"MASS IMPRESSIONS"
								)
						),
						React.createElement("br", null),
						React.createElement(
								"a",
								{ href: "" },
								React.createElement(
										"div",
										{ className: "button" },
										"GET DIRECTIONS"
								),
								React.createElement(
										"div",
										{ className: "white" },
										React.createElement("span", { className: "fas fa-location-arrow" })
								)
						)
				),
				React.createElement(
						"div",
						{ className: "details col-12 col-md-6" },
						React.createElement(
								"h1",
								null,
								"Alson"
						),
						React.createElement(
								"p",
								null,
								"We would love to hear from you, whether you want more information on any of our acts or wish to discover how our models can support your event"
						),
						React.createElement(
								"div",
								{ className: "contact" },
								React.createElement(
										"div",
										{ className: "combined" },
										React.createElement(
												"p",
												null,
												React.createElement("span", { className: "fas fa-home" }),
												"  House 49 Ramford Street Suncity Estate",
												React.createElement("br", null),
												"900001"
										),
										React.createElement(
												"p",
												null,
												React.createElement("span", { className: "fas fa-phone" }),
												" 07034269906 ",
												React.createElement("br", null),
												"08153478903"
										)
								),
								React.createElement(
										"p",
										null,
										React.createElement("span", { className: "fas fa-envelope" }),
										" shayolaw@gmail.com"
								)
						)
				)
		);
}
function Decor(props) {
		return React.createElement(
				"div",
				{ className: "decor" },
				React.createElement("div", { className: "box" })
		);
}
function Footer(props) {
		return React.createElement(
				"div",
				{ className: "footer col-md-12" },
				React.createElement("hr", null),
				React.createElement(
						"div",
						{ className: "row" },
						React.createElement(
								"p",
								{ className: "col-12 col-md-8" },
								" \xA9 2020 Engineered By STL For Alson"
						),
						React.createElement(
								"div",
								{ className: "socials row col-12 col-md-4" },
								React.createElement(
										"a",
										{ href: "" },
										React.createElement("span", { className: "fab fa-facebook-square" })
								),
								React.createElement(
										"a",
										{ href: "" },
										React.createElement("span", { className: "fab fa-twitter" })
								),
								React.createElement(
										"a",
										{ href: "" },
										React.createElement("span", { className: "fab fa-youtube" })
								),
								React.createElement(
										"a",
										{ href: "" },
										React.createElement("span", { className: "fab fa-instagram" })
								)
						)
				)
		);
}
function App(props) {
		return React.createElement(
				"div",
				null,
				React.createElement(Nav, null),
				React.createElement(Content, null),
				React.createElement(Decor, null),
				React.createElement(Footer, null)
		);
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));