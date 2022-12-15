"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ dataOverride)
/* harmony export */ });
/* harmony import */ var _sponsors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4358);

const dataOverride = {
    "https://www.meetup.com/lyonjs/events/289494397": {
        sponsor: _sponsors__WEBPACK_IMPORTED_MODULE_0__.indy,
        talks: [
            {
                title: "Introduction aux coroutines en Javascript",
                speakers: [
                    {
                        name: "Laurent Renard"
                    }
                ]
            },
            {
                title: "D\xe9couverte du Web3 avec Javascript",
                speakers: [
                    {
                        name: "Samuel Ronce",
                        socialLink: "https://twitter.com/SamuelRonce"
                    }
                ]
            }
        ]
    },
    "https://www.meetup.com/lyonjs/events/289164485": {
        sponsor: _sponsors__WEBPACK_IMPORTED_MODULE_0__.smile,
        talks: [
            {
                title: "Tour d'horizon des nouveaut\xe9s de Vue3 et son \xe9cosyst\xe8me",
                speakers: [
                    {
                        name: "Quentin Le Caignec"
                    }
                ]
            }
        ]
    },
    "https://www.meetup.com/lyonjs/events/288153025": {
        sponsor: _sponsors__WEBPACK_IMPORTED_MODULE_0__.indy,
        talks: [
            {
                title: "Passer d’un jeu en Flash \xe0 une borne d’arcade en JS",
                speakers: [
                    {
                        name: "Hugo Contreras",
                        socialLink: "https://twitter.com/_hy0ug0_"
                    },
                    {
                        name: "Sylvain Blanc",
                        socialLink: "https://twitter.com/LaSylvBlc"
                    }
                ]
            }
        ]
    },
    "https://www.meetup.com/lyonjs/events/285497869": {
        sponsor: _sponsors__WEBPACK_IMPORTED_MODULE_0__.bedrock,
        talks: [
            {
                title: "Migration progressive vers Redux Toolkit",
                speakers: [
                    {
                        name: "Maxime Blanc",
                        socialLink: "https://twitter.com/jeansmaug"
                    }
                ],
                videoLink: "https://www.youtube.com/embed/YsHiH7qCjKM"
            },
            {
                title: "Comment ne pas jeter son application Frontend tous les deux ans ?",
                speakers: [
                    {
                        name: "Antoine Caron",
                        socialLink: "https://twitter.com/slashgear_"
                    },
                    {
                        name: "Florent Dubost"
                    }
                ],
                videoLink: "https://youtube.com/embed/t36UqNSmybM"
            }
        ]
    },
    "https://www.meetup.com/lyonjs/events/284851207": {
        sponsor: _sponsors__WEBPACK_IMPORTED_MODULE_0__.indy,
        talks: [
            {
                title: "Trucs et astuces pour rendre mongoose moins p\xe9nibles au quotidien",
                speakers: [
                    {
                        name: "Julien"
                    }
                ]
            },
            {
                title: "Quatre ans de d\xe9veloppement d’un framework Node.JS",
                speakers: [
                    {
                        name: "Loic Poullain"
                    }
                ]
            }
        ]
    },
    "https://www.meetup.com/lyonjs/events/284549533": {
        sponsor: _sponsors__WEBPACK_IMPORTED_MODULE_0__.zenika,
        talks: [
            {
                title: "Comment faire un trailer vid\xe9o qui d\xe9chire avec des technos web ?",
                videoLink: "https://www.youtube.com/embed/8nnDOT8b5Oc",
                speakers: [
                    {
                        name: "Micka\xebl Alves",
                        socialLink: "https://twitter.com/cruuzazul"
                    },
                    {
                        name: "Antoine Caron",
                        socialLink: "https://twitter.com/slashgear_"
                    }
                ]
            },
            {
                title: "Pimp my site: Comment dynamiser un site pour attirer les mill\xe9niaux.",
                videoLink: "https://www.youtube.com/embed/IUnMcbLxEnk",
                speakers: [
                    {
                        name: "Julien Sulpis",
                        socialLink: "https://twitter.com/jsulpis"
                    },
                    {
                        name: "Mathieu Mure",
                        socialLink: "https://twitter.com/mathieumure"
                    }
                ]
            }
        ]
    }
};


