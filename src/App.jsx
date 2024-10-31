import { Navbar } from './components'
import { About,Header,Testimonials,Services,Experience,Contact } from './containers'
import './App.css'



const App = () => {
  return (
    <section>
      <Navbar/>
      <About/>
      <Header/>
      <Testimonials/>
      <Services/>
      <Experience/>
      <Contact/>
     
    </section>

    
  )
}

export default App


