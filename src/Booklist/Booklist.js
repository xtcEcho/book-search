import React from 'react'
import Book from '../Book/Book'
import BookDetail from '../BookDetail/BookDetail'
import './Booklist.css'

class Booklist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bookIndex: 0,
            showDetail: false
        }
    }
    handleMore = (index) =>{
        this.setState({
            bookIndex: index,
            showDetail:true
        })
    }
    handleBack =()=>{
        this.setState({
            showDetail:false
        })
    }
    render(){
        const books = this.props.booklist.map((book, i) => (
            // console.log(book)
            <Book bookEntry={book} key={i} Index={i}
            onMore={(index) => this.handleMore(index)}/>
        ))
        const bookDetails = this.props.booklist.map((book, i) => (
            <BookDetail bookDetail={book} key={i} Index={i}
            onBack={() => this.handleBack()} />
        ))
        
        const display = this.state.showDetail ? bookDetails[this.state.bookIndex] : books
        
        return(
            <div className="Booklist">
                {display}
            </div>
        )
    }
}

Booklist.defaultProps = {
    booklist : []
}
export default Booklist