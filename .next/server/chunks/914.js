exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 45609:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 31535:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 47583));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34171));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50230));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50633));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 63182));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 31920));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89708, 23))

/***/ }),

/***/ 56770:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2447))

/***/ }),

/***/ 2447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/config/config.json
var config = __webpack_require__(82503);
;// CONCATENATED MODULE: ./src/config/theme.json
const theme_namespaceObject = JSON.parse('{"R":{"k":{"T$":"Heebo:wght@400;600","BD":"Inter:wght@500;700"}}}');
;// CONCATENATED MODULE: ./src/layouts/helpers/TwSizeIndicator.tsx

const TwSizeIndicator = ()=>{
    if (false) {} else {
        return null;
    }
};
/* harmony default export */ const helpers_TwSizeIndicator = (TwSizeIndicator);

// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(71072);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./src/layouts/components/Logo.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Logo = ({ src })=>{
    // destructuring items from config object
    const { logo, logo_darkmode, logo_width, logo_height, logo_text, title } = config.site;
    const { theme, resolvedTheme } = (0,dist/* useTheme */.F)();
    const [mounted, setMounted] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>setMounted(true), []);
    const resolvedLogo = mounted && (theme === "dark" || resolvedTheme === "dark") ? logo_darkmode : logo;
    const logoPath = src ? src : resolvedLogo;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        className: "navbar-brand inline-block",
        children: logoPath ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            width: logo_width.replace("px", "") * 2,
            height: logo_height.replace("px", "") * 2,
            src: logoPath,
            alt: title,
            priority: true,
            style: {
                height: logo_height.replace("px", "") + "px",
                width: logo_width.replace("px", "") + "px"
            }
        }) : logo_text ? logo_text : title
    });
};
/* harmony default export */ const components_Logo = (Logo);

// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.esm.js
var index_esm = __webpack_require__(56082);
;// CONCATENATED MODULE: ./src/layouts/helpers/DynamicIcon.tsx


const iconLibraries = {
    fa: index_esm
};
const DynamicIcon = ({ icon, ...props })=>{
    const IconLibrary = getIconLibrary(icon);
    const Icon = IconLibrary ? IconLibrary[icon] : undefined;
    if (!Icon) {
        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "text-sm",
            children: "Icon not found"
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
        ...props
    });
};
const getIconLibrary = (icon)=>{
    const libraryKey = [
        ...icon
    ].reduce((lib, letter, i)=>{
        if (letter === letter.toUpperCase() && lib === "" && i > 0) {
            return icon.slice(0, i).toLowerCase();
        }
        return lib;
    }, "");
    return iconLibraries[libraryKey];
};
/* harmony default export */ const helpers_DynamicIcon = (DynamicIcon);

;// CONCATENATED MODULE: ./src/layouts/components/Social.tsx


const Social = ({ source, className })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: className,
        children: source.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    "aria-label": social.name,
                    href: social.link,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: social.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(helpers_DynamicIcon, {
                            className: "inline-block",
                            icon: social.icon
                        })
                    ]
                })
            }, social.name))
    });
};
/* harmony default export */ const components_Social = (Social);

;// CONCATENATED MODULE: ./src/config/menu.json
const menu_namespaceObject = JSON.parse('{"main":[{"name":"Trang chủ","link":"/"},{"name":"Giải pháp","link":"/solutions","hasChildren":true,"children":[]},{"name":"Dịch vụ","link":"/services","hasChildren":true,"children":[]},{"name":"Tin tức","link":"/blog"},{"name":"Liên hệ","link":"/contact"},{"name":"Về Liên Phát","link":"/about"}],"footer":[{"name":"Elements","url":"/elements"},{"name":"Privacy Policy","url":"/privacy-policy"},{"name":"Pages","url":"","hasChildren":true,"children":[{"name":"Elements","url":"/elements"},{"name":"Blog","url":"/blog"},{"name":"Categories","url":"/categories"},{"name":"Search","url":"/search"},{"name":"404 Page","url":"/404"}]}]}');
;// CONCATENATED MODULE: ./src/config/social.json
const social_namespaceObject = JSON.parse('{"D":[{"name":"facebook","icon":"FaFacebook","link":"https://www.facebook.com/LienPhatTechnologyCorporation/"},{"name":"twitter","icon":"FaTwitter","link":"https://twitter.com/"},{"name":"github","icon":"FaGithub","link":"https://www.github.com/"},{"name":"linkedin","icon":"FaLinkedin","link":"https://www.linkedin.com/company/lien-phat-technology-corporation/"}]}');
// EXTERNAL MODULE: ./src/lib/utils/textConverter.ts
var textConverter = __webpack_require__(47184);
;// CONCATENATED MODULE: ./src/layouts/partials/Footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Footer = ()=>{
    const { copyright } = config.params;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-theme-light dark:bg-darkmode-theme-light",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row items-center py-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-8 text-center lg:col-3 lg:mb-0 lg:text-left",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-8 text-center lg:col-6 lg:mb-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: menu_namespaceObject.footer.map((menu)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "m-3 inline-block",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: menu.url,
                                            children: menu.name
                                        })
                                    }, menu.name))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Social, {
                                source: social_namespaceObject.D,
                                className: "social-icons"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t border-border py-7 dark:border-darkmode-border",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container text-center text-light dark:text-darkmode-light",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        dangerouslySetInnerHTML: (0,textConverter/* markdownify */.gI)(copyright)
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const partials_Footer = (Footer);

// EXTERNAL MODULE: ./src/feature/changeLanguage/changeLanguageSlice.tsx
var changeLanguageSlice = __webpack_require__(48465);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
;// CONCATENATED MODULE: ./src/layouts/components/ThemeSwitcher.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const ThemeSwitcher = ({ className })=>{
    const { theme_switcher } = config.settings;
    const [mounted, setMounted] = (0,react_.useState)(false);
    const { theme, setTheme, resolvedTheme } = (0,dist/* useTheme */.F)();
    (0,react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    const dispatch = (0,lib.useDispatch)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: theme_switcher && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `theme-switcher ${className}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    id: "theme-switcher",
                    type: "checkbox",
                    defaultChecked: mounted && (theme === "dark" || resolvedTheme === "dark"),
                    onClick: ()=>dispatch((0,changeLanguageSlice/* changeLanguage */.D0)())
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    htmlFor: "theme-switcher",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "theme switcher"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "absolute left-[4px] top-[4px] z-10 opacity-100 dark:opacity-0",
                                    viewBox: "0 0 56 56",
                                    fill: "#fff",
                                    height: "16",
                                    width: "16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M30 4.6c0-1-.9-2-2-2a2 2 0 0 0-2 2v5c0 1 .9 2 2 2s2-1 2-2Zm9.6 9a2 2 0 0 0 0 2.8c.8.8 2 .8 2.9 0L46 13a2 2 0 0 0 0-2.9 2 2 0 0 0-3 0Zm-26 2.8c.7.8 2 .8 2.8 0 .8-.7.8-2 0-2.9L13 10c-.7-.7-2-.8-2.9 0-.7.8-.7 2.1 0 3ZM28 16a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12Zm23.3 14c1.1 0 2-.9 2-2s-.9-2-2-2h-4.9a2 2 0 0 0-2 2c0 1.1 1 2 2 2ZM4.7 26a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4.9c1 0 2-.9 2-2s-1-2-2-2Zm37.8 13.6a2 2 0 0 0-3 0 2 2 0 0 0 0 2.9l3.6 3.5a2 2 0 0 0 2.9 0c.8-.8.8-2.1 0-3ZM10 43.1a2 2 0 0 0 0 2.9c.8.7 2.1.8 3 0l3.4-3.5c.8-.8.8-2.1 0-2.9-.8-.8-2-.8-2.9 0Zm20 3.4c0-1.1-.9-2-2-2a2 2 0 0 0-2 2v4.9c0 1 .9 2 2 2s2-1 2-2Z"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "absolute left-[4px] top-[4px] z-10 opacity-0 dark:opacity-100",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    height: "16",
                                    width: "16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fill: "#000",
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M8.2 2.2c1-.4 2 .6 1.6 1.5-1 3-.4 6.4 1.8 8.7a8.4 8.4 0 0 0 8.7 1.8c1-.3 2 .5 1.5 1.5v.1a10.3 10.3 0 0 1-9.4 6.2A10.3 10.3 0 0 1 3.2 6.7c1-2 2.9-3.5 4.9-4.4Z"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_ThemeSwitcher = (ThemeSwitcher);

;// CONCATENATED MODULE: ./src/config/menuEn.json
const menuEn_namespaceObject = JSON.parse('{"main":[{"name":"Home","link":"/"},{"name":"Solutions","link":"/solutions","hasChildren":true,"children":[]},{"name":"Services","link":"/services","hasChildren":true,"children":[]},{"name":"News","link":"/blog"},{"name":"Contact Us","link":"/contact"},{"name":"About Us","link":"/about"}],"footer":[{"name":"Elements","url":"/elements"},{"name":"Privacy Policy","url":"/privacy-policy"},{"name":"Pages","url":"","hasChildren":true,"children":[{"name":"Elements","url":"/elements"},{"name":"Blog","url":"/blog"},{"name":"Categories","url":"/categories"},{"name":"Search","url":"/search"},{"name":"404 Page","url":"/404"}]}]}');
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.js
var io5 = __webpack_require__(79573);
;// CONCATENATED MODULE: ./src/lib/utils/use-scroll.ts

function useScroll(threshold) {
    const [scrolled, setScrolled] = (0,react_.useState)(false);
    const onScroll = (0,react_.useCallback)(()=>{
        setScrolled(window.pageYOffset > threshold);
    }, [
        threshold
    ]);
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, [
        onScroll
    ]);
    return scrolled;
}

// EXTERNAL MODULE: ./src/feature/data/dataSlice.tsx
var dataSlice = __webpack_require__(5270);
;// CONCATENATED MODULE: ./src/layouts/partials/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













//  child navigation link interface
const Header = ()=>{
    // distructuring the main menu from menu object
    const curlanguage = (0,lib.useSelector)(changeLanguageSlice/* language */.dK);
    const { main } = curlanguage.changeLanguage.value == "en" ? menuEn_namespaceObject : menu_namespaceObject;
    const companyInfo = (0,lib.useSelector)(dataSlice/* company */.S9);
    const servicesMenu = companyInfo.data.value.product.filter((item)=>item.type == "service");
    main[1].children = companyInfo.data.value.product.filter((item)=>item.type == "solution");
    main[2].children = servicesMenu[0].content;
    const { navigation_button, settings } = config;
    // get current path
    const pathname = (0,navigation.usePathname)();
    // scroll to top on route change
    (0,react_.useEffect)(()=>{
        window.scroll(0, 0);
    }, [
        pathname
    ]);
    const scrolled = useScroll(50);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `fixed top-0 w-full flex justify-center ${scrolled ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl" : "bg-white/0"} z-30 transition-all`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "navbar container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "order-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    id: "nav-toggle",
                    type: "checkbox",
                    className: "hidden"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    id: "show-button",
                    htmlFor: "nav-toggle",
                    className: "order-3 flex cursor-pointer items-center text-dark dark:text-white lg:order-1 lg:hidden",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "h-6 fill-current",
                        viewBox: "0 0 20 20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu Open"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    id: "hide-button",
                    htmlFor: "nav-toggle",
                    className: "order-3 hidden cursor-pointer items-center text-dark dark:text-white lg:order-1",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "h-6 fill-current",
                        viewBox: "0 0 20 20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu Close"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                points: "11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2",
                                transform: "rotate(45 10 10)"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    id: "nav-menu",
                    className: "navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8",
                    children: [
                        main.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx((react_default()).Fragment, {
                                children: menu.hasChildren ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item nav-dropdown group relative",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            className: `nav-link inline-flex items-center ${menu.children?.map(({ url })=>url).includes(pathname) || menu.children?.map(({ url })=>`${url}/`).includes(pathname) ? "active" : ""}`,
                                            href: menu.link,
                                            children: [
                                                menu.name,
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    className: "h-4 w-4 fill-current",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100",
                                            children: menu.children?.map((child, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "nav-dropdown-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: child.link,
                                                        className: `nav-dropdown-link block ${(pathname === `${child.link}/` || pathname === child.link) && "active"}`,
                                                        children: curlanguage.changeLanguage.value == "en" ? child.titleEn : child.title
                                                    })
                                                }, `children-${i}`))
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: menu.link,
                                        className: `nav-link block ${(pathname === `${menu.link}/` || pathname === menu.link) && "active"}`,
                                        children: menu.name
                                    })
                                })
                            }, `menu-${i}`)),
                        navigation_button.enable && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mt-4 inline-block lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "btn btn-outline-primary btn-sm",
                                href: navigation_button.link,
                                children: navigation_button.label
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "order-1 ml-auto flex items-center md:order-2 lg:ml-0",
                    children: [
                        settings.search && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white",
                            href: `/search`,
                            "aria-label": "search",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(io5/* IoSearch */.eaK, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitcher, {
                            className: "mr-5"
                        }),
                        navigation_button.enable && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "btn btn-outline-primary btn-sm hidden lg:inline-block",
                            href: navigation_button.link,
                            children: navigation_button.label
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const partials_Header = (Header);

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
;// CONCATENATED MODULE: ./src/feature/search/searchSlice.tsx

const initialState = {
    value: []
};
const searchNews = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "search",
    initialState,
    reducers: {
        search: (state)=>{
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        }
    }
});
// Action creators are generated for each case reducer function
const { search } = searchNews.actions;
const searchResult = (state)=>state;
/* harmony default export */ const searchSlice = (searchNews.reducer);

