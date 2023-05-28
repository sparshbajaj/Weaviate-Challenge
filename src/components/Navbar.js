import React from "react";
import Logo from '../assets/logo.svg';
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [searchOpen, setSearchOpen] = React.useState(false);
  
    const handleNavbarClick = () => {
      setNavbarOpen((prevNavbarOpen) => !prevNavbarOpen);
    };
  
    return (
      <>
         <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 md:rounded-none rounded-b-3xl">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <button
                className="text-gray-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={handleNavbarClick}
              >
                <Bars3Icon className="w-6 h-6" />
              </button>  
            <a className="block logo text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img className="h-12 w-auto" src={Logo} alt="Logo" />
            </a> 
            <button
              className="text-gray-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-start gap-12 w-1/2 justify-center md:justify-end mt-10 md:mt-0 ${
                navbarOpen ? "flex" : "hidden"
            } flex-col lg:flex-row lg:order-none order-1`}
            id="example-navbar-danger"
            >

            <ul className="md:flex items-center md:gap-6 gap-10">
                <li>
                  <a className="text-gray-500 transition hover:text-green-500 text-lg" href="/">
                    Weaviate Cloud Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-green-500 text-lg"
                    href="/"
                  >
                    Company
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-green-500 text-lg"
                    href="/"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-green-500 text-lg"
                    href="/"
                  >
                    Developers
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-6 text-sm lg:order-none order-2 mb-10 md:my-0">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-500 transition hover:text-green-500 text-lg" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.73" height="21.719" viewBox="0 0 21.73 21.719"><g transform="translate(-1010 -27.001)" opacity="1"><path d="M1017.85,48.71a4.345,4.345,0,0,1-.85-.25,2.186,2.186,0,0,1-1.26-2.01c-.02-1.92-.01-3.83,0-5.75a2.263,2.263,0,0,1,4.51-.26c.01.1.01.2.01.3v5.69a2.232,2.232,0,0,1-1.77,2.22c-.1.02-.22,0-.31.07h-.34Z" fill="currentColor"/><path d="M1031.73,40.77c-.08.1-.05.23-.07.35a2.245,2.245,0,0,1-2.18,1.84h-5.77a2.245,2.245,0,0,1-.29-4.47,4.708,4.708,0,0,1,.53-.03h5.43a2.234,2.234,0,0,1,2.01,1.13,1.827,1.827,0,0,1,.28.88.211.211,0,0,0,.06.18v.12Z" fill="currentColor"/><path d="M1021.48,32.1V29.3a2.244,2.244,0,0,1,4.46-.4,3.15,3.15,0,0,1,.04.53v5.54a2.25,2.25,0,0,1-4.5.03V32.1Z" fill="currentColor"/><path d="M1014.56,39.81a6.915,6.915,0,0,1-.08,1.48,2.265,2.265,0,1,1-2.16-2.85h2.06c.15,0,.19.04.19.19v1.18Z" fill="currentColor"/><path d="M1022.9,44.19a11.323,11.323,0,0,1,1.27.04,2.248,2.248,0,1,1-2.7,2.17v-2c0-.17.05-.22.22-.22h1.21Z" fill="currentColor"/><path d="M1010,34.91c.08-.1.05-.23.07-.35a2.245,2.245,0,0,1,2.18-1.84h5.77a2.245,2.245,0,0,1,.29,4.47,4.707,4.707,0,0,1-.53.03h-5.43a2.234,2.234,0,0,1-2.01-1.13,1.827,1.827,0,0,1-.28-.88.211.211,0,0,0-.06-.18v-.12Z" fill="currentColor"/><path d="M1018.84,31.49a11.323,11.323,0,0,1-1.27-.04,2.248,2.248,0,1,1,2.7-2.17v2c0,.17-.05.22-.22.22h-1.21Z" fill="currentColor"/><path d="M1027.19,35.76a7.257,7.257,0,0,1,.06-1.29,2.2,2.2,0,0,1,2.18-1.74,2.245,2.245,0,1,1-.04,4.49c-.65-.01-1.3,0-1.95,0-.2,0-.26-.07-.25-.26.01-.37,0-.75,0-1.21Z" fill="currentColor"/></g></svg>
                  </a>

                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-green-500 text-lg" href="/">
                    <svg className="h-5 w-auto fill-current" xmlns="http://www.w3.org/2000/svg" width="21.429" height="21.089" viewBox="0 0 21.429 21.089">
                      <g transform="translate(-1051.175 -27.35)" opacity="1">
                      <path d="M1063.86,42.89a10.873,10.873,0,0,0,1.7-.35,4.192,4.192,0,0,0,3.07-3.58,5.862,5.862,0,0,0-.08-2.73,3.9,3.9,0,0,0-.76-1.4.336.336,0,0,1-.08-.38,3.961,3.961,0,0,0-.11-2.5.232.232,0,0,0-.26-.18,3.065,3.065,0,0,0-1.07.23,7.281,7.281,0,0,0-1.51.8.459.459,0,0,1-.38.07,10.114,10.114,0,0,0-4.95,0,.438.438,0,0,1-.4-.07,5.938,5.938,0,0,0-2.27-1c-.46-.07-.51-.05-.63.39a3.972,3.972,0,0,0-.02,2.34.248.248,0,0,1-.04.26,4.7,4.7,0,0,0-.94,3.89,4.9,4.9,0,0,0,.96,2.49,4.655,4.655,0,0,0,2.85,1.59c.31.07.63.11.97.17a2.381,2.381,0,0,0-.62,1.32c-.02.12-.09.15-.18.19a2.22,2.22,0,0,1-2.95-.94,2.268,2.268,0,0,0-1.51-1.12.9.9,0,0,0-.4.01c-.27.07-.31.21-.11.41a1.116,1.116,0,0,0,.24.19,2.38,2.38,0,0,1,1.11,1.35,2.637,2.637,0,0,0,2.95,1.66,5.774,5.774,0,0,0,.58-.08c.16-.03.21.01.2.18,0,.57.01,1.14.01,1.71a.547.547,0,0,1-.8.57,9.574,9.574,0,0,1-2.61-1.32,10.585,10.585,0,0,1-4.64-9.34,10.727,10.727,0,1,1,14.26,10.64c-.6.21-.9,0-.89-.64,0-.89,0-1.79.02-2.68a2.868,2.868,0,0,0-.7-2.11Z" fill="currentColor"/>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-green-500 text-lg" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.66" height="16.029" viewBox="0 0 19.66 16.029"><g transform="translate(-1093.1 -29.84)" opacity="1"><path d="M1093.85,35.49a4.146,4.146,0,0,0,1.79.48,4.057,4.057,0,0,1-1.74-2.86,3.907,3.907,0,0,1,.52-2.51,3.6,3.6,0,0,1,.33.35,11.415,11.415,0,0,0,6.46,3.67,13.22,13.22,0,0,0,1.39.18c.12.01.16,0,.14-.15a4.047,4.047,0,0,1,6.39-4.01,2.516,2.516,0,0,1,.35.3.371.371,0,0,0,.44.11,8.615,8.615,0,0,0,2.13-.82c.04-.02.09-.04.17-.08a4.216,4.216,0,0,1-1.66,2.18,7.648,7.648,0,0,0,2.2-.59,7,7,0,0,1-.98,1.21,7.408,7.408,0,0,1-.9.78.293.293,0,0,0-.13.26,11.6,11.6,0,0,1-5.03,9.95,10.4,10.4,0,0,1-4.81,1.82,11.83,11.83,0,0,1-4.88-.35,11.066,11.066,0,0,1-2.85-1.28.379.379,0,0,1-.08-.07,8.213,8.213,0,0,0,5.92-1.67,5.727,5.727,0,0,1-.8-.11,4.065,4.065,0,0,1-2.89-2.51c-.08-.19-.07-.2.14-.17a4.23,4.23,0,0,0,1.42-.05c.04,0,.07-.03.12-.04a4.072,4.072,0,0,1-3.15-4.01Z" fill="currentColor"/></g></svg>
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-green-500 text-lg" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.958" height="18.942" viewBox="0 0 26.958 18.942"><g transform="translate(-1129.57 -28.4)" opacity="1"><path d="M1129.57,41.28V33.55c.03-.35.07-.69.11-1.04a5.088,5.088,0,0,1,.6-2.02,3.824,3.824,0,0,1,2.57-1.72,14.327,14.327,0,0,1,3.52-.37h12.31c.84,0,1.68,0,2.52.06a9.85,9.85,0,0,1,2.68.51,3.457,3.457,0,0,1,2.24,2.27,9.645,9.645,0,0,1,.38,2.77c.04,2.29.03,4.58.01,6.86a11.539,11.539,0,0,1-.31,2.68,4.24,4.24,0,0,1-3.09,3.38,11.021,11.021,0,0,1-3.01.4c-4.44.02-8.87.01-13.31.01a12.437,12.437,0,0,1-3.59-.43,4.339,4.339,0,0,1-2.89-2.29,7.363,7.363,0,0,1-.62-2.35,8.064,8.064,0,0,0-.1-.99Zm10.37-3.52v2.79a.882.882,0,0,0,1.39.85c1.81-.94,3.61-1.89,5.42-2.83a.909.909,0,0,0,.57-.84.92.92,0,0,0-.58-.83q-2.7-1.4-5.41-2.81a.886.886,0,0,0-1.39.85v2.82Z" fill="currentColor"/></g></svg>
                  </a>
                </li>
                <li>
                <a className="text-gray-500 transition hover:text-green-500 text-lg" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21.192" height="21.187" viewBox="0 0 21.192 21.187"><g transform="translate(-1174.368 -27.25)" opacity="1"><path d="M1184.35,27.26h1.24a1.68,1.68,0,0,0,.45.05,10.639,10.639,0,0,1,9.35,8.7c.07.4.11.81.17,1.22v1.24c-.01.07-.03.15-.04.22a10.448,10.448,0,0,1-4.15,7.58,10.3,10.3,0,0,1-7.49,2.11,10.168,10.168,0,0,1-5.9-2.59,10.4,10.4,0,0,1-3.6-7.52,10.017,10.017,0,0,1,1.24-5.41,10.492,10.492,0,0,1,7.51-5.45c.4-.08.81-.09,1.21-.16Zm-6.3,7.26a.786.786,0,0,0,1.05.75,18.841,18.841,0,0,1,3.89-.5,17.753,17.753,0,0,1,4.59.5,18.41,18.41,0,0,1,3.68,1.34.828.828,0,0,0,.72-1.49,19.172,19.172,0,0,0-7.41-1.98,19.924,19.924,0,0,0-5.81.51.864.864,0,0,0-.7.88Zm5.38,2.76a17.19,17.19,0,0,0-4.04.49.858.858,0,0,0-.71.75.684.684,0,0,0,.9.87,15.546,15.546,0,0,1,3.33-.47,14.437,14.437,0,0,1,5.95,1.07c.4.16.78.35,1.16.53.33.15.46.12.67-.16.08-.11.16-.23.23-.35a.653.653,0,0,0-.3-.97A15.964,15.964,0,0,0,1183.43,37.28Zm.05,5.38a11.271,11.271,0,0,1,4.34.91c.37.15.72.34,1.08.52a.531.531,0,0,0,.79-.46,1.322,1.322,0,0,0-.09-.65.545.545,0,0,0-.24-.28,12.682,12.682,0,0,0-5.2-1.5,12.868,12.868,0,0,0-4.45.5.447.447,0,0,0-.32.26,1.413,1.413,0,0,0-.16.7.519.519,0,0,0,.59.52,1.087,1.087,0,0,0,.3-.07,11.887,11.887,0,0,1,3.37-.46Z" fill="currentColor"/></g></svg>
                </a>
                </li>
              </ul>
              </div>
          </div>
          <div className="pl-10">
              <form className="mb-0 hidden lg:flex">
                <div className="relative">
                  <input
                    className="h-10 pl-8 rounded-lg border-gray-500 text-sm placeholder-gray-500 focus:z-10"
                    placeholder="Search"
                    type="text" 
                    style={{borderWidth: '1px'}}/>
                  <button
                    type="submit"
                    className="absolute inset-y-0 start-0 rounded-l-lg p-2 text-gray-600">
                    <span className="sr-only">Submit Search</span>
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                  </button>
                  <button className="absolute inset-y-0 end-0 flex items-center text-black border border-gray-500 rounded-lg p-1 hover:bg-green-500 w-9 text-sm mr-2" style={{height: '1.6rem', marginTop:'7px'}}>
                    ⌘K
                  </button>
                </div>
              </form>
            </div>
        </div>
      </nav>
      {/* Conditionally render search form */}
      {searchOpen && (
        <div className="container mx-auto px-4">
          <form>
            <input
              type="text"
              className="w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              placeholder="Search..."
            />
          </form>
        </div>
      )}
    </>
  );
}
