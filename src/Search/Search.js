import React from 'react'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            q: "",
            filter:"full",
            orderBy:"relevance",
            // key:"AIzaSyCouuCMlhaa9I10oPoeyA7UqFcPANdX2EE"
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        console.log('submit worked')
        const {q, filter, orderBy} = this.state 
        const params = {q, filter, orderBy}
        console.log(params)
        this.props.handleSearch(params)
    }
    handleQ(searchTerm){
        // const searchTerm =searchTerm.params.val
        this.setState({
            q: searchTerm
        })
        console.log('term updated', this.state)
    }
    handleFilter(filterChoice){
        this.setState({
            filter:filterChoice
        })
        console.log("filter update", this.state)
    }
    handleOrder(orderChoice){
        this.setState({
            orderBy:orderChoice
        })
        console.log('order updated', this.state)
    }
    render(){
        return(
            <div className="Search">
                <form className="Search-form" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="search">Search:</label>
                    <input type="text" name="search" id="search" placeholder="Search book name..." 
                    onChange={e => this.handleQ(e.target.value)}/>
                    <button type="submit">Search</button>
                    <label htmlFor="ebook-only">Book type:</label>
                    <select name="ebook-only" id="ebook-only" onChange={e => this.handleFilter(e.target.value)}>
                        <option value="full">All Books</option>
                        <option value="ebooks">Ebooks only</option>
                    </select>
                    <label htmlFor="sorting">Sort by:</label>
                    <select name="sorting" id="sorting" onChange={e => this.handleOrder(e.target.value)}>
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Search
