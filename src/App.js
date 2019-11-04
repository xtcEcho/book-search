import React from 'react';
import './App.css';
import Search from './Search/Search'
import Booklist from './Booklist/Booklist'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      books:[]
    }
  }
  
  updateSearch(newParams){
    console.log(newParams)
    // console.log(this.state.searchTerm === "")
    if (newParams.q !==""){
      const query = Object.keys(newParams).map(param => (
        // console.log(newParams[param])
        
        encodeURIComponent(param) + "=" + encodeURIComponent(newParams[param])
          
        
      )).join("&")
  
      const urlBase= 'https://www.googleapis.com/books/v1/volumes'
      const url = urlBase +"?" + query
      console.log(url)
      const options = {
        method: 'GET',
      }
  
      fetch(url, options).then(res => {
        if(!res.ok){
          throw new Error('Something went wrong, please try again.')
        }
        return res.json()
      })
      .then(resJson => {
        console.log(resJson.items)
        this.setState({
          books: resJson.items,
          error:null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    }

    console.log(this.state.books)

  }


  render(){
    return(
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <Search searchParams={this.state.params} handleSearch={newParams => this.updateSearch(newParams)}
           />
          <Booklist booklist={this.state.books} />
        </main>
      </div>
    )
  }
}


export default App;
