import './App.css';
import {Menu} from "./components/Menu";
import {MainWindow} from "./components/MainWindow";
import {ChooseUs} from "./components/ChooseUs";
import {VirtualAsServices} from "./components/VirtualAsServices";
import {VirtualAsServiceEnd} from "./components/VirtualAsServicesEnd";
import {Testimonial} from "./components/Testimonial";
import {Proceduce} from "./components/Proceduce";
import {Price} from "./components/Price";
import {Blog} from "./components/Blog";
import {Message} from "./components/Message";
import {Footer} from "./components/Footer";
import {Loader} from "./components/Loader";
import {Route, BrowserRouter, NavLink} from "react-router-dom";



function App() {
  return (<div>
        <BrowserRouter>
          <Menu/>
          <Route exact path="/" render={()=><MainWindow/>}/>
          <Route path="/about" render={()=><h1>About</h1>}/>
          <Route path="/services" render={()=><h1>Services</h1>}/>
          <Route path="/howItWorks" render={()=><h1>How It Works</h1>}/>
          <Route path="/pricing" render={()=><h1>Pricing Plans</h1>}/>
          <Route path="/blog" render={()=><h1>Blog</h1>}/>
          <Route path="/contact" render={()=><h1>Contact</h1>}/>
          <ChooseUs/>
          <VirtualAsServices/>
          <VirtualAsServiceEnd/>
          <Testimonial/>
          <Proceduce/>
          <Price/>
          <Blog/>
          <Message/>
          <Footer/>
          <Loader/>
        </BrowserRouter>
  </div>
  );
}

export default App;