;// CONCATENATED MODULE: ./src/store/store.tsx




const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        changeLanguage: changeLanguageSlice/* default */.ZP,
        searchNews: searchSlice,
        data: dataSlice/* default */.ZP
    }
});

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(5274);
;// CONCATENATED MODULE: ./src/app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function RootLayout({ children }) {
    // import google font css
    const pf = theme_namespaceObject.R.k.T$;
    const sf = theme_namespaceObject.R.k.BD;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        suppressHydrationWarning: true,
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: config/* site.favicon */.site.yb
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-name",
                        content: "nextplate"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#000000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        media: "(prefers-color-scheme: light)",
                        content: "#fff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        media: "(prefers-color-scheme: dark)",
                        content: "#000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: `https://fonts.googleapis.com/css2?family=${pf}${sf ? "&family=" + sf : ""}&display=swap`,
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                suppressHydrationWarning: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib.Provider, {
                    store: store,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(helpers_TwSizeIndicator, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(partials_Header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(partials_Footer, {})
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 48465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D0: () => (/* binding */ changeLanguage),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dK: () => (/* binding */ language)
/* harmony export */ });
/* unused harmony export changeLanguge */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    value: "vn"
};
const changeLanguge = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "language",
    initialState,
    reducers: {
        changeLanguage: (state)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            if (state.value == "vn") {
                state.value = "en";
            } else {
                state.value = "vn";
            }
        }
    }
});
// Action creators are generated for each case reducer function
const { changeLanguage } = changeLanguge.actions;
const language = (state)=>state;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeLanguge.reducer);


/***/ }),