/***/ }),

/***/ 4358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bedrock": () => (/* binding */ bedrock),
/* harmony export */   "indy": () => (/* binding */ indy),
/* harmony export */   "smile": () => (/* binding */ smile),
/* harmony export */   "zenika": () => (/* binding */ zenika)
/* harmony export */ });
const bedrock = {
    name: "Bedrock Streaming",
    logo: "/sponsors/bedrock.png",
    url: "https://bedrockstreaming.com/"
};
const zenika = {
    name: "Zenika",
    logo: "/sponsors/zenika.svg",
    url: "https://www.zenika.com/"
};
const indy = {
    name: "Indy",
    logo: "/sponsors/indy.svg",
    logoLight: true,
    url: "https://www.indy.fr/"
};
const smile = {
    name: "Smile",
    logo: "/sponsors/smile.png",
    url: "https://www.smile.eu/fr"
};


/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ButtonPrimary),
/* harmony export */   "g": () => (/* binding */ LinkPrimary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const baseClassName = "flex no-underline px-8 py-2 bg-lyonjs-yellow text-black hover:bg-lyonjs-yellow-dark text-lg";
const ButtonPrimary = ({ children , className , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: className ? `${className} ${baseClassName}` : baseClassName,
        ...props,
        children: children
    });
const LinkPrimary = ({ children , className , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: className ? `${className} ${baseClassName}` : baseClassName,
        ...props,
        children: children
    });


/***/ }),

/***/ 1100:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ EventCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9969);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_ButtonPrimary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);
/* harmony import */ var _icons_Pin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6069);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3135);
/* harmony import */ var _atoms_TitleHighlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8351);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_6__]);
react_markdown__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const EventCard = ({ event  })=>{
    const dateParsed = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(event.dateTime);
    const formattedDayAndMonth = lodash_capitalize__WEBPACK_IMPORTED_MODULE_3___default()(dateParsed.format("D MMMM"));
    const formattedYear = dateParsed.format("YYYY");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex mb-4 -ml-4 justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-xl text-right text-lyonjs-yellow bg-zinc-800 inline-block py-3 px-6 rounded-full border-2 border-gray-400",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mr-3 uppercase",
                                "aria-hidden": true,
                                children: "\uD83D\uDCC5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mr-3 uppercase",
                                children: formattedDayAndMonth
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-base",
                                children: formattedYear
                            })
                        ]
                    }),
                    event.sponsor ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-xl flex items-center",
                        children: [
                            "Sponsoris\xe9 par ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-2xl ml-[0.5ch] font-semibold italic",
                                children: event.sponsor.name
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_TitleHighlight__WEBPACK_IMPORTED_MODULE_7__/* .TitleHighlight */ .P, {
                children: event.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col md:flex-row md:gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: event.imageUrl,
                        alt: event.title,
                        className: "object-cover md:w-1/2 md:flex-1"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "flex bg-zinc-800 my-4 p-4 gap-3 items-center text-lyonjs-yellow md:flex-1 md:my-0",
                        href: `http://maps.google.com/maps?q=loc:${event.venue.lat}+${event.venue.lng}`,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Pin__WEBPACK_IMPORTED_MODULE_5__/* .Pin */ .l, {
                                color: "currentColor",
                                size: 18
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    event.sponsor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: event.sponsor.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: event.venue.address
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            event.venue.postalCode,
                                            " ",
                                            event.venue.city
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "font-sans",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    components: {
                        p: ({ node , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "my-4",
                                ...props
                            })
                    },
                    children: event.description
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_atoms_ButtonPrimary__WEBPACK_IMPORTED_MODULE_4__/* .LinkPrimary */ .g, {
                    href: event.eventUrl,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: "R\xe9servez votre place"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ PastEventCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9969);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_Twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2020);





const PastEventCard = ({ event  })=>{
    const dateParsed = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(event.dateTime);
    const formattedDayAndMonth = lodash_capitalize__WEBPACK_IMPORTED_MODULE_3___default()(dateParsed.format("D MMMM"));
    const formattedYear = dateParsed.format("YYYY");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "mb-12",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex mb-4 justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-base text-right text-lyonjs-yellow bg-zinc-800 inline-block py-2 px-4 rounded-full border-2 border-gray-400 -mr-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mr-3 uppercase",
                                "aria-hidden": true,
                                children: "\uD83D\uDCC5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mr-3 uppercase",
                                children: formattedDayAndMonth
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-base",
                                children: formattedYear
                            })
                        ]
                    }),
                    event.sponsor ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "flex items-center",
                        children: [
                            "Sponsoris\xe9 par ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-l ml-[1ch] font-semibold italic",
                                children: event.sponsor.name
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "text-xl mb-5 tracking-wide leading-normal",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "highlight",
                    href: event.eventUrl,
                    target: "_blank",
                    rel: "noreferrer",
                    children: event.title
                })
            }),
            event.talks?.map((talk, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                            className: "text-xl",
                            children: [
                                "\uD83D\uDCE3 ",
                                talk.title
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "flex items-center",
                            children: [
                                "par",
                                talk.speakers.map((speaker)=>speaker.socialLink ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "ml-[1ch] inline-flex items-center hover:underline",
                                        href: speaker.socialLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Twitter__WEBPACK_IMPORTED_MODULE_4__/* .Twitter */ .t, {
                                                color: "currentColor",
                                                size: 16,
                                                className: "inline-block mr-[0.5ch]"
                                            }),
                                            speaker.name
                                        ]
                                    }, speaker.name) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "ml-[1ch]",
                                        children: speaker.name
                                    }, speaker.name))
                            ]
                        }),
                        talk.videoLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                            className: "aspect-video max-w-xl mx-auto my-4",
                            width: "100%",
                            src: talk.videoLink,
                            title: event.title,
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true
                        })
                    ]
                }, index))
        ]
    });
};


