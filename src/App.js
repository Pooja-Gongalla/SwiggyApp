<<<<<<< HEAD
/*
   -> Header
     *Logo
     *NavItems
   ->Body
     search
     RestaurantContainer
     RestaurantCard
       -Image
       -Restaurant name
       -Rating
       -cuisine
       -delivery time
  ->Footer
   Copyright
   link
   adress
   Contact
*/


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './Components/Header';
// import RestaurantCard from './Components/RestaurantCard';
// import Body from './Components/Body';
// import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
// import About from './Components/About';
// import ReactDOM from 'react-dom/client';
// import Contact from './Components/Contact';
// import Error from './Components/Error';

// function AppLayout() {
//   return (
//     <div className="App">
//        <Header/>
//        {/*  //all the childrens come and go over the outlets */}
//        <Outlet/>
//     </div>
//   );
// }
// //creating configuration inside the appRouter
// const appRouter=createBrowserRouter([
//       {
//      path:"/",
//      element:<AppLayout/>,
//      children:[ //creating the children root
//          {
//            path:'/',
//            element:<Body/>,
//          },
//          {
//          path:"/about",
//          element:<About/>,
//          },
//          {
//             path:"/contact",
//             element:<Contact/>,
//            },
//      ],
//      errorElement:<Error/>,
//      },  
  
//   //  {
//     //  path:"/",
//     //  element:<AppLayout/>,
//     //  errorElement:<Error/>,
//     //  },
//     //  {
//     //  path:"/about",
//     //  element:<About/>,
//     //  },
//     //  {
//     //   path:"/contact",
//     //   element:<Contact/>,
//     //  },
// ]);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter}/>); //provide the configuration to render it
// export default AppLayout;

import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
//import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
//import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './Components/RestaurantMenu';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//import Grocery from './Components/Grocery';
const Grocery=lazy(()=>import("./Components/Grocery"));
const About=lazy(()=>import("./Components/About"));
function AppLayout() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Body/> }/>
        <Route path='/about' element={<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='*' element={<Error/>}/>  */}
        <Route path='/restaurants/:resId' element={<RestaurantMenu/>}/>
        <Route path='/grocery' element={<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>} />
      {/* <Outlet /> All child components will be rendered here */} 
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default AppLayout;

// // Creating configuration inside the appRouter
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//     errorElement: <Error />, // Error boundary for the root route
//   },
// ]);

// // Guard to ensure createRoot is called only once
// const rootElement = document.getElementById("root");

// if (!rootElement._reactRootContainer) {
//   // Create the root only if it hasn't been created already
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <RouterProvider router={appRouter} />
//     </React.StrictMode>
//   );
// } else {
//   console.warn('Root already exists, skipping createRoot call');
// }
// export default AppLayout;
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 26d3ea1 (first commit)