/***/ 5270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S9: () => (/* binding */ company),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports searchCompany, fetchPosts, companyData */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    value: {
        id: "1",
        companyName: "LienPhat Technology Company",
        companyDescription: {
            content: "&nbsp;C&ocirc;ng ty Cổ Phần C&ocirc;ng Nghệ Li&ecirc;n Ph&aacute;t được th&agrave;nh lập từ đầu năm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>2013, với nền tảng l&agrave; đội ngũ chuy&ecirc;n gia v&agrave; kỹ sư c&oacute; gần 10 năm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>kinh nghiệm trong lĩnh vực C&ocirc;ng Nghệ Th&ocirc;ng Tin. Với thế mạnh của &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>một C&ocirc;ng ty h&agrave;ng đầu trong lĩnh vực cung cấp sản phẩm v&agrave; t&iacute;ch &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>hợp giải ph&aacute;p C&ocirc;ng Nghệ, ch&uacute;ng t&ocirc;i đ&atilde; cung cấp v&agrave; triển khai &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>th&agrave;nh c&ocirc;ng c&aacute;c g&oacute;i sản phẩm dịch vụ, giải ph&aacute;p v&agrave; t&iacute;ch hợp hệ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>thống cho Qu&yacute; kh&aacute;ch h&agrave;ng lớn trong nhiều lĩnh vực như: Ng&acirc;n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>h&agrave;ng, chuỗi b&aacute;n lẻ, sản xuất, kho vận, c&aacute;c doanh nghiệp trong v&agrave; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>ngo&agrave;i nước&hellip;",
            imgSrc: {
                type: "about",
                src: "/images/about/lpc_team.jpeg"
            }
        },
        companyDescriptionEn: {
            content: "&nbsp;C&ocirc;ng ty Cổ Phần C&ocirc;ng Nghệ Li&ecirc;n Ph&aacute;t được th&agrave;nh lập từ đầu năm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>2013, với nền tảng l&agrave; đội ngũ chuy&ecirc;n gia v&agrave; kỹ sư c&oacute; gần 10 năm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>kinh nghiệm trong lĩnh vực C&ocirc;ng Nghệ Th&ocirc;ng Tin. Với thế mạnh của &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>một C&ocirc;ng ty h&agrave;ng đầu trong lĩnh vực cung cấp sản phẩm v&agrave; t&iacute;ch &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>hợp giải ph&aacute;p C&ocirc;ng Nghệ, ch&uacute;ng t&ocirc;i đ&atilde; cung cấp v&agrave; triển khai &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>th&agrave;nh c&ocirc;ng c&aacute;c g&oacute;i sản phẩm dịch vụ, giải ph&aacute;p v&agrave; t&iacute;ch hợp hệ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>thống cho Qu&yacute; kh&aacute;ch h&agrave;ng lớn trong nhiều lĩnh vực như: Ng&acirc;n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>h&agrave;ng, chuỗi b&aacute;n lẻ, sản xuất, kho vận, c&aacute;c doanh nghiệp trong v&agrave; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>ngo&agrave;i nước&hellip;",
            imgSrc: {
                type: "about",
                src: "/images/about/lpc_team.jpeg"
            }
        },
        companyCore: {
            content: "LPC li&ecirc;n tục cải tiến trong mọi lĩnh vực hoạt động để ph&aacute;t triển &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>v&agrave; tạo ra những sản phẩm dịch vụ c&oacute; gi&aacute; trị hơn cho Kh&aacute;ch H&agrave;ng. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>Ch&uacute;ng t&ocirc;i lu&ocirc;n sẵn s&agrave;ng đ&aacute;p ứng c&ocirc;ng việc với sự chuy&ecirc;n nghiệp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>cao v&agrave; chu đ&aacute;o đến từng chi tiết nhỏ. Mang lại sự gi&agrave;u c&oacute;, hạnh &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>ph&uacute;c cho mỗi th&agrave;nh vi&ecirc;n, đồng thời g&oacute;p phần v&agrave;o sự tiến bộ của &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>x&atilde; hội đ&oacute; cũng l&agrave; tr&aacute;ch nhiệm v&agrave; nghĩa vụ của ch&uacute;ng t&ocirc;i.",
            imgSrc: {
                type: "about",
                src: "/images/about/lpc_teambuilding.jpeg"
            }
        },
        companyCoreEn: {
            content: "LPC li&ecirc;n tục cải tiến trong mọi lĩnh vực hoạt động để ph&aacute;t triển &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>v&agrave; tạo ra những sản phẩm dịch vụ c&oacute; gi&aacute; trị hơn cho Kh&aacute;ch H&agrave;ng. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>Ch&uacute;ng t&ocirc;i lu&ocirc;n sẵn s&agrave;ng đ&aacute;p ứng c&ocirc;ng việc với sự chuy&ecirc;n nghiệp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>cao v&agrave; chu đ&aacute;o đến từng chi tiết nhỏ. Mang lại sự gi&agrave;u c&oacute;, hạnh &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>ph&uacute;c cho mỗi th&agrave;nh vi&ecirc;n, đồng thời g&oacute;p phần v&agrave;o sự tiến bộ của &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>x&atilde; hội đ&oacute; cũng l&agrave; tr&aacute;ch nhiệm v&agrave; nghĩa vụ của ch&uacute;ng t&ocirc;i.",
            imgSrc: {
                type: "about",
                src: "/images/about/lpc_teambuilding.jpeg"
            }
        },
        milestone: {
            type: "about",
            src: "/images/about/wm.png"
        },
        companyAddress: {
            address: [
                {
                    content: "VP 5B-9B, T\xf2a nh\xe0 AS, 236-238 Nguyễn C\xf4ng Trứ, P.Nguyễn Th\xe1i B\xecnh, Quận 1, TP.HCM",
                    contentEn: "VP 5B-9B, T\xf2a nh\xe0 AS, 236-238 Nguyễn C\xf4ng Trứ, P.Nguyễn Th\xe1i B\xecnh, Quận 1, TP.HCM",
                    title: ""
                }
            ],
            addressLink: {
                content: "https://www.google.com/maps/place/Lien+Phat+Technology+Corporation+(C%C3%B4ng+Ty+C%E1%BB%95+Ph%E1%BA%A7n+C%C3%B4ng+Ngh%E1%BB%87+Li%C3%AAn+Ph%C3%A1t)/@10.7679955,106.6991394,17z/data=!4m6!3m5!1s0x31752f40068b5a77:0xf80e4fdadaba9c43!8m2!3d10.7677951!4d106.7002114!16s%2Fg%2F11cssys_4g?hl=vi-VN&entry=ttu",
                title: ""
            }
        },
        comapnySocialAccount: [
            {
                platform: "Meta",
                link: "https://www.facebook.com/LienPhatTechnologyCorporation/",
                name: "LienPhat Technology Company"
            }
        ],
        companyContact: [
            {
                type: "phonenumber",
                content: "28 3821 6688"
            },
            {
                type: "phonenumber",
                content: "28 3821 6684"
            },
            {
                type: "email",
                content: "info@lp.com.vn"
            }
        ],
        companyWebsite: "https://www.lp.com.vn/",
        companyImage: [
            {
                type: "banner",
                src: "https://res.cloudinary.com/derjssgq9/image/upload/v1690527395/banner5_w8mjkg.jpg"
            }
        ],
        companyNewCatagory: [
            "Events",
            "Security"
        ],
        companyNewTag: [
            "LPC",
            "Palo Alto Networks",
            "Platinum Innovator",
            "FPT Smart Cloud",
            "LPC",
            "Chuyển đổi số",
            "VMware ESXi",
            "CVE-2021-21974",
            "Ransomware",
            "Veeam",
            "CVE-2023-27532",
            "Lỗ hổng bảo mật"
        ],
        companyNews: [
            {
                id: "post-1",
                title: "Hợp t\xe1c cung cấp giải ph\xe1p chuyển đổi số với c\xf4ng nghệ điện to\xe1n đ\xe1m m\xe2y v\xe0 tr\xed tuệ nh\xe2n tạo",
                titleEn: "Hợp t\xe1c cung cấp giải ph\xe1p chuyển đổi số với c\xf4ng nghệ điện to\xe1n đ\xe1m m\xe2y v\xe0 tr\xed tuệ nh\xe2n tạo",
                meta_title: "",
                description: "this is meta description",
                date: "2023-06-04T05:00:00Z",
                image: "/images/news/news_1.png",
                categories: [
                    "Events"
                ],
                author: "Khoa Nguyễn",
                tags: [
                    "FPT Smart Cloud",
                    "LPC",
                    "Chuyển đổi số"
                ],
                draft: false,
                content: "<br>VTV.vn - Ng&agrave;y 10/8, FPT Smart Cloud v&agrave; C&ocirc;ng ty cổ phần C&ocirc;ng nghệ Li&ecirc;n Ph&aacute;t đ&atilde; k&yacute; kết thỏa thuận hợp t&aacute;c cung cấp c&aacute;c giải ph&aacute;p chuyển đổi số với c&ocirc;ng nghệ FPT.Cloud v&agrave; FPT.AI.<br>Theo thoả thuận, C&ocirc;ng ty cổ phần C&ocirc;ng nghệ Li&ecirc;n Ph&aacute;t (LPC) sẽ giới thiệu c&aacute;c giải ph&aacute;p FPT.AI v&agrave; FPT.Cloud tới kh&aacute;ch h&agrave;ng, gi&uacute;p họ nhanh ch&oacute;ng ứng dụng c&ocirc;ng nghệ cao, n&acirc;ng cao hiệu suất hoạt động, tối ưu ho&aacute; chi ph&iacute; v&agrave; cải thiện trải nghiệm kh&aacute;ch h&agrave;ng, hiện đại h&oacute;a hạ tầng c&ocirc;ng nghệ th&ocirc;ng tin một c&aacute;ch đồng bộ trong h&agrave;nh tr&igrave;nh chuyển đối số.<br>Đồng thời, hai c&ocirc;ng ty sẽ tiến h&agrave;nh c&aacute;c hoạt động nghi&ecirc;n cứu thị trường, X&acirc;y dựng m&ocirc; h&igrave;nh hợp t&aacute;c kinh doanh, ph&aacute;t triển sản phẩm, cũng như th&uacute;c đẩy việc ứng dụng rộng khắp c&aacute;c sản phẩm dịch vụ Cloud, AI v&agrave; chuyển đổi số hiệu quả th&ocirc;ng qua c&aacute;c hoạt động tư vấn, triển khai c&aacute;c giải ph&aacute;p quản trị doanh nghiệp ERP tr&ecirc;n FPT Cloud.<br>FPT Smart Cloud - th&agrave;nh vi&ecirc;n tập đo&agrave;n FPT l&agrave; doanh nghiệp ti&ecirc;n phong trong lĩnh vực cung cấp c&aacute;c giải ph&aacute;p tr&iacute; tuệ nh&acirc;n tạo - FPT.AI v&agrave; điện to&aacute;n đ&aacute;m m&acirc;y - FPT.Cloud tại Việt Nam, hai c&ocirc;ng nghệ cốt l&otilde;i trong c&ocirc;ng cuộc chuyển đổi số. Trong khi đ&oacute;, LPC l&agrave; một trong những đơn vị c&oacute; thế mạnh nổi trội trong việc t&iacute;ch hợp hệ thống, tư vấn chuyển đổi số, nhiều năm hoạt động trong lĩnh vực cung cấp dịch vụ IT.<br>Sự kết hợp giữa FPT Smart Cloud v&agrave; LPC sẽ gi&uacute;p 2 đơn vị c&ugrave;ng mở rộng hoạt động kinh doanh, phục vụ tốt hơn c&aacute;c doanh nghiệp Việt Nam trong qu&aacute; tr&igrave;nh chuyển đổi số, nhất l&agrave; trong bối cảnh m&ocirc;i trường kinh doanh c&oacute; nhiều biến động. Đ&acirc;y cũng l&agrave; động th&aacute;i khẳng định nỗ lực kết nối của doanh nghiệp Việt để c&ugrave;ng ph&aacute;t triển bền vững, vượt qua những th&aacute;ch thức từ đại dịch.<br>Trong bối cảnh gi&atilde;n c&aacute;ch x&atilde; hội, hai b&ecirc;n đ&atilde; tham gia k&yacute; kết thỏa thuận hợp t&aacute;c bằng h&igrave;nh thức trực tuyến với sự hiện diện của &ocirc;ng L&ecirc; Hồng Việt - Tổng Gi&aacute;m đốc FPT Smart Cloud v&agrave; &ocirc;ng Huỳnh Minh Tr&iacute; - Tổng Gi&aacute;m đốc C&ocirc;ng ty cổ phần C&ocirc;ng nghệ Li&ecirc;n Ph&aacute;t.<br>Ph&aacute;t biểu tại lễ k&yacute; kết, &ocirc;ng L&ecirc; Hồng Việt - Tổng Gi&aacute;m đốc FPT Smart Cloud cho biết: &quot;Chiến lược của ch&uacute;ng t&ocirc;i l&agrave; ch&uacute; trọng mở rộng hợp t&aacute;c với c&aacute;c c&ocirc;ng ty tư vấn v&agrave; cung cấp dịch vụ chuyển đổi số lớn trong nước nhằm mang c&ocirc;ng nghệ điện to&aacute;n đ&aacute;m m&acirc;y (Cloud) v&agrave; tr&iacute; tuệ nh&acirc;n tạo (AI) đến với nhiều doanh nghiệp, tạo ra nhiều gi&aacute; trị vượt trội cho doanh nghiệp hơn nữa. T&ocirc;i tin tưởng rằng sự hợp t&aacute;c n&agrave;y sẽ gi&uacute;p khai th&aacute;c hiệu quả tiềm năng, thế mạnh sẵn c&oacute; của hai b&ecirc;n, tiến tới mục đ&iacute;ch chung l&agrave; gi&uacute;p doanh nghiệp ứng dụng th&agrave;nh c&ocirc;ng những giải ph&aacute;p chuyển đổi số một c&aacute;ch đơn giản nhất, hiệu quả nhất&quot;.&Ocirc;ng Huỳnh Minh Tr&iacute; - Tổng Gi&aacute;m đốc C&ocirc;ng ty cổ phần C&ocirc;ng Nghệ Li&ecirc;n Ph&aacute;t chia sẻ: &quot;Ch&uacute;ng t&ocirc;i đề cao vị thế v&agrave; tiềm năng của FPT Smart Cloud. Với kinh nghiệm v&agrave; năng lực đ&atilde; được kh&aacute;ch h&agrave;ng v&agrave; đối t&aacute;c thừa nhận, LPC sẽ đưa những giải ph&aacute;p v&agrave; dịch vụ tối ưu nhất, lợi &iacute;ch nhất v&agrave; thực sự kh&aacute;c biệt cho kh&aacute;ch h&agrave;ng tr&ecirc;n nền tảng Cloud. T&ocirc;i tin rằng sự hợp t&aacute;c giữa FPT Smart Cloud v&agrave; LPC sẽ đạt được những bước ph&aacute;t triển mới trong việc mang giải ph&aacute;p c&ocirc;ng nghệ Cloud gi&uacute;p c&aacute;c doanh nghiệp bứt ph&aacute; trong nền tảng kinh tế số&quot;.",
                contentEn: "<br>VTV.vn - Ng&agrave;y 10/8, FPT Smart Cloud v&agrave; C&ocirc;ng ty cổ phần C&ocirc;ng nghệ Li&ecirc;n Ph&aacute;t đ&atilde; k&yacute; kết thỏa thuận hợp t&aacute;c cung cấp c&aacute;c giải ph&aacute;p chuyển đổi số với c&ocirc;ng nghệ FPT.Cloud v&agrave; FPT.AI.<br>Theo thoả thuận, C&ocirc;ng ty cổ phần C&ocirc;ng nghệ Li&ecirc;n Ph&aacute;t (LPC) sẽ giới thiệu c&aacute;c giải ph&aacute;p FPT.AI v&agrave; FPT.Cloud tới kh&aacute;ch h&agrave;ng, gi&uacute;p họ nhanh ch&oacute;ng ứng dụng c&ocirc;ng nghệ cao, n&acirc;ng cao hiệu suất hoạt động, tối ưu ho&aacute; chi ph&iacute; v&agrave; cải thiện trải nghiệm kh&aacute;ch h&agrave;ng, hiện đại h&oacute;a hạ tầng c&ocirc;ng nghệ th&ocirc;ng tin một c&aacute;ch đồng bộ trong h&agrave;nh tr&igrave;nh chuyển đối số.<br>Đồng thời, hai c&ocirc;ng ty sẽ tiến h&agrave;nh c&aacute;c hoạt động nghi&ecirc;n cứu thị trường, X&acirc;y dựng m&ocirc; h&igrave;nh hợp t&aacute;c kinh doanh, ph&aacute;t triển sản phẩm, cũng như th&uacute;c đẩy việc ứng dụng rộng khắp c&aacute;c sản phẩm dịch vụ Cloud, AI v&agrave; chuyển đổi số hiệu quả th&ocirc;ng qua c&aacute;c hoạt động tư vấn, triển khai c&aacute;c giải ph&aacute;p quản trị doanh nghiệp ERP tr&ecirc;n FPT Cloud.<br>FPT Smart Cloud - th&agrave;nh vi&ecirc;n tập đo&agrave;n FPT l&agrave; doanh nghiệp ti&ecirc;n phong trong lĩnh vực cung cấp c&aacute;c giải ph&aacute;p tr&iacute; tuệ nh&acirc;n tạo - FPT.AI v&agrave; điện to&aacute;n đ&aacute;m m&acirc;y - FPT.Cloud tại Việt Nam, hai c&ocirc;ng nghệ cốt l&otilde;i trong c&ocirc;ng cuộc chuyển đổi số. Trong khi đ&oacute;, LPC l&agrave; một trong những đơn vị c&oacute; thế mạnh nổi trội trong việc t&iacute;ch hợp hệ thống, tư vấn chuyển đổi số, nhiều năm hoạt động trong lĩnh vực cung cấp dịch vụ IT.<br>Sự kết hợp giữa FPT Smart Cloud v&agrave; LPC sẽ gi&uacute;p 2 đơn vị c&ugrave;ng mở rộng hoạt động kinh doanh, phục vụ tốt hơn c&aacute;c doanh nghiệp Việt Nam trong qu&aacute; tr&igrave;nh chuyển đổi số, nhất l&agrave; trong bối cảnh m&ocirc;i trường kinh doanh c&oacute; nhiều biến động. Đ&acirc;y cũng l&agrave; động th&aacute;i khẳng định nỗ lực kết nối của doanh nghiệp Việt để c&ugrave;ng ph&aacute;t triển bền vững, vượt qua những th&aacute;ch thức từ đại dịch.<br>Trong bối cảnh gi&atilde;n c&aacute;ch x&atilde; hội, hai b&ecirc;n đ&atilde; tham gia k&yacute; kết thỏa thuận hợp t&aacute;c bằng h&igrave;nh thức trực tuyến với sự hiện diện của &ocirc;ng L&ecirc; Hồng Việt - Tổng Gi&aacute;m đốc FPT Smart Cloud v&agrave; &ocirc;ng Huỳnh Minh Tr&iacute; - Tổng Gi&aacute;m đốc C&ocirc;ng ty cổ phần C&ocirc;ng nghệ Li&ecirc;n Ph&aacute;t.<br>Ph&aacute;t biểu tại lễ k&yacute; kết, &ocirc;ng L&ecirc; Hồng Việt - Tổng Gi&aacute;m đốc FPT Smart Cloud cho biết: &quot;Chiến lược của ch&uacute;ng t&ocirc;i l&agrave; ch&uacute; trọng mở rộng hợp t&aacute;c với c&aacute;c c&ocirc;ng ty tư vấn v&agrave; cung cấp dịch vụ chuyển đổi số lớn trong nước nhằm mang c&ocirc;ng nghệ điện to&aacute;n đ&aacute;m m&acirc;y (Cloud) v&agrave; tr&iacute; tuệ nh&acirc;n tạo (AI) đến với nhiều doanh nghiệp, tạo ra nhiều gi&aacute; trị vượt trội cho doanh nghiệp hơn nữa. T&ocirc;i tin tưởng rằng sự hợp t&aacute;c n&agrave;y sẽ gi&uacute;p khai th&aacute;c hiệu quả tiềm năng, thế mạnh sẵn c&oacute; của hai b&ecirc;n, tiến tới mục đ&iacute;ch chung l&agrave; gi&uacute;p doanh nghiệp ứng dụng th&agrave;nh c&ocirc;ng những giải ph&aacute;p chuyển đổi số một c&aacute;ch đơn giản nhất, hiệu quả nhất&quot;.&Ocirc;ng Huỳnh Minh Tr&iacute; - Tổng Gi&aacute;m đốc C&ocirc;ng ty cổ phần C&ocirc;ng Nghệ Li&ecirc;n Ph&aacute;t chia sẻ: &quot;Ch&uacute;ng t&ocirc;i đề cao vị thế v&agrave; tiềm năng của FPT Smart Cloud. Với kinh nghiệm v&agrave; năng lực đ&atilde; được kh&aacute;ch h&agrave;ng v&agrave; đối t&aacute;c thừa nhận, LPC sẽ đưa những giải ph&aacute;p v&agrave; dịch vụ tối ưu nhất, lợi &iacute;ch nhất v&agrave; thực sự kh&aacute;c biệt cho kh&aacute;ch h&agrave;ng tr&ecirc;n nền tảng Cloud. T&ocirc;i tin rằng sự hợp t&aacute;c giữa FPT Smart Cloud v&agrave; LPC sẽ đạt được những bước ph&aacute;t triển mới trong việc mang giải ph&aacute;p c&ocirc;ng nghệ Cloud gi&uacute;p c&aacute;c doanh nghiệp bứt ph&aacute; trong nền tảng kinh tế số&quot;."
            },
            {
                id: "post-2",
                title: "Tấn c\xf4ng Ransomware ESXiArgs tr\xean m\xe1y chủ VMware ESXi to\xe0n cầu",
                titleEn: "Tấn c\xf4ng Ransomware ESXiArgs tr\xean m\xe1y chủ VMware ESXi to\xe0n cầu",
                meta_title: "",
                description: "this is meta description",
                date: "2022-04-04T05:00:00Z",
                image: "/images/news/news_2.jpg",
                categories: [
                    "Security"
                ],
                author: "Đang L\xea",
                tags: [
                    "VMware ESXi",
                    "CVE-2021-21974",
                    "Ransomware"
                ],
                draft: false,
                content: "<br>Quản trị vi&ecirc;n, nh&agrave; cung cấp dịch vụ lưu trữ v&agrave; French Computer Emergency Response Team - nh&oacute;m ứng ph&oacute; sự cố an ninh m&aacute;y t&iacute;nh của ch&iacute;nh phủ quốc gia Ph&aacute;p (CERT-FR) cảnh b&aacute;o rằng những kẻ tấn c&ocirc;ng chủ động nhắm mục ti&ecirc;u v&agrave;o c&aacute;c m&aacute;y chủ VMware ESXi chưa được v&aacute; trước lỗ hổng thực thi m&atilde; từ xa đ&atilde; tồn tại hai năm để triển khai một phần mềm tống tiền ESXiArgs mới.<br>Được theo d&otilde;i l&agrave; CVE-2021-21974 , lỗ hổng bảo mật do sự cố tr&agrave;n bộ nhớ trong dịch vụ OpenSLP c&oacute; thể bị khai th&aacute;c bởi c&aacute;c t&aacute;c nh&acirc;n đe dọa chưa được x&aacute;c thực trong c&aacute;c cuộc tấn c&ocirc;ng c&oacute; độ phức tạp thấp.<br>&ldquo;Theo c&aacute;c cuộc điều tra hiện tại, c&aacute;c chiến dịch tấn c&ocirc;ng n&agrave;y dường như đang khai th&aacute;c lỗ hổng CVE-2021-21974, lỗ hổng n&agrave;y đ&atilde; c&oacute; bản v&aacute; từ ng&agrave;y 23 th&aacute;ng 2 năm 2021,&rdquo; CERT-FR cho biết.<br>&quot;C&aacute;c hệ thống hiện đang được nhắm mục ti&ecirc;u sẽ l&agrave; c&aacute;c tr&igrave;nh ảo h&oacute;a ESXi trong phi&ecirc;n bản 6.x v&agrave; trước 6.7.&quot;Để chặn c&aacute;c cuộc tấn c&ocirc;ng sắp tới, quản trị vi&ecirc;n phải v&ocirc; hiệu h&oacute;a dịch vụ Giao thức vị tr&iacute; dịch vụ (SLP) dễ bị tấn c&ocirc;ng tr&ecirc;n c&aacute;c tr&igrave;nh ảo h&oacute;a ESXi chưa được cập nhật.<br>CERT-FR đặc biệt khuy&ecirc;n bạn n&ecirc;n &aacute;p dụng bản v&aacute; c&agrave;ng sớm c&agrave;ng tốt nhưng bổ sung th&ecirc;m rằng c&aacute;c hệ thống chưa được v&aacute; cũng n&ecirc;n được qu&eacute;t để t&igrave;m kiếm c&aacute;c dấu hiệu x&acirc;m phạm.CVE-2021-21974 ảnh hưởng đến c&aacute;c hệ thống sau:Phi&ecirc;n bản ESXi 7.x trước ESXi70U1c-17325551Phi&ecirc;n bản ESXi 6.7.x trước ESXi670-202102401-SGPhi&ecirc;n bản ESXi 6.5.x trước ESXi650-202102101-SG<br>Nh&agrave; cung cấp dịch vụ đ&aacute;m m&acirc;y của Ph&aacute;p OVHcloud lần đầu ti&ecirc;n c&ocirc;ng bố một b&aacute;o c&aacute;o li&ecirc;n kết l&agrave;n s&oacute;ng tấn c&ocirc;ng khổng lồ n&agrave;y nhắm v&agrave;o c&aacute;c m&aacute;y chủ VMware ESXi với hoạt động của m&atilde; độc tống tiền Nevada.&nbsp;<br>&quot;Theo c&aacute;c chuy&ecirc;n gia từ Ecosystem cũng như Authorities, ch&uacute;ng c&oacute; thể li&ecirc;n quan đến m&atilde; độc tống tiền Nevada v&agrave; đang sử dụng CVE-2021-21974 l&agrave;m vector x&acirc;m phạm. Cuộc điều tra vẫn đang được tiến h&agrave;nh để x&aacute;c nhận những giả định đ&oacute;&quot;, CISO Julien Levrard của OVHcloud cho biết .&quot;Cuộc tấn c&ocirc;ng chủ yếu nhắm v&agrave;o c&aacute;c m&aacute;y chủ ESXi trong phi&ecirc;n bản trước 7.0 U3i, dường như th&ocirc;ng qua cổng OpenSLP (427).&quot;<br>Tuy nhi&ecirc;n, c&ocirc;ng ty đ&atilde; quay lại ngay sau khi c&acirc;u chuyện của ch&uacute;ng t&ocirc;i được ph&aacute;t h&agrave;nh, n&oacute;i rằng họ cho rằng đ&oacute; l&agrave; do hoạt động sai của phần mềm tống tiền.V&agrave;o cuối ng&agrave;y đầu ti&ecirc;n của cuộc tấn c&ocirc;ng, khoảng 120 m&aacute;y chủ ESXi đ&atilde; bị m&atilde; h&oacute;a.Tuy nhi&ecirc;n, con số đ&atilde; nhanh ch&oacute;ng tăng l&ecirc;n v&agrave;o cuối tuần, với 2.400 thiết bị VMware ESXi tr&ecirc;n to&agrave;n thế giới hiện được ph&aacute;t hiện l&agrave; bị x&acirc;m nhập trong chiến dịch ransomware, theo t&igrave;m kiếm của Censys .Trong một lời khuy&ecirc;n được c&ocirc;ng bố v&agrave;o ng&agrave;y 6 th&aacute;ng 2, VMware đ&atilde; x&aacute;c nhận rằng cuộc tấn c&ocirc;ng n&agrave;y khai th&aacute;c c&aacute;c lỗ hổng ESXi cũ hơn chứ kh&ocirc;ng phải lỗ hổng zero-day.C&ocirc;ng ty khuy&ecirc;n quản trị vi&ecirc;n n&ecirc;n c&agrave;i đặt c&aacute;c bản cập nhật mới nhất cho m&aacute;y chủ ESXi v&agrave; tắt dịch vụ OpenSLP, dịch vụ n&agrave;y đ&atilde; bị tắt theo mặc định kể từ năm 2021.Một số quản trị vi&ecirc;n bị x&acirc;m phạm trong cuộc tấn c&ocirc;ng n&agrave;y cho biết họ kh&ocirc;ng k&iacute;ch hoạt SLP [1, 2], l&agrave;m tăng th&ecirc;m sự nhầm lẫn về c&aacute;ch m&aacute;y chủ bị x&acirc;m phạm.Nh&igrave;n chung, chiến dịch ransomware đ&atilde; kh&ocirc;ng đạt được nhiều th&agrave;nh c&ocirc;ng khi x&eacute;t đến số lượng lớn c&aacute;c thiết bị được m&atilde; h&oacute;a, với dịch vụ theo d&otilde;i thanh to&aacute;n tiền chuộc &nbsp;Ransomwhere chỉ b&aacute;o c&aacute;o bốn khoản thanh to&aacute;n tiền chuộc với tổng số tiền l&agrave; 88.000 đ&ocirc; la.Việc thiếu thanh to&aacute;n tiền chuộc c&oacute; thể l&agrave; do &nbsp;hướng dẫn kh&ocirc;i phục VMware ESXi &nbsp;do nh&agrave; nghi&ecirc;n cứu bảo mật Enes Sonmez tạo ra, cho ph&eacute;p nhiều quản trị vi&ecirc;n x&acirc;y dựng lại m&aacute;y ảo v&agrave; kh&ocirc;i phục dữ liệu của họ miễn ph&iacute;.Nguồn: Bleepingcomputer.com",
                contentEn: "<br>Quản trị vi&ecirc;n, nh&agrave; cung cấp dịch vụ lưu trữ v&agrave; French Computer Emergency Response Team - nh&oacute;m ứng ph&oacute; sự cố an ninh m&aacute;y t&iacute;nh của ch&iacute;nh phủ quốc gia Ph&aacute;p (CERT-FR) cảnh b&aacute;o rằng những kẻ tấn c&ocirc;ng chủ động nhắm mục ti&ecirc;u v&agrave;o c&aacute;c m&aacute;y chủ VMware ESXi chưa được v&aacute; trước lỗ hổng thực thi m&atilde; từ xa đ&atilde; tồn tại hai năm để triển khai một phần mềm tống tiền ESXiArgs mới.<br>Được theo d&otilde;i l&agrave; CVE-2021-21974 , lỗ hổng bảo mật do sự cố tr&agrave;n bộ nhớ trong dịch vụ OpenSLP c&oacute; thể bị khai th&aacute;c bởi c&aacute;c t&aacute;c nh&acirc;n đe dọa chưa được x&aacute;c thực trong c&aacute;c cuộc tấn c&ocirc;ng c&oacute; độ phức tạp thấp.<br>&ldquo;Theo c&aacute;c cuộc điều tra hiện tại, c&aacute;c chiến dịch tấn c&ocirc;ng n&agrave;y dường như đang khai th&aacute;c lỗ hổng CVE-2021-21974, lỗ hổng n&agrave;y đ&atilde; c&oacute; bản v&aacute; từ ng&agrave;y 23 th&aacute;ng 2 năm 2021,&rdquo; CERT-FR cho biết.<br>&quot;C&aacute;c hệ thống hiện đang được nhắm mục ti&ecirc;u sẽ l&agrave; c&aacute;c tr&igrave;nh ảo h&oacute;a ESXi trong phi&ecirc;n bản 6.x v&agrave; trước 6.7.&quot;Để chặn c&aacute;c cuộc tấn c&ocirc;ng sắp tới, quản trị vi&ecirc;n phải v&ocirc; hiệu h&oacute;a dịch vụ Giao thức vị tr&iacute; dịch vụ (SLP) dễ bị tấn c&ocirc;ng tr&ecirc;n c&aacute;c tr&igrave;nh ảo h&oacute;a ESXi chưa được cập nhật.<br>CERT-FR đặc biệt khuy&ecirc;n bạn n&ecirc;n &aacute;p dụng bản v&aacute; c&agrave;ng sớm c&agrave;ng tốt nhưng bổ sung th&ecirc;m rằng c&aacute;c hệ thống chưa được v&aacute; cũng n&ecirc;n được qu&eacute;t để t&igrave;m kiếm c&aacute;c dấu hiệu x&acirc;m phạm.CVE-2021-21974 ảnh hưởng đến c&aacute;c hệ thống sau:Phi&ecirc;n bản ESXi 7.x trước ESXi70U1c-17325551Phi&ecirc;n bản ESXi 6.7.x trước ESXi670-202102401-SGPhi&ecirc;n bản ESXi 6.5.x trước ESXi650-202102101-SG<br>Nh&agrave; cung cấp dịch vụ đ&aacute;m m&acirc;y của Ph&aacute;p OVHcloud lần đầu ti&ecirc;n c&ocirc;ng bố một b&aacute;o c&aacute;o li&ecirc;n kết l&agrave;n s&oacute;ng tấn c&ocirc;ng khổng lồ n&agrave;y nhắm v&agrave;o c&aacute;c m&aacute;y chủ VMware ESXi với hoạt động của m&atilde; độc tống tiền Nevada.&nbsp;<br>&quot;Theo c&aacute;c chuy&ecirc;n gia từ Ecosystem cũng như Authorities, ch&uacute;ng c&oacute; thể li&ecirc;n quan đến m&atilde; độc tống tiền Nevada v&agrave; đang sử dụng CVE-2021-21974 l&agrave;m vector x&acirc;m phạm. Cuộc điều tra vẫn đang được tiến h&agrave;nh để x&aacute;c nhận những giả định đ&oacute;&quot;, CISO Julien Levrard của OVHcloud cho biết .&quot;Cuộc tấn c&ocirc;ng chủ yếu nhắm v&agrave;o c&aacute;c m&aacute;y chủ ESXi trong phi&ecirc;n bản trước 7.0 U3i, dường như th&ocirc;ng qua cổng OpenSLP (427).&quot;<br>Tuy nhi&ecirc;n, c&ocirc;ng ty đ&atilde; quay lại ngay sau khi c&acirc;u chuyện của ch&uacute;ng t&ocirc;i được ph&aacute;t h&agrave;nh, n&oacute;i rằng họ cho rằng đ&oacute; l&agrave; do hoạt động sai của phần mềm tống tiền.V&agrave;o cuối ng&agrave;y đầu ti&ecirc;n của cuộc tấn c&ocirc;ng, khoảng 120 m&aacute;y chủ ESXi đ&atilde; bị m&atilde; h&oacute;a.Tuy nhi&ecirc;n, con số đ&atilde; nhanh ch&oacute;ng tăng l&ecirc;n v&agrave;o cuối tuần, với 2.400 thiết bị VMware ESXi tr&ecirc;n to&agrave;n thế giới hiện được ph&aacute;t hiện l&agrave; bị x&acirc;m nhập trong chiến dịch ransomware, theo t&igrave;m kiếm của Censys .Trong một lời khuy&ecirc;n được c&ocirc;ng bố v&agrave;o ng&agrave;y 6 th&aacute;ng 2, VMware đ&atilde; x&aacute;c nhận rằng cuộc tấn c&ocirc;ng n&agrave;y khai th&aacute;c c&aacute;c lỗ hổng ESXi cũ hơn chứ kh&ocirc;ng phải lỗ hổng zero-day.C&ocirc;ng ty khuy&ecirc;n quản trị vi&ecirc;n n&ecirc;n c&agrave;i đặt c&aacute;c bản cập nhật mới nhất cho m&aacute;y chủ ESXi v&agrave; tắt dịch vụ OpenSLP, dịch vụ n&agrave;y đ&atilde; bị tắt theo mặc định kể từ năm 2021.Một số quản trị vi&ecirc;n bị x&acirc;m phạm trong cuộc tấn c&ocirc;ng n&agrave;y cho biết họ kh&ocirc;ng k&iacute;ch hoạt SLP [1, 2], l&agrave;m tăng th&ecirc;m sự nhầm lẫn về c&aacute;ch m&aacute;y chủ bị x&acirc;m phạm.Nh&igrave;n chung, chiến dịch ransomware đ&atilde; kh&ocirc;ng đạt được nhiều th&agrave;nh c&ocirc;ng khi x&eacute;t đến số lượng lớn c&aacute;c thiết bị được m&atilde; h&oacute;a, với dịch vụ theo d&otilde;i thanh to&aacute;n tiền chuộc &nbsp;Ransomwhere chỉ b&aacute;o c&aacute;o bốn khoản thanh to&aacute;n tiền chuộc với tổng số tiền l&agrave; 88.000 đ&ocirc; la.Việc thiếu thanh to&aacute;n tiền chuộc c&oacute; thể l&agrave; do &nbsp;hướng dẫn kh&ocirc;i phục VMware ESXi &nbsp;do nh&agrave; nghi&ecirc;n cứu bảo mật Enes Sonmez tạo ra, cho ph&eacute;p nhiều quản trị vi&ecirc;n x&acirc;y dựng lại m&aacute;y ảo v&agrave; kh&ocirc;i phục dữ liệu của họ miễn ph&iacute;.Nguồn: Bleepingcomputer.com"
            },
            {
                id: "post-3",
                title: "Veeam sửa lỗi cho ph\xe9p tin tặc x\xe2m phạm cơ sở hạ tầng sao lưu",
                titleEn: "Veeam sửa lỗi cho ph\xe9p tin tặc x\xe2m phạm cơ sở hạ tầng sao lưu",
                meta_title: "",
                description: "this is meta description",
                date: "2022-04-04T05:00:00Z",
                image: "/images/news/news_3.jpg",
                categories: [
                    "Security"
                ],
                author: "Bảo V\xf5",
                tags: [
                    "Veeam",
                    "CVE-2023-27532",
                    "Lỗ hổng bảo mật"
                ],
                draft: false,
                content: "<br>Veeam k&ecirc;u gọi kh&aacute;ch h&agrave;ng v&aacute; lỗ hổng bảo mật Dịch vụ sao lưu nghi&ecirc;m trọng cao ảnh hưởng đến phần mềm Sao lưu &amp; Sao ch&eacute;p.Lỗ hổng (được theo d&otilde;i l&agrave; CVE-2023-27532) đ&atilde; được b&aacute;o c&aacute;o v&agrave;o giữa th&aacute;ng 2 bởi một nh&agrave; nghi&ecirc;n cứu bảo mật c&oacute; t&ecirc;n Shanigen v&agrave; n&oacute; ảnh hưởng đến tất cả c&aacute;c phi&ecirc;n bản Veeam Backup &amp; Replication (VBR). Những kẻ tấn c&ocirc;ng kh&ocirc;ng được x&aacute;c thực c&oacute; thể khai th&aacute;c n&oacute; để truy cập v&agrave;o c&aacute;c m&aacute;y chủ cơ sở hạ tầng dự ph&ograve;ng sau khi c&oacute; được th&ocirc;ng tin x&aacute;c thực được m&atilde; h&oacute;a được lưu trữ trong cơ sở dữ liệu cấu h&igrave;nh VeeamVBR.Theo &nbsp;lời khuy&ecirc;n của Veeam , nguy&ecirc;n nh&acirc;n s&acirc;u xa đằng sau lỗ hổng n&agrave;y l&agrave; Veeam.Backup.Service.exe (chạy tr&ecirc;n TCP 9401 theo mặc định) cho ph&eacute;p người d&ugrave;ng kh&ocirc;ng được x&aacute;c thực y&ecirc;u cầu th&ocirc;ng tin x&aacute;c thực được m&atilde; h&oacute;a.&quot;Ch&uacute;ng t&ocirc;i đ&atilde; ph&aacute;t triển c&aacute;c bản v&aacute; cho V11 v&agrave; V12 để giảm thiểu lỗ hổng n&agrave;y v&agrave; ch&uacute;ng t&ocirc;i khuy&ecirc;n bạn n&ecirc;n cập nhật c&agrave;i đặt của m&igrave;nh ngay lập tức&quot;, c&ocirc;ng ty cho biết trong một email gửi cho kh&aacute;ch h&agrave;ng h&ocirc;m thứ Ba.&quot;Nếu bạn kh&ocirc;ng phải l&agrave; người quản l&yacute; hiện tại của m&ocirc;i trường Veeam của m&igrave;nh, vui l&ograve;ng chuyển tiếp email n&agrave;y đến người th&iacute;ch hợp.&quot;C&ocirc;ng ty đ&atilde; ph&aacute;t h&agrave;nh c&aacute;c bản cập nhật bảo mật giải quyết lỗ hổng n&agrave;y cho VBR &nbsp;V11 &nbsp;v&agrave; &nbsp;V12 , với những kh&aacute;ch h&agrave;ng sử dụng c&aacute;c bản ph&aacute;t h&agrave;nh cũ hơn n&ecirc;n cập nhật l&ecirc;n một trong hai sản phẩm được hỗ trợ n&agrave;y trước.C&aacute;ch giải quyết cũng c&oacute; sẵn Veeam cũng cung cấp một bản sửa lỗi tạm thời cho những kh&aacute;ch h&agrave;ng kh&ocirc;ng thể triển khai ngay c&aacute;c bản v&aacute; CVE-2023-27532 của tuần n&agrave;y.Để chặn vectơ tấn c&ocirc;ng v&agrave; bảo vệ c&aacute;c m&aacute;y chủ dễ bị tổn thương trước c&aacute;c nỗ lực khai th&aacute;c tiềm năng, bạn cũng c&oacute; thể chặn c&aacute;c kết nối b&ecirc;n ngo&agrave;i tới cổng TCP 9401 bằng tường lửa m&aacute;y chủ dự ph&ograve;ng.Tuy nhi&ecirc;n, điều quan trọng cần lưu &yacute; l&agrave; chỉ n&ecirc;n sử dụng giải ph&aacute;p thay thế n&agrave;y trong m&ocirc;i trường Veeam kh&ocirc;ng ph&acirc;n phối v&igrave; n&oacute; cũng sẽ ảnh hưởng đến kết nối của m&aacute;y chủ gắn kết với m&aacute;y chủ VBR.Veeam cảnh b&aacute;o: &ldquo;Khi một lỗ hổng được tiết lộ, những kẻ tấn c&ocirc;ng sẽ đảo ngược c&aacute;c bản v&aacute; để hiểu lỗ hổng v&agrave; khai th&aacute;c một lỗ hổng tr&ecirc;n một phi&ecirc;n bản phần mềm chưa được v&aacute;&rdquo;.&quot;Điều n&agrave;y nhấn mạnh tầm quan trọng của việc đảm bảo tất cả c&aacute;c hệ thống của bạn sử dụng phi&ecirc;n bản mới nhất của tất cả phần mềm đ&atilde; triển khai v&agrave; c&aacute;c bản v&aacute; được c&agrave;i đặt kịp thời.&quot;Veeam &nbsp;cho biết &nbsp;phần mềm sao lưu, khắc phục sự cố v&agrave; bảo vệ dữ liệu của họ đang được sử dụng bởi hơn 450.000 kh&aacute;ch h&agrave;ng tr&ecirc;n to&agrave;n thế giới, bao gồm 82% c&ocirc;ng ty trong danh s&aacute;ch Fortune 500 v&agrave; 72% trong số c&aacute;c c&ocirc;ng ty trong Global 2.000.Nguồn: bleepingcomputer.com",
                contentEn: "<br>Veeam k&ecirc;u gọi kh&aacute;ch h&agrave;ng v&aacute; lỗ hổng bảo mật Dịch vụ sao lưu nghi&ecirc;m trọng cao ảnh hưởng đến phần mềm Sao lưu &amp; Sao ch&eacute;p.Lỗ hổng (được theo d&otilde;i l&agrave; CVE-2023-27532) đ&atilde; được b&aacute;o c&aacute;o v&agrave;o giữa th&aacute;ng 2 bởi một nh&agrave; nghi&ecirc;n cứu bảo mật c&oacute; t&ecirc;n Shanigen v&agrave; n&oacute; ảnh hưởng đến tất cả c&aacute;c phi&ecirc;n bản Veeam Backup &amp; Replication (VBR). Những kẻ tấn c&ocirc;ng kh&ocirc;ng được x&aacute;c thực c&oacute; thể khai th&aacute;c n&oacute; để truy cập v&agrave;o c&aacute;c m&aacute;y chủ cơ sở hạ tầng dự ph&ograve;ng sau khi c&oacute; được th&ocirc;ng tin x&aacute;c thực được m&atilde; h&oacute;a được lưu trữ trong cơ sở dữ liệu cấu h&igrave;nh VeeamVBR.Theo &nbsp;lời khuy&ecirc;n của Veeam , nguy&ecirc;n nh&acirc;n s&acirc;u xa đằng sau lỗ hổng n&agrave;y l&agrave; Veeam.Backup.Service.exe (chạy tr&ecirc;n TCP 9401 theo mặc định) cho ph&eacute;p người d&ugrave;ng kh&ocirc;ng được x&aacute;c thực y&ecirc;u cầu th&ocirc;ng tin x&aacute;c thực được m&atilde; h&oacute;a.&quot;Ch&uacute;ng t&ocirc;i đ&atilde; ph&aacute;t triển c&aacute;c bản v&aacute; cho V11 v&agrave; V12 để giảm thiểu lỗ hổng n&agrave;y v&agrave; ch&uacute;ng t&ocirc;i khuy&ecirc;n bạn n&ecirc;n cập nhật c&agrave;i đặt của m&igrave;nh ngay lập tức&quot;, c&ocirc;ng ty cho biết trong một email gửi cho kh&aacute;ch h&agrave;ng h&ocirc;m thứ Ba.&quot;Nếu bạn kh&ocirc;ng phải l&agrave; người quản l&yacute; hiện tại của m&ocirc;i trường Veeam của m&igrave;nh, vui l&ograve;ng chuyển tiếp email n&agrave;y đến người th&iacute;ch hợp.&quot;C&ocirc;ng ty đ&atilde; ph&aacute;t h&agrave;nh c&aacute;c bản cập nhật bảo mật giải quyết lỗ hổng n&agrave;y cho VBR &nbsp;V11 &nbsp;v&agrave; &nbsp;V12 , với những kh&aacute;ch h&agrave;ng sử dụng c&aacute;c bản ph&aacute;t h&agrave;nh cũ hơn n&ecirc;n cập nhật l&ecirc;n một trong hai sản phẩm được hỗ trợ n&agrave;y trước.C&aacute;ch giải quyết cũng c&oacute; sẵn Veeam cũng cung cấp một bản sửa lỗi tạm thời cho những kh&aacute;ch h&agrave;ng kh&ocirc;ng thể triển khai ngay c&aacute;c bản v&aacute; CVE-2023-27532 của tuần n&agrave;y.Để chặn vectơ tấn c&ocirc;ng v&agrave; bảo vệ c&aacute;c m&aacute;y chủ dễ bị tổn thương trước c&aacute;c nỗ lực khai th&aacute;c tiềm năng, bạn cũng c&oacute; thể chặn c&aacute;c kết nối b&ecirc;n ngo&agrave;i tới cổng TCP 9401 bằng tường lửa m&aacute;y chủ dự ph&ograve;ng.Tuy nhi&ecirc;n, điều quan trọng cần lưu &yacute; l&agrave; chỉ n&ecirc;n sử dụng giải ph&aacute;p thay thế n&agrave;y trong m&ocirc;i trường Veeam kh&ocirc;ng ph&acirc;n phối v&igrave; n&oacute; cũng sẽ ảnh hưởng đến kết nối của m&aacute;y chủ gắn kết với m&aacute;y chủ VBR.Veeam cảnh b&aacute;o: &ldquo;Khi một lỗ hổng được tiết lộ, những kẻ tấn c&ocirc;ng sẽ đảo ngược c&aacute;c bản v&aacute; để hiểu lỗ hổng v&agrave; khai th&aacute;c một lỗ hổng tr&ecirc;n một phi&ecirc;n bản phần mềm chưa được v&aacute;&rdquo;.&quot;Điều n&agrave;y nhấn mạnh tầm quan trọng của việc đảm bảo tất cả c&aacute;c hệ thống của bạn sử dụng phi&ecirc;n bản mới nhất của tất cả phần mềm đ&atilde; triển khai v&agrave; c&aacute;c bản v&aacute; được c&agrave;i đặt kịp thời.&quot;Veeam &nbsp;cho biết &nbsp;phần mềm sao lưu, khắc phục sự cố v&agrave; bảo vệ dữ liệu của họ đang được sử dụng bởi hơn 450.000 kh&aacute;ch h&agrave;ng tr&ecirc;n to&agrave;n thế giới, bao gồm 82% c&ocirc;ng ty trong danh s&aacute;ch Fortune 500 v&agrave; 72% trong số c&aacute;c c&ocirc;ng ty trong Global 2.000.Nguồn: bleepingcomputer.com"
            },
            {
                id: "post-4",
                title: "LPC NHẬN PLATINUM INNOVATOR TỪ PALO ALTO NETWORKS",
                titleEn: "LPC NHẬN PLATINUM INNOVATOR TỪ PALO ALTO NETWORKS",
                meta_title: "",
                description: "this is meta description",
                date: "2022-04-04T05:00:00Z",
                image: "/images/news/news_4.jpg",
                categories: [
                    "Events"
                ],
                author: "Xưởng Lương",
                tags: [
                    "LPC",
                    "Palo Alto Networks",
                    "Platinum Innovator"
                ],
                draft: false,
                content: "<br>Đ&oacute;n nhận một th&agrave;nh c&ocirc;ng đ&aacute;ng tự h&agrave;o, C&ocirc;ng ty Cổ phần C&ocirc;ng nghệ Li&ecirc;n Ph&aacute;t (LPC) đ&atilde; được trao chứng nhận Platinum Innovator từ h&atilde;ng Palo Alto Networks - nh&agrave; cung cấp h&agrave;ng đầu về giải ph&aacute;p bảo mật mạng v&agrave; an ninh th&ocirc;ng tin.Trong buổi l&agrave;m việc, đại diện Palo Alto Việt Nam - &ocirc;ng Ho&agrave;ng Quang Huy_Country Manager đ&atilde; ch&acirc;n th&agrave;nh ch&uacute;c mừng LPC về th&agrave;nh c&ocirc;ng đạt được trong việc ph&acirc;n phối v&agrave; triển khai c&aacute;c sản phẩm của Palo Alto. C&ocirc;ng nhận của Palo Alto l&agrave; sự thể hiện r&otilde; r&agrave;ng về đ&oacute;ng g&oacute;p xuất sắc của LPC th&ocirc;ng qua việc tham gia v&agrave;o c&aacute;c dự &aacute;n quan trọng v&agrave; đạt được c&aacute;c chứng chỉ triển khai cao cấp trong thời gian qua.Trong lời ch&uacute;c mừng, &ocirc;ng Ho&agrave;ng Quang Huy đ&atilde; ghi nhận sự cam kết v&agrave; đ&oacute;ng g&oacute;p của LPC trong việc ph&acirc;n phối v&agrave; triển khai c&aacute;c sản phẩm của Palo Alto. &Ocirc;ng thể hiện l&ograve;ng biết ơn s&acirc;u sắc đến sự đồng h&agrave;nh v&agrave; tận t&acirc;m của c&aacute;c kỹ sư của LPC trong việc kh&ocirc;ng ngừng học hỏi, trau dồi kỹ năng để đạt được c&aacute;c chứng chỉ triển khai cao cấp. Đ&acirc;y l&agrave; một bước tiến quan trọng, đồng thời cũng l&agrave; sự khẳng định về độ tin cậy v&agrave; chất lượng của LPC trong lĩnh vực an ninh mạng.Đại diện của LPC - anh Nguyễn Quốc Huy_Ph&oacute; Tổng Gi&aacute;m đốc đ&atilde; đ&aacute;p lại những lời ch&uacute;c mừng bằng sự biết ơn v&agrave; cam kết tiếp tục l&agrave; một đối t&aacute;c đ&aacute;ng tin cậy của Palo Alto Networks. LPC sẽ tiếp tục nỗ lực kh&ocirc;ng ngừng để cung cấp những giải ph&aacute;p bảo mật mạng tốt nhất, hỗ trợ kh&aacute;ch h&agrave;ng một c&aacute;ch tận t&acirc;m nhất. LPC tin rằng sự hợp t&aacute;c chặt chẽ v&agrave; bền vững giữa hai b&ecirc;n sẽ đem lại nhiều th&agrave;nh c&ocirc;ng v&agrave; cơ hội ph&aacute;t triển trong tương lai.Th&agrave;nh c&ocirc;ng của LPC v&agrave; chứng nhận Platinum Innovator từ Palo Alto Networks l&agrave; một cột mốc quan trọng, chứng tỏ sự nỗ lực v&agrave; tầm nh&igrave;n của c&ocirc;ng ty trong việc n&acirc;ng cao chất lượng dịch vụ v&agrave; mở rộng khả năng cung cấp giải ph&aacute;p an ninh mạng tốt nhất đến kh&aacute;ch h&agrave;ng.C&ugrave;ng ch&uacute;c mừng LPC với tinh thần phấn khởi v&agrave; hy vọng rằng sự hợp t&aacute;c giữa LPC v&agrave; Palo Alto Networks sẽ tiếp tục ph&aacute;t triển v&agrave; mang lại những th&agrave;nh c&ocirc;ng s&aacute;ng rực trong tương lai.",
                contentEn: "<br>Đ&oacute;n nhận một th&agrave;nh c&ocirc;ng đ&aacute;ng tự h&agrave;o, C&ocirc;ng ty Cổ phần C&ocirc;ng nghệ Li&ecirc;n Ph&aacute;t (LPC) đ&atilde; được trao chứng nhận Platinum Innovator từ h&atilde;ng Palo Alto Networks - nh&agrave; cung cấp h&agrave;ng đầu về giải ph&aacute;p bảo mật mạng v&agrave; an ninh th&ocirc;ng tin.Trong buổi l&agrave;m việc, đại diện Palo Alto Việt Nam - &ocirc;ng Ho&agrave;ng Quang Huy_Country Manager đ&atilde; ch&acirc;n th&agrave;nh ch&uacute;c mừng LPC về th&agrave;nh c&ocirc;ng đạt được trong việc ph&acirc;n phối v&agrave; triển khai c&aacute;c sản phẩm của Palo Alto. C&ocirc;ng nhận của Palo Alto l&agrave; sự thể hiện r&otilde; r&agrave;ng về đ&oacute;ng g&oacute;p xuất sắc của LPC th&ocirc;ng qua việc tham gia v&agrave;o c&aacute;c dự &aacute;n quan trọng v&agrave; đạt được c&aacute;c chứng chỉ triển khai cao cấp trong thời gian qua.Trong lời ch&uacute;c mừng, &ocirc;ng Ho&agrave;ng Quang Huy đ&atilde; ghi nhận sự cam kết v&agrave; đ&oacute;ng g&oacute;p của LPC trong việc ph&acirc;n phối v&agrave; triển khai c&aacute;c sản phẩm của Palo Alto. &Ocirc;ng thể hiện l&ograve;ng biết ơn s&acirc;u sắc đến sự đồng h&agrave;nh v&agrave; tận t&acirc;m của c&aacute;c kỹ sư của LPC trong việc kh&ocirc;ng ngừng học hỏi, trau dồi kỹ năng để đạt được c&aacute;c chứng chỉ triển khai cao cấp. Đ&acirc;y l&agrave; một bước tiến quan trọng, đồng thời cũng l&agrave; sự khẳng định về độ tin cậy v&agrave; chất lượng của LPC trong lĩnh vực an ninh mạng.Đại diện của LPC - anh Nguyễn Quốc Huy_Ph&oacute; Tổng Gi&aacute;m đốc đ&atilde; đ&aacute;p lại những lời ch&uacute;c mừng bằng sự biết ơn v&agrave; cam kết tiếp tục l&agrave; một đối t&aacute;c đ&aacute;ng tin cậy của Palo Alto Networks. LPC sẽ tiếp tục nỗ lực kh&ocirc;ng ngừng để cung cấp những giải ph&aacute;p bảo mật mạng tốt nhất, hỗ trợ kh&aacute;ch h&agrave;ng một c&aacute;ch tận t&acirc;m nhất. LPC tin rằng sự hợp t&aacute;c chặt chẽ v&agrave; bền vững giữa hai b&ecirc;n sẽ đem lại nhiều th&agrave;nh c&ocirc;ng v&agrave; cơ hội ph&aacute;t triển trong tương lai.Th&agrave;nh c&ocirc;ng của LPC v&agrave; chứng nhận Platinum Innovator từ Palo Alto Networks l&agrave; một cột mốc quan trọng, chứng tỏ sự nỗ lực v&agrave; tầm nh&igrave;n của c&ocirc;ng ty trong việc n&acirc;ng cao chất lượng dịch vụ v&agrave; mở rộng khả năng cung cấp giải ph&aacute;p an ninh mạng tốt nhất đến kh&aacute;ch h&agrave;ng.C&ugrave;ng ch&uacute;c mừng LPC với tinh thần phấn khởi v&agrave; hy vọng rằng sự hợp t&aacute;c giữa LPC v&agrave; Palo Alto Networks sẽ tiếp tục ph&aacute;t triển v&agrave; mang lại những th&agrave;nh c&ocirc;ng s&aacute;ng rực trong tương lai."
            }
        ],
        customerList: [
            {
                src: "/images/partners/asus.png",
                type: "Transistor"
            },
            {
                src: "/images/partners/dell.png",
                type: "Reform"
            },
            {
                src: "/images/partners/f5.png",
                type: "Tuple"
            },
            {
                src: "/images/partners/ibm.png",
                type: "Transistor"
            },
            {
                src: "/images/partners/lenovo.png",
                type: "Reform"
            },
            {
                src: "/images/partners/microsoft.png",
                type: "Tuple"
            },
            {
                src: "/images/partners/okta.png",
                type: "Transistor"
            },
            {
                src: "/images/partners/paloalto.png",
                type: "Reform"
            },
            {
                src: "/images/partners/splunk.png",
                type: "Tuple"
            },
            {
                src: "/images/partners/trendmicro.png",
                type: "Transistor"
            },
            {
                src: "/images/partners/veeam.jpg",
                type: "Reform"
            },
            {
                src: "/images/partners/wmware.png",
                type: "Tuple"
            }
        ],
        partnerList: [
            {
                src: "/images/customers/acb.png",
                type: "Transistor"
            },
            {
                src: "/images/customers/aih.png",
                type: "Reform"
            },
            {
                src: "/images/customers/bis1.png",
                type: "Tuple"
            },
            {
                src: "/images/customers/bvgiaan115.jpg",
                type: "SavvyCal"
            },
            {
                src: "/images/customers/bvqyq7.jpg",
                type: "Statamic"
            },
            {
                src: "/images/customers/dhyd_hcm.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/emasi.jpg",
                type: "Statamic"
            },
            {
                src: "/images/customers/eximbank.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/hanwhalife.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/manulife.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/namlong.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/ninjavan.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/rmit.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/sacombank.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/samsung.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/shinhanbank.jpg",
                type: "Statamic"
            },
            {
                src: "/images/customers/ssi.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/tah.png",
                type: "Statamic"
            },
            {
                src: "/images/customers/uob.png",
                type: "Statamic"
            }
        ],
        product: [
            {
                title: "Giải ph\xe1p t\xedch hợp hệ thống",
                titleEn: "System intergration solution",
                id: "1",
                link: "/it_services",
                type: "solution",
                description1: "Doanh nghiệp hạ tầng viễn th\xf4ng DUY NHẤT của Việt Nam c\xf3 cổ đ\xf4ng nước ngo\xe0i: Tập đo\xe0n TIME dotCom, tập đo\xe0n viễn th\xf4ng Top2 Malaysia.",
                description2: "Ch\xfang t\xf4i tư vấn, cung cấp v\xe0 triển khai t\xedch hợp c\xe1c hệ thống Mạng, M\xe1y chủ, Storage, Cloud,...t\xf9y v\xe0o quy m\xf4 v\xe0 nhu cầu của mỗi kh\xe1ch h\xe0ng.",
                descriptionEn1: "Doanh nghiệp hạ tầng viễn th\xf4ng DUY NHẤT của Việt Nam c\xf3 cổ đ\xf4ng nước ngo\xe0i: Tập đo\xe0n TIME dotCom, tập đo\xe0n viễn th\xf4ng Top2 Malaysia.",
                descriptionEn2: "Ch\xfang t\xf4i tư vấn, cung cấp v\xe0 triển khai t\xedch hợp c\xe1c hệ thống Mạng, M\xe1y chủ, Storage, Cloud,...t\xf9y v\xe0o quy m\xf4 v\xe0 nhu cầu của mỗi kh\xe1ch h\xe0ng.",
                image: "/images/services/s1.jpg",
                pros: [
                    "Tiết kiệm thời gian v\xe0 giảm thiểu chi ph\xed",
                    "N\xe2ng cao hiệu quả v\xe0 chất lượng dịch vụ",
                    "Tối ưu h\xf3a hiệu suất hoạt động",
                    "Tăng cường khả năng mở rộng quy m\xf4 hoạt động",
                    "Cải thiện trải nghiệm kh\xe1ch h\xe0ng"
                ],
                prosEn: [
                    "Tiết kiệm thời gian v\xe0 giảm thiểu chi ph\xed",
                    "N\xe2ng cao hiệu quả v\xe0 chất lượng dịch vụ",
                    "Tối ưu h\xf3a hiệu suất hoạt động",
                    "Tăng cường khả năng mở rộng quy m\xf4 hoạt động",
                    "Cải thiện trải nghiệm kh\xe1ch h\xe0ng"
                ],
                content: [
                    {
                        id: "it_services1",
                        title: "sp1",
                        content: "sp1",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/it_services/it_services1",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "it_services2",
                        title: "sp2",
                        content: "sp2",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/it_services/it_services2",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "it_services3",
                        title: "sp3",
                        content: "sp3",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/it_services/it_services3",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "it_services4",
                        title: "sp4",
                        content: "sp4",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/it_services/it_services4",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "it_services5",
                        title: "sp5",
                        content: "sp5",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/it_services/it_services5",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    }
                ]
            },
            {
                title: "Giải ph\xe1p bảo mật an ninh mạng",
                titleEn: "network security solution",
                id: "2",
                link: "/cyber_security",
                type: "solution",
                description1: "LPC cung cấp c\xe1c dịch vụ về mạng v\xe0 an ninh mạng",
                description2: "Ch\xfang t\xf4i cung cấp c\xe1c giải ph\xe1p bảo mật an ninh mạng to\xe0n diện, gi\xfap doanh nghiệp ngăn chặn c\xe1c cuộc tấn c\xf4ng mạng, bảo vệ dữ liệu v\xe0 duy tr\xec hoạt động kinh doanh ổn định.",
                descriptionEn1: "LPC cung cấp c\xe1c dịch vụ về mạng v\xe0 an ninh mạng",
                descriptionEn2: "Ch\xfang t\xf4i cung cấp c\xe1c giải ph\xe1p bảo mật an ninh mạng to\xe0n diện, gi\xfap doanh nghiệp ngăn chặn c\xe1c cuộc tấn c\xf4ng mạng, bảo vệ dữ liệu v\xe0 duy tr\xec hoạt động kinh doanh ổn định.",
                image: "/images/services/s2.jpg",
                pros: [
                    "Ngăn ngừa c\xe1c cuộc tấn c\xf4ng mạng.",
                    "Tăng cường hiệu quả hoạt động doanh nghiệp.",
                    "Tu\xe2n thủ c\xe1c quy định về bảo mật dữ liệu.",
                    "X\xe2y dựng độ uy t\xedn doanh nghiệp đối với kh\xe1ch h\xe0ng."
                ],
                prosEn: [
                    "Ngăn ngừa c\xe1c cuộc tấn c\xf4ng mạng.",
                    "Tăng cường hiệu quả hoạt động doanh nghiệp.",
                    "Tu\xe2n thủ c\xe1c quy định về bảo mật dữ liệu.",
                    "X\xe2y dựng độ uy t\xedn doanh nghiệp đối với kh\xe1ch h\xe0ng."
                ],
                content: [
                    {
                        id: "cyber_security1",
                        title: "sp1",
                        content: "sp1",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/cyber_security/cyber_security1",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "cyber_security2",
                        title: "sp2",
                        content: "sp2",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/cyber_security/cyber_security2",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "cyber_security3",
                        title: "sp3",
                        content: "sp3",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/cyber_security/cyber_security3",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "cyber_security4",
                        title: "sp4",
                        content: "sp4",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/cyber_security/cyber_security4",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "cyber_security5",
                        title: "sp5",
                        content: "sp5",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/cyber_security/cyber_security5",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    }
                ]
            },
            {
                title: "Giải ph\xe1p chuyển đổi số",
                titleEn: "Digital solution",
                id: "3",
                link: "/digital_information",
                type: "solution",
                description1: "D\xe2̃n đ\xe2̀u v\xeà tư v\xe2́n giải ph\xe1p chuy\xeản đ\xf4̉i s\xf4́ (Digital Transformation) cho t\xf4̉ chức, doanh nghiệp. D\xe2̃n đ\xe2̀u v\xeà cung c\xe2́p giải ph\xe1p an ninh bảo mật v\xe0 điện to\xe1n đ\xe1m m\xe2y v\xe0 dịch vụ dữ liệu.",
                description2: "Ch\xfang t\xf4i đồng h\xe0nh c\xf9ng doanh nghiệp trong việc ứng dụng c\xf4ng nghệ số ti\xean tiến để tối ưu h\xf3a hoạt động, n\xe2ng cao hiệu quả v\xe0 cải thiện trải nghiệm kh\xe1ch h\xe0ng.",
                descriptionEn1: "D\xe2̃n đ\xe2̀u v\xeà tư v\xe2́n giải ph\xe1p chuy\xeản đ\xf4̉i s\xf4́ (Digital Transformation) cho t\xf4̉ chức, doanh nghiệp. D\xe2̃n đ\xe2̀u v\xeà cung c\xe2́p giải ph\xe1p an ninh bảo mật v\xe0 điện to\xe1n đ\xe1m m\xe2y v\xe0 dịch vụ dữ liệu.",
                descriptionEn2: "Ch\xfang t\xf4i đồng h\xe0nh c\xf9ng doanh nghiệp trong việc ứng dụng c\xf4ng nghệ số ti\xean tiến để tối ưu h\xf3a hoạt động, n\xe2ng cao hiệu quả v\xe0 cải thiện trải nghiệm kh\xe1ch h\xe0ng.",
                image: "/images/services/s3.jpg",
                pros: [
                    "Tiết kiệm chi ph\xed v\xe0 tăng lợi nhuận.",
                    "N\xe2ng cao trải nghiệm kh\xe1ch h\xe0ng.",
                    "Tăng cường hiệu quả c\xf4ng việc.",
                    "Tăng cơ hội cạnh tranh v\xe0 sự linh hoạt.",
                    "G\xf3p phần x\xe2y dựng văn h\xf3a doanh nghiệp tốt hơn."
                ],
                prosEn: [
                    "Tiết kiệm chi ph\xed v\xe0 tăng lợi nhuận.",
                    "N\xe2ng cao trải nghiệm kh\xe1ch h\xe0ng.",
                    "Tăng cường hiệu quả c\xf4ng việc.",
                    "Tăng cơ hội cạnh tranh v\xe0 sự linh hoạt.",
                    "G\xf3p phần x\xe2y dựng văn h\xf3a doanh nghiệp tốt hơn."
                ],
                content: [
                    {
                        id: "sp1",
                        title: "sp1",
                        content: "sp1",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/digital_information/sp1",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "sp2",
                        title: "sp2",
                        content: "sp2",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/digital_information/sp2",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "sp3",
                        title: "sp3",
                        content: "sp3",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/digital_information/sp3",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "sp4",
                        title: "sp4",
                        content: "sp4",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/digital_information/sp3",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "sp5",
                        title: "sp5",
                        content: "sp5",
                        titleEn: "sp1",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/digital_information/sp3",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    }
                ]
            },
            {
                title: "Dịch vụ It",
                titleEn: "It services",
                id: "4",
                link: "services",
                type: "service",
                description1: "D\xe2̃n đ\xe2̀u v\xeà tư v\xe2́n giải ph\xe1p chuy\xeản đ\xf4̉i s\xf4́ (Digital Transformation) cho t\xf4̉ chức, doanh nghiệp. D\xe2̃n đ\xe2̀u v\xeà cung c\xe2́p giải ph\xe1p an ninh bảo mật v\xe0 điện to\xe1n đ\xe1m m\xe2y v\xe0 dịch vụ dữ liệu.",
                description2: "D\xe2̃n đ\xe2̀u v\xeà tư v\xe2́n giải ph\xe1p chuy\xeản đ\xf4̉i s\xf4́ (Digital Transformation) cho t\xf4̉ chức, doanh nghiệp. D\xe2̃n đ\xe2̀u v\xeà cung c\xe2́p giải ph\xe1p an ninh bảo mật v\xe0 điện to\xe1n đ\xe1m m\xe2y v\xe0 dịch vụ dữ liệu.",
                descriptionEn1: "D\xe2̃n đ\xe2̀u v\xeà tư v\xe2́n giải ph\xe1p chuy\xeản đ\xf4̉i s\xf4́ (Digital Transformation) cho t\xf4̉ chức, doanh nghiệp. D\xe2̃n đ\xe2̀u v\xeà cung c\xe2́p giải ph\xe1p an ninh bảo mật v\xe0 điện to\xe1n đ\xe1m m\xe2y v\xe0 dịch vụ dữ liệu.",
                descriptionEn2: "D\xe2̃n đ\xe2̀u v\xeà tư v\xe2́n giải ph\xe1p chuy\xeản đ\xf4̉i s\xf4́ (Digital Transformation) cho t\xf4̉ chức, doanh nghiệp. D\xe2̃n đ\xe2̀u v\xeà cung c\xe2́p giải ph\xe1p an ninh bảo mật v\xe0 điện to\xe1n đ\xe1m m\xe2y v\xe0 dịch vụ dữ liệu.",
                image: "/images/services/s3.jpg",
                pros: [
                    "Tiết kiệm chi ph\xed v\xe0 tăng lợi nhuận.",
                    "N\xe2ng cao trải nghiệm kh\xe1ch h\xe0ng.",
                    "Tăng cường hiệu quả c\xf4ng việc.",
                    "Tăng cơ hội cạnh tranh v\xe0 sự linh hoạt.",
                    "G\xf3p phần x\xe2y dựng văn h\xf3a doanh nghiệp tốt hơn."
                ],
                prosEn: [
                    "Tiết kiệm chi ph\xed v\xe0 tăng lợi nhuận.",
                    "N\xe2ng cao trải nghiệm kh\xe1ch h\xe0ng.",
                    "Tăng cường hiệu quả c\xf4ng việc.",
                    "Tăng cơ hội cạnh tranh v\xe0 sự linh hoạt.",
                    "G\xf3p phần x\xe2y dựng văn h\xf3a doanh nghiệp tốt hơn."
                ],
                content: [
                    {
                        id: "system_maintain",
                        title: "Bảo tr\xec hệ thống/mạng core",
                        content: "sp1",
                        titleEn: "system/network maintainence",
                        contentEn: "sp1",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/services/system_maintain",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "system_relocation",
                        title: "IT relocation",
                        content: "sp2",
                        titleEn: "IT relocation",
                        contentEn: "sp2",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/services/system_relocation",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "system_manage",
                        title: "Managed services",
                        content: "sp3",
                        titleEn: "Managed services",
                        contentEn: "sp3",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/services/system_manage",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "system_check",
                        title: "Kiểm thử hệ thống",
                        content: "sp4",
                        titleEn: "System checking",
                        contentEn: "sp4",
                        imgSrc: "/images/services/s1.jpg",
                        link: "/services/system_check",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    },
                    {
                        id: "system_integration",
                        title: "Triển khai t\xedch hợp",
                        content: "sp5",
                        titleEn: "Intergration deployment",
                        contentEn: "sp5",
                        imgSrc: "",
                        link: "/services/system_integration",
                        description: [
                            {
                                id: "goal",
                                title: "Mục ti\xeau",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "function",
                                title: "M\xf4 tả chức năng v\xe0 gi\xe1 trị mang lại",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "product",
                                title: "Sản phẩm hiện thực",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "services",
                                title: "C\xe1c dịch vụ",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            },
                            {
                                id: "casestudy",
                                title: "Case study",
                                titleEn: "",
                                content: "- Ph&aacute;t hiện lỗ hổng: Việc qu&eacute;t hệ thống bảo mật gi&uacute;p ph&aacute;t hiện những lỗ hổng bảo mật tiềm ẩn trong hệ thống v&agrave; ứng dụng. Điều n&agrave;y cho ph&eacute;p doanh nghiệp ph&aacute;t hiện những điểm bất thường v&agrave; &aacute;p dụng biện ph&aacute;p bảo mật th&iacute;ch hợp nhằm hạn chế rủi ro x&acirc;m nhập.<br>- Bảo vệ dữ liệu: Qu&eacute;t hệ thống gi&uacute;p bảo vệ dữ liệu quan trọng v&agrave; th&ocirc;ng tin nhạy cảm trước việc x&acirc;m nhập bất hợp ph&aacute;p v&agrave; lưu trữ kh&ocirc;ng bảo mật. Việc ph&aacute;t hiện sớm những lỗ hỏng bảo mật gi&uacute;p ngăn chặn việc đ&aacute;nh cắp dữ liệu v&agrave; bảo vệ th&ocirc;ng tin kh&aacute;ch h&agrave;ng an to&agrave;n.<br>- Tu&acirc;n thủ quy định: Qu&eacute;t hệ thống bảo mật gi&uacute;p đ&aacute;p ứng c&aacute;c y&ecirc;u cầu tu&acirc;n thủ quy định v&agrave; ti&ecirc;u chuẩn bảo mật từ c&aacute;c tổ chức quản l&yacute; v&agrave; đối t&aacute;c kinh doanh. Điều n&agrave;y gi&uacute;p doanh nghiệp duy tr&igrave; uy t&iacute;n v&agrave; tu&acirc;n thủ quyền ri&ecirc;ng tư v&agrave; an ninh th&ocirc;ng tin.<br>- Giảm thiểu rủi ro: Qu&eacute;t hệ thống định kỳ gi&uacute;p giảm thiểu rủi ro bảo mật bằng c&aacute;ch ph&aacute;t hiện sớm c&aacute;c lỗ hổng v&agrave; điểm yếu. Điều n&agrave;y gi&uacute;p doanh nghiệp ứng ph&oacute; với c&aacute;c mối đe dọa mạng, tr&aacute;nh mất m&aacute;t dữ liệu v&agrave; thiệt hại kinh tế do tấn c&ocirc;ng.<br>- Đảm bảo tu&acirc;n thủ định kỳ: Qu&eacute;t hệ thống bảo mật gi&uacute;p đảm bảo tu&acirc;n thủ thường xuy&ecirc;n v&agrave; bảo mật th&ocirc;ng tin. Điều n&agrave;y l&agrave; cần thiết đối với việc đảm bảo an to&agrave;n v&agrave; bảo mật trong m&ocirc;i trường doanh nghiệp.",
                                contentEn: ""
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
const searchCompany = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState,
    reducers: {
        companyData: (state)=>{
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        }
    }
});
const fetchPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("posts/fetchPosts", async ()=>{
// const response = await client.get('/fakeApi/posts')
// return response.data
});
// Action creators are generated for each case reducer function
const { companyData } = searchCompany.actions;
const company = (state)=>state;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchCompany.reducer);


/***/ }),

/***/ 47583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable jsx-a11y/alt-text */ /* __next_internal_client_entry_do_not_use__ default auto */ 



const ImageFallback = (props)=>{
    const { src, fallback, ...rest } = props;
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(src);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setImgSrc(src);
    }, [
        src
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...rest,
        src: imgSrc,
        onError: ()=>{
            setImgSrc(fallback);
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFallback);


/***/ }),

/***/ 31920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82503);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47184);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const SeoMeta = ({ title, meta_title, image, description, canonical, noindex })=>{
    const { meta_image, meta_author, meta_description } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.metadata;
    const { base_url } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site;
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
            }),
            canonical && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: canonical,
                itemProp: "url"
            }),
            noindex && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "noindex,nofollow"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "author",
                content: meta_author
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `${base_url}/${pathname.replace("/", "")}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: `${base_url}${image ? image : meta_image}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: `${base_url}${image ? image : meta_image}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeoMeta);


/***/ }),

/***/ 34171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const Accordion = ({ title, children, className })=>{
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `accordion ${show && "active"} ${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "accordion-header",
                onClick: ()=>setShow(!show),
                children: [
                    title,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: "accordion-icon",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 512 512",
                        xmlSpace: "preserve",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "currentColor",
                            d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "accordion-content",
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ }),