/***/ }),

/***/ 6069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Pin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Pin = ({ color , size  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "pin"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: color,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.5 10C18.5 13.9971 16.3 17.3706 12.1839 20.1101C12.0724 20.1843 11.9276 20.1843 11.8161 20.1101C7.70005 17.3706 5.5 13.9971 5.5 10C5.5 6.41015 8.41015 3.5 12 3.5C15.5899 3.5 18.5 6.41015 18.5 10ZM20 10C20 14.6519 17.4032 18.4382 13.015 21.3588C12.4001 21.7681 11.5999 21.7681 10.985 21.3588C6.59679 18.4382 4 14.6519 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10ZM13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.1716 11.5 10.5 10.8284 10.5 10C10.5 9.17157 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
            })
        ]
    });


/***/ }),

/***/ 8119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ fetchMeetupEvents)
});

;// CONCATENATED MODULE: external "graphql-request"
const external_graphql_request_namespaceObject = require("graphql-request");
;// CONCATENATED MODULE: ./modules/meetup/api.ts

const client = new external_graphql_request_namespaceObject.GraphQLClient("https://www.meetup.com/gql");
const query = external_graphql_request_namespaceObject.gql`
  query meetupEvents($id: ID!) {
    group(id: $id) {
      id
      name
      pastEvents(input: { first: 5000 }) {
        edges {
          node {
            title
            description
            eventUrl
            dateTime
            imageUrl
            venue {
              name
              address
              city
              postalCode
              lat
              lng
            }
          }
        }
      }
      upcomingEvents(input: {}) {
        edges {
          node {
            title
            description
            eventUrl
            dateTime
            imageUrl
            venue {
              name
              address
              city
              postalCode
              lat
              lng
            }
          }
        }
      }
    }
  }
`;
const fetchMeetupEvents = async ()=>{
    const meetupEventsResponse = await client.request(query, {
        id: 18305583
    });
    const nextEvent = meetupEventsResponse?.group?.upcomingEvents?.edges?.[0]?.node || null;
    const pastEvents = meetupEventsResponse?.group?.pastEvents?.edges.map((it)=>it.node).reverse() || [];
    return {
        nextEvent,
        pastEvents
    };
};


/***/ }),

