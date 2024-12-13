import logo from './logo.svg';

// import './components/index.scss'
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import NotFound from './NotFound';
// import { Route, Routes } from 'react-router-dom'



import React from 'react'
import './App.css';
import Facebooksignin from './components/Facebooksignin';


const App = () => {
  return (
   <div className="App">
     <Facebooksignin />
   </div>
  )
}

export default App











// const App=({props})=> {
  
//   return(
//     <Routes>
//       <Route path='' element={<Home/>} />
//       <Route path='/about' element={<About/>} />
//       <Route path='/contact' element={<Contact/>} />
//       <Route path='*' element={<NotFound/>} />
//     </Routes>
//   )
// }
// export default App;

// function App() {
//     return(
//       <div className='App'>
//           <div className="className">
//             <input type="text" placeholder="Email address or phone number"></input>
//             <input type="password" placeholder="Password"></input>
//             <button>Log in</button> <br/><br/>
//             <p3>Forgotten password?</p3> <br/>
//             <hr></hr>
//             <button>Create new account</button>
//           </div>  
//           <div class="last">
//              <p4><b>Create a Page</b> for a celebrity, brand or business.</p4>
//           </div> 
//      </div>
//     )
// }

// export default App;