/***/ 50230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function Tab({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "tab-content-panel",
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);


/***/ }),

/***/ 50633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Tabs({ children }) {
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    //select tabItems
    const tabItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const [defaultFocus, setDefaultFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (defaultFocus) {
            //@ts-ignore
            tabItemsRef.current[active].focus();
        } else {
            setDefaultFocus(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        active
    ]);
    //change tab item on click
    const handleKeyDown = (event, index)=>{
        if (event.key === "Enter" || event.key === " ") {
            setActive(index);
        } else if (event.key === "ArrowRight") {
            setActive((active + 1) % children.length);
        } else if (event.key === "ArrowLeft") {
            setActive((active - 1 + children.length) % children.length);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tab",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "tab-nav",
                role: "tablist",
                children: children.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: `tab-nav-item ${index === active && "active"}`,
                        role: "tab",
                        tabIndex: index === active ? 0 : -1,
                        onClick: ()=>setActive(index),
                        onKeyDown: (e)=>handleKeyDown(e, index),
                        //@ts-ignore
                        ref: (ref)=>tabItemsRef.current[index] = ref,
                        children: item.props.name
                    }, index))
            }),
            children.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `tab-content ${index === active ? "block" : "hidden"}`,
                    children: data.props.children
                }, index))
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);


/***/ }),

