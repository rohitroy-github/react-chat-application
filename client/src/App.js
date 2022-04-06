import React from "react";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

//definition for functional component
// function App() {
//   return (
//     <div className="App">
//       <h1>Working !</h1>
//     </div>
//   );
// }

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes> 
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
