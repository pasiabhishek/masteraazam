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
        "cover": "/images/books/lekh-by-aazam.jpg"
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
        "cover": "/images/books/raagwaanjyotii.jpg"
      },
      "description": "A poetic work by Master Aazam.",
      "links": {
        "buy": null,
        "read": null
      }
    }
  ]

  return (
    <div className='Book'>
      <h1>Books</h1>
      <p>Words that speak to the soul.</p>

      <form action="">
        <input type="radio" name="book" value="book_001" /> Lekh by Aazam
        <input type="radio" name="book" value="book_002" /> Raagwaanjyotii
      </form>

      <div className='Book_container'>
      </div>
    </div>
  )
}