/***/ 63182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57807);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3426);
/* harmony import */ var react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Youtube = ({ id, title, ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1___default()), {
        wrapperClass: "yt-lite rounded-lg",
        id: id,
        title: title,
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Youtube);


/***/ }),

/***/ 47184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OI: () => (/* binding */ humanize),
/* harmony export */   ab: () => (/* binding */ plainify),
/* harmony export */   gI: () => (/* binding */ markdownify),
/* harmony export */   lV: () => (/* binding */ slugify)
/* harmony export */ });
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48362);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69079);


marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.use({
    mangle: false,
    headerIds: false
});
// slugify
const slugify = (content)=>{
    return (0,github_slugger__WEBPACK_IMPORTED_MODULE_0__/* .slug */ .o)(content);
};
// markdownify
const markdownify = (content, div)=>{
    return {
        __html: div ? marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.parse(content) : marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.parseInline(content)
    };
};
// humanize
const humanize = (content)=>{
    return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
        return m.toUpperCase();
    });
};
// plainify
const plainify = (content)=>{
    const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, "");
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    const stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
};
// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities)=>{
    let entityList = {
        "&nbsp;": " ",
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&#39;": "'"
    };
    let htmlWithoutEntities = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity)=>{
        return entityList[entity];
    });
    return htmlWithoutEntities;
};


