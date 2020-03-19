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

function Decor(props) {
		return React.createElement(
				"div",
				{ className: "decor" },
				React.createElement("div", { className: "box col-md-4" }),
				React.createElement(
						"div",
						{ className: "socials col-12 col-md-1" },
						React.createElement(
								"ul",
								null,
								React.createElement("li", { className: "fab fa-facebook-square" }),
								React.createElement("li", { className: "fab fa-instagram active" }),
								React.createElement("li", { className: "fab fa-youtube" }),
								React.createElement("li", { className: "fab fa-twitter" })
						),
						React.createElement(
								"div",
								{ className: "number" },
								React.createElement("span", { className: "bar" }),
								React.createElement(
										"p",
										null,
										"02"
								)
						)
				),
				React.createElement(
						"div",
						{ "class": "track" },
						React.createElement(
								"ul",
								null,
								React.createElement(
										"li",
										null,
										"01 ",
										React.createElement("div", { className: "bar" })
								),
								React.createElement(
										"li",
										{ className: "active" },
										"02 ",
										React.createElement("div", { className: "bar" })
								),
								React.createElement(
										"li",
										null,
										"03 ",
										React.createElement("div", { className: "bar" })
								),
								React.createElement(
										"li",
										null,
										"04 ",
										React.createElement("div", { className: "bar" })
								)
						)
				)
		);
}
function Top(props) {
		return React.createElement(
				"div",
				{ id: "top" },
				React.createElement(
						"div",
						{ className: "info offset-md-2" },
						React.createElement(
								"h2",
								null,
								"Alexandra ",
								React.createElement("br", null),
								" Onuorah"
						),
						React.createElement(
								"p",
								null,
								"YOUNG MODEL 2020"
						)
				),
				React.createElement(
						"div",
						{ className: "top-cover col-md-8" },
						React.createElement(
								"div",
								{ className: "top " },
								React.createElement("img", { src: "media/babe.jpg" }),
								React.createElement("img", { src: "media/babe2.jpg" }),
								React.createElement("img", { src: "media/babe3.jpg" }),
								React.createElement(
										"button",
										{ className: "button" },
										React.createElement("span", { className: "fab fa-google-play" })
								)
						)
				),
				React.createElement(
						"button",
						{ className: "profile-button offset-md-2" },
						"VIEW PROFILE"
				)
		);
}

function Models(props) {
		return React.createElement(
				"div",
				{ className: "models" },
				React.createElement(
						"h3",
						null,
						"Our Models"
				),
				React.createElement(
						"div",
						{ className: "list row col-12 justify-content-center" },
						React.createElement(Model, { name: "Alexandra Onuorah", image: "media/babe4.jpg", address: "" }),
						React.createElement(Model, { name: "Keith RIchards", image: "media/img.jpg", address: "" }),
						React.createElement(Model, { name: "Max Onuorah", image: "media/img2.jpg", address: "" }),
						React.createElement(Model, { name: "Keith Alex", image: "media/img3.jpg", address: "" }),
						React.createElement(Model, { name: "Pete Onuorah", image: "media/img4.jpg", address: "" }),
						React.createElement(Model, { name: "James RIchards", image: "media/img5.jpg", address: "" }),
						React.createElement(Model, { name: "Sayo Onuorah", image: "media/img6.jpg", address: "" }),
						React.createElement(Model, { name: "Law RIchards", image: "media/img7.jpg", address: "" })
				)
		);
}
function Model(props) {
		return React.createElement(
				"a",
				{ href: props.address, className: "model col-md-3" },
				React.createElement("img", { src: props.image, className: "col-md-12" }),
				React.createElement(
						"div",
						{ className: "info" },
						React.createElement(
								"h4",
								null,
								props.name
						),
						React.createElement(
								"p",
								null,
								"MODEL"
						)
				)
		);
}
function App(props) {
		return React.createElement(
				"div",
				null,
				React.createElement(Nav, null),
				React.createElement(Decor, null),
				React.createElement(Top, null),
				React.createElement(Models, null)
		);
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));