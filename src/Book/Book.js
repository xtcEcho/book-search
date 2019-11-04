import React from 'react'
import './Book.css'

class Book extends React.Component{
    render(){
        return(
            <div className="Book">
                <div className="book-img">
                    <img src={this.props.bookEntry.volumeInfo.imageLinks.smallThumbnail}/>
                </div>
                <div className="book-text">
                    <h2 id="title">{this.props.bookEntry.volumeInfo.title}</h2>
                    <p id="author">{this.props.bookEntry.volumeInfo.authors}</p>
                    <p id="description">{this.props.bookEntry.volumeInfo.description}</p>
                    <button onClick={() => this.props.onMore(this.props.Index)}>More</button>
                </div>
            </div>
        )
    }
}

export default Book