/***/ }),

/***/ 74053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Nguyen Ngoc Phu\Documents\GitHub\website-lpc\src\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 18275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_ImageFallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43069);
/* harmony import */ var _helpers_MDXContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80102);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17222);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15915);
/* harmony import */ var _partials_SeoMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36490);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_MDXContent__WEBPACK_IMPORTED_MODULE_2__]);
_helpers_MDXContent__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const NotFound = async ()=>{
    const data = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_3__/* .getListPage */ .d)("pages/404.md");
    const { image, title } = data.frontmatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_SeoMeta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                title: "Page Not Found",
                image: "/images/404.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section-sm",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center sm:col-10 md:col-8 lg:col-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_helpers_ImageFallback__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                    className: "mb-8 w-full",
                                    src: image,
                                    alt: "page not found",
                                    height: 320,
                                    width: 630
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "h2 mb-4",
                                    dangerouslySetInnerHTML: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .markdownify */ .gI)(title)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "content",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_helpers_MDXContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        content: data.content
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    href: "/",
                                    className: "btn btn-primary mt-8",
                                    children: "Back To Home"
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Nguyen Ngoc Phu\Documents\GitHub\website-lpc\src\layouts\helpers\ImageFallback.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 80102:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shortcodes_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43492);
/* harmony import */ var next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14916);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26521);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__]);
next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const MDXContent = ({ content })=>{
    const mdxOptions = {
        remarkPlugins: [
            remark_gfm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote_rsc__WEBPACK_IMPORTED_MODULE_2__.MDXRemote, {
            source: content,
            components: _shortcodes_all__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            options: {
                mdxOptions
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Nguyen Ngoc Phu\Documents\GitHub\website-lpc\src\layouts\partials\SeoMeta.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 43492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ shortcodes_all)
});

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Accordion.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nguyen Ngoc Phu\Documents\GitHub\website-lpc\src\layouts\shortcodes\Accordion.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Accordion = (__default__);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Button.tsx


const Button = ({ label, link, style, rel })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: link,
        target: "_blank",
        rel: `noopener noreferrer ${rel ? rel === "follow" ? "" : rel : "nofollow"}`,
        className: `btn mb-4 me-4 ${style === "outline" ? "btn-outline-primary" : "btn-primary"} border-primary no-underline hover:text-white`,
        children: label
    });
};
/* harmony default export */ const shortcodes_Button = (Button);

