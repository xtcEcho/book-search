import React from 'react'
import './BookDetail.css'
class BookDetail extends React.Component{
    render(){
        const price = (this.props.bookDetail.saleInfo.saleability === "FOR_SALE") ? 
        <p id="price">{this.props.bookDetail.saleInfo.listPrice.currencyCode} {this.props.bookDetail.saleInfo.listPrice.amount}</p> : null
        return(
            <div className="BookDetail">
                <img src={this.props.bookDetail.volumeInfo.imageLinks.thumbnail} />
                <h2 id="title">{this.props.bookDetail.volumeInfo.title}</h2>
                <p id="author">{this.props.bookDetail.volumeInfo.authors}</p>
                {/* <p id="price"></p> */}
                <p id="description">{this.props.bookDetail.volumeInfo.description}</p>
                <p id="publisher">{this.props.bookDetail.volumeInfo.publisher}</p>
                {price}
                <a href={this.props.bookDetail.accessInfo.webReaderLink} id="web-reader" >Web Reader</a>
                <button onClick={()=> this.props.onBack()}>Back</button>
            </div>
        )
    }
}

export default BookDetail