/***/ 4122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1831);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_data_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2317);
/* harmony import */ var _data_sponsors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4358);
/* harmony import */ var _modules_header_LyonJSHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6672);
/* harmony import */ var _modules_header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7201);
/* harmony import */ var _modules_event_EventCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1100);
/* harmony import */ var _modules_atoms_TitleHighlight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8351);
/* harmony import */ var _modules_atoms_ButtonPrimary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75);
/* harmony import */ var _modules_event_PastEventCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6171);
/* harmony import */ var _modules_meetup_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_event_EventCard__WEBPACK_IMPORTED_MODULE_8__]);
_modules_event_EventCard__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Article = ({ children , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        className: `min-h-[400px] mb-28 ${className || ""}`,
        children: children
    });
const thisYear = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().year();
const Home = ({ nextEvent , pastEvents  })=>{
    const [displayedYearEvents, setDisplayedYearEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(thisYear);
    const displayedLastEvents = pastEvents.filter((event)=>dayjs__WEBPACK_IMPORTED_MODULE_2___default()(event.dateTime).year() >= displayedYearEvents);
    const displayPreviousYearEvents = ()=>{
        setDisplayedYearEvents(displayedYearEvents - 1);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_header_LyonJSHead__WEBPACK_IMPORTED_MODULE_6__/* .LyonJSHead */ .e, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_header_Header__WEBPACK_IMPORTED_MODULE_7__/* .Header */ .h, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-sm text-gray-400 my-4",
                        children: "Bienvenue au Lyon JS : la communaut\xe9 lyonnaise des utilisateurs de JavaScript"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Article, {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-xl my-4",
                                children: "Prochain \xe9v\xe8nement"
                            }),
                            nextEvent ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_event_EventCard__WEBPACK_IMPORTED_MODULE_8__/* .EventCard */ .K, {
                                event: nextEvent
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col grow justify-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-center",
                                        children: "Pas de prochain LyonJS de trouv\xe9 !"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-center",
                                        children: "Reviens dans quelques jours, le prochain \xe9v\xe8nement ne saurait tarder."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Article, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_atoms_TitleHighlight__WEBPACK_IMPORTED_MODULE_9__/* .TitleHighlight */ .P, {
                                Component: "h2",
                                children: "Sponsors"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid md:grid-cols-5 grid-cols-2 gap-12 mb-4",
                                children: Object.values(_data_sponsors__WEBPACK_IMPORTED_MODULE_5__).map((sponsor)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: sponsor.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: sponsor.logoLight ? "flex items-center bg-white" : "flex items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: sponsor.logo,
                                            alt: sponsor.name,
                                            title: sponsor.name,
                                            className: "object-cover h-auto"
                                        })
                                    }, sponsor.logo))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Article, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_atoms_TitleHighlight__WEBPACK_IMPORTED_MODULE_9__/* .TitleHighlight */ .P, {
                                Component: "h2",
                                children: "Ev\xe8nements pass\xe9s"
                            }),
                            displayedLastEvents?.map((it)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_event_PastEventCard__WEBPACK_IMPORTED_MODULE_11__/* .PastEventCard */ ._, {
                                    event: it
                                }, it.eventUrl)),
                            displayedLastEvents.length !== pastEvents.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_modules_atoms_ButtonPrimary__WEBPACK_IMPORTED_MODULE_10__/* .ButtonPrimary */ .D, {
                                    onClick: displayPreviousYearEvents,
                                    children: [
                                        "Afficher les \xe9v\xe8nements de ",
                                        displayedYearEvents - 1
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const overrideEvent = (event)=>{
    if (event && _data_data_override__WEBPACK_IMPORTED_MODULE_4__/* .dataOverride */ .y[event.eventUrl]) {
        return lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()(event, _data_data_override__WEBPACK_IMPORTED_MODULE_4__/* .dataOverride */ .y[event.eventUrl]);
    }
    return event;
};
const getStaticProps = async ()=>{
    const { nextEvent , pastEvents  } = await (0,_modules_meetup_api__WEBPACK_IMPORTED_MODULE_12__/* .fetchMeetupEvents */ .d)();
    return {
        props: {
            nextEvent: overrideEvent(nextEvent),
            pastEvents: pastEvents.map(overrideEvent)
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 9969:
/***/ ((module) => {

module.exports = require("lodash/capitalize");

/***/ }),

/***/ 1831:
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [523,855,169,152], () => (__webpack_exec__(4122)));
module.exports = __webpack_exports__;

})();