// EXTERNAL MODULE: ./src/lib/utils/textConverter.ts
var textConverter = __webpack_require__(15915);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Notice.tsx



function Notice({ type, children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `notice ${type}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "notice-head",
                children: [
                    type === "tip" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2.4C6.69807 2.4 2.4 6.69807 2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4ZM15.9515 7.55147L9.6 13.9029L8.04853 12.3515C7.5799 11.8828 6.8201 11.8828 6.35147 12.3515C5.88284 12.8201 5.88284 13.5799 6.35147 14.0485L8.75147 16.4485C9.2201 16.9172 9.9799 16.9172 10.4485 16.4485L17.6485 9.24853C18.1172 8.7799 18.1172 8.0201 17.6485 7.55147C17.1799 7.08284 16.4201 7.08284 15.9515 7.55147Z",
                            fill: "currentColor"
                        })
                    }) : type === "info" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 18 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M9.16109 0.993016C9.97971 1.03952 10.6611 1.42989 11.0721 2.22339L17.7981 15.8014C18.4502 17.1739 17.4403 19.0208 15.7832 19.0474H2.23859C0.730337 19.0234 -0.507163 17.3108 0.231587 15.7864L7.08321 2.20877C7.21146 1.96502 7.26996 1.89452 7.38059 1.76664C7.82534 1.25102 8.31171 0.975016 9.16109 0.993016ZM9.05046 2.49189C8.79284 2.50464 8.55696 2.64902 8.42834 2.87327C6.06134 7.36539 3.77946 11.9036 1.56546 16.4734C1.36071 16.9328 1.71209 17.5223 2.22621 17.547C6.74871 17.6201 11.2731 17.6201 15.7956 17.547C16.2925 17.523 16.666 16.953 16.459 16.4783C14.2866 11.9093 12.0471 7.37102 9.72171 2.87814C9.58446 2.63402 9.38309 2.48739 9.05046 2.49189Z",
                                fill: "currentColor"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M9.61323 13.2153H8.35773L8.21973 7.04688H9.75723L9.61323 13.2153ZM8.17773 15.1015C8.17773 14.8731 8.25161 14.6841 8.39973 14.5338C8.54823 14.3838 8.75036 14.3084 9.00648 14.3084C9.26298 14.3084 9.46511 14.3838 9.61323 14.5338C9.76136 14.6841 9.83561 14.8731 9.83561 15.1015C9.83561 15.3216 9.76323 15.5057 9.61923 15.6539C9.47486 15.802 9.27086 15.8762 9.00648 15.8762C8.74211 15.8762 8.53811 15.802 8.39373 15.6539C8.24973 15.5057 8.17773 15.3216 8.17773 15.1015Z",
                                fill: "currentColor"
                            })
                        ]
                    }) : type === "warning" ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10 0C15.522 0 20 4.478 20 10C20 15.522 15.522 20 10 20C4.478 20 0 15.522 0 10C0 4.478 4.478 0 10 0ZM10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C14.411 18 18 14.411 18 10C18 5.589 14.411 2 10 2ZM12.293 6.293L13.707 7.707L11.414 10L13.707 12.293L12.293 13.707L10 11.414L7.707 13.707L6.293 12.293L8.586 10L6.293 7.707L7.707 6.293L10 8.586L12.293 6.293Z",
                            fill: "currentColor"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "my-0 ml-1.5",
                        children: (0,textConverter/* humanize */.OI)(type)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "notice-body",
                children: children
            })
        ]
    });
}
/* harmony default export */ const shortcodes_Notice = (Notice);

;// CONCATENATED MODULE: ./src/layouts/shortcodes/Tab.tsx

const Tab_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nguyen Ngoc Phu\Documents\GitHub\website-lpc\src\layouts\shortcodes\Tab.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Tab_esModule, $$typeof: Tab_$$typeof } = Tab_proxy;
const Tab_default_ = Tab_proxy.default;


/* harmony default export */ const Tab = (Tab_default_);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Tabs.tsx

const Tabs_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nguyen Ngoc Phu\Documents\GitHub\website-lpc\src\layouts\shortcodes\Tabs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Tabs_esModule, $$typeof: Tabs_$$typeof } = Tabs_proxy;
const Tabs_default_ = Tabs_proxy.default;


/* harmony default export */ const Tabs = (Tabs_default_);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/Video.tsx

function Video({ title, width = 500, height = "auto", src, ...rest }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
        className: "overflow-hidden rounded-lg",
        width: width,
        height: height,
        controls: true,
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                src: src.match(/^http/) ? src : `/videos/${src}`,
                type: "video/mp4"
            }),
            title
        ]
    });
}
/* harmony default export */ const shortcodes_Video = (Video);

;// CONCATENATED MODULE: ./src/layouts/shortcodes/Youtube.tsx

const Youtube_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Nguyen Ngoc Phu\Documents\GitHub\website-lpc\src\layouts\shortcodes\Youtube.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Youtube_esModule, $$typeof: Youtube_$$typeof } = Youtube_proxy;
const Youtube_default_ = Youtube_proxy.default;


/* harmony default export */ const Youtube = (Youtube_default_);
;// CONCATENATED MODULE: ./src/layouts/shortcodes/all.tsx







const shortcodes = {
    Button: shortcodes_Button,
    Accordion: Accordion,
    Video: shortcodes_Video,
    Tab: Tab,
    Tabs: Tabs,
    Notice: shortcodes_Notice,
    Youtube: Youtube
};
/* harmony default export */ const shortcodes_all = (shortcodes);


/***/ }),

/***/ 17222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ getListPage),
/* harmony export */   i: () => (/* binding */ getSinglePage)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71417);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64980);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);




const contentPath = "src/content";
// Helper function to read file content
const readFile = (filePath)=>{
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, "utf-8");
};
// Helper function to parse frontmatter
const parseFrontmatter = (frontmatter)=>{
    const frontmatterString = JSON.stringify(frontmatter);
    return JSON.parse(frontmatterString);
};
// get list page data, ex: _index.md
const getListPage = (filePath)=>{
    const pageDataPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(contentPath, filePath);
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(pageDataPath)) {
        (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.notFound)();
    }
    const pageData = readFile(pageDataPath);
    const { content, data: frontmatter } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(pageData);
    return {
        frontmatter: parseFrontmatter(frontmatter),
        content
    };
};
// get all single pages, ex: blog/post.md
const getSinglePage = (folder)=>{
    const folderPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(contentPath, folder);
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(folderPath) || !fs__WEBPACK_IMPORTED_MODULE_0___default().lstatSync(folderPath).isDirectory()) {
        (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.notFound)();
    }
    const filesPath = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(folderPath);
    const sanitizeFiles = filesPath.filter((file)=>file.endsWith(".md"));
    const filterSingleFiles = sanitizeFiles.filter((file)=>file.match(/^(?!_)/));
    const singlePages = filterSingleFiles.map((filename)=>{
        const slug = filename.replace(".md", "");
        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(folderPath, filename);
        const pageData = readFile(filePath);
        const { content, data: frontmatter } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(pageData);
        const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;
        return {
            frontmatter: parseFrontmatter(frontmatter),
            slug: url,
            content
        };
    });
    const publishedPages = singlePages.filter((page)=>!page.frontmatter.draft && page);
    const filterByDate = publishedPages.filter((page)=>new Date(page.frontmatter.date || new Date()) <= new Date());
    return filterByDate;
};


/***/ }),

/***/ 15915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OI: () => (/* binding */ humanize),
/* harmony export */   gI: () => (/* binding */ markdownify),
/* harmony export */   lV: () => (/* binding */ slugify)
/* harmony export */ });
/* unused harmony export plainify */
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22348);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79553);


marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.use({
    mangle: false,
    headerIds: false
});
// slugify
const slugify = (content)=>{
    return (0,github_slugger__WEBPACK_IMPORTED_MODULE_0__/* .slug */ .o)(content);
};
// markdownify
const markdownify = (content, div)=>{
    return {
        __html: div ? marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.parse(content) : marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .TU.parseInline(content)
    };
};
// humanize
const humanize = (content)=>{
    return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
        return m.toUpperCase();
    });
};
// plainify
const plainify = (content)=>{
    const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, "");
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    const stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
};
// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities)=>{
    let entityList = {
        "&nbsp;": " ",
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&#39;": "'"
    };
    let htmlWithoutEntities = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity)=>{
        return entityList[entity];
    });
    return htmlWithoutEntities;
};


/***/ }),

/***/ 5274:
/***/ (() => {



/***/ }),

/***/ 82503:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"site":{"title":"LPC","base_url":"https://nextplate.netlify.app","yb":"/images/favicon.png","logo":"/images/logo.png","logo_darkmode":"/images/logo.png","logo_width":"143","logo_height":"70","logo_text":"LPC"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"params":{"contact_form_action":"#","copyright":"Copyright © 2023 Lien Phat Technology Corporation. All Rights Reserved."},"navigation_button":{"enable":true,"label":"Get Started","link":"https://github.com/zeon-studio/nextplate"},"metadata":{"meta_author":"Themefisher","meta_image":"/images/og-image.png","meta_description":"Next Boilerplate"}}');

/***/ })

};
;