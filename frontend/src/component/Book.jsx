import React from 'react'
import '../component/css/Book.css'
export default function Book() {

  let books = [
    {
      "id": "book_001",
      "title": "Lekh by Aazam",
      "slug": "lekh-by-aazam",
      "author": {
        "name": "Master Aazam",
        "slug": "master-aazam"
      },
      "category": "Poetry",
      "language": "Hindi",
      "publication": {
        "status": "published",
        "year": null
      },
      "specifications": {
        "pages": 108,
        "dimensions": "6 x 9 inches",
        "format": "Paperback"
      },
      "media": {
        "cover": "images/books/lekh-by-aazam-front-cover.jpg"
      },
      "description": "A collection of poetry by Master Aazam.",
      "links": {
        "buy": null,
        "read": null
      }
    },
    {
      "id": "book_002",
      "title": "Raagwaanjyotii",
      "slug": "raagwaanjyotii",
      "author": {
        "name": "Master Aazam",
        "slug": "master-aazam"
      },
      "category": "Poetry",
      "language": "Hindi",
      "publication": {
        "status": "published",
        "year": null
      },
      "specifications": {
        "pages": null,
        "dimensions": null,
        "format": "Paperback"
      },
      "media": {
        "cover": "images/books/raagwanjyoti-front-cover.jpg"
      },
      "description": "A poetic work by Master Aazam.",
      "links": {
        "buy": null,
        "read": null
      }
    }
  ]

  return (
    <div className='Book' id='Book'>
      <div className='Book_background'>
        <h1>Books</h1>
        <p>Words that speak to the soul.</p>


        <div className='Book_container'>
          {books.map((book) => (
            <div className='Book_card' key={book.id}>
              <img width="177px" height="277px" src={book.media.cover} alt={book.title} />
              <h2>{book.title}</h2>
              <p>{book.category}</p>
              <a href={book.media.link} target="_blank" >
                View Details &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
