import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import { getProducts } from './productsData/products';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css';


class App extends Component {

  state={
    products : [],
    searchQuery : ""
  }


  componentDidMount(){
    const result = getProducts()
    this.setState({products:result,data:result})
  }


  handleChange = e => {
    this.setState({searchQuery: e.target.value})
  }


  filteredSearch = () =>{
    const productsData = [...this.state.products]
    let value =this.state.searchQuery.toLowerCase() 
    return productsData.filter(product => product.name.toLowerCase().includes(value))
  }


  render() { 
    const {searchQuery} = this.state;

    const filteredData = this.filteredSearch()

    return ( 
      <React.Fragment>
        <NavBar value={searchQuery} onChange={this.handleChange} />
        <div className="app">
           <Switch>
           <Route path="/" exact render={()=><Home items={filteredData}/>}/>
           <Route path="/products/:id" render={props => <ProductDetails {...props} items={filteredData} />}/>
           <Route path="/login" component={LoginForm}/>
           <Route path="/register" component={RegisterForm}/>
           <Route path="/products" render={() => <ProductsList items={filteredData}/>}/>
        </Switch>
        </div>
        <Footer/>
      </React.Fragment>
     );
  }
}
 
export default App;
