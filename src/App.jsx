import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import BrowseBooks from "./pages/BrowseBooks"
import NotFound from "./pages/NotFound"
import AddBook from "./pages/AddBook"
import BookDetails from "./pages/BookDetails"
import Footer from "./components/Footer"

function App() {
 
  return (
    <div>
      {/* navbar should be visible throughout the app navigation so */}
      <NavBar/>

      {/* main contebt wrapper */}
      <main>
        <Routes>
          {/* home page will be shown on the landing page */}
          <Route path="/" element={<Home/>}/>
          {/* book route will land to the browsebook page */}
          <Route path="/books" element={<BrowseBooks/>}/>
          {/* Dynamic category routing: /books/:category */}
          <Route path="/books/:category" element={<BrowseBooks/>}/>
          {/* Dynamic category routing: /books/:id */}
          <Route path="/books/:id" element={<BookDetails/>}/>
          {/* to add a book we will have a page  */}
          <Route path="/add" element={<AddBook/>}/>
          {/* to land on errroe page if a wrong route is accessed */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
