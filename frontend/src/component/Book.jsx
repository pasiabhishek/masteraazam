import '../component/css/Book.css'
import books from './data/Books.json'
export default function Book() {

  
  return (
    <div className='Book frame' id='Book'>
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
