import React from 'react'
import { Link } from 'react-router-dom';

export default function Catagory() {
    return (
        <div>
            <h1>Catagory</h1>
            <div className="container">
                <div className="row">
                    <Link to='/cat/story' style={{color: 'black', textDecoration :'none'}} className="col sm-12 mx-5">
                        <img src='https://media.istockphoto.com/photos/open-book-with-hand-drawn-landscape-picture-id1146007104?k=20&m=1146007104&s=612x612&w=0&h=2e-mjcg5Xswi3JoWR9S5cG8AoQBED3THHFfrSt25nqk=' alt='story' width= '50%' />
                        <p className='text-muted mx-2'>Story</p>
                    </Link>
                    <Link to='/cat/novel' style={{color: 'black', textDecoration :'none'}} className="col sm-12  mx-5">
                        <img src='https://media.istockphoto.com/photos/row-of-old-books-with-colorful-covers-on-pastel-blue-background-up-picture-id1126130554?k=20&m=1126130554&s=612x612&w=0&h=eohHCqhH7lUd8l4nxjVf9jGhxrvQbm7Fu8EFZZWbD0o=' alt='novel' width= '50%' />
                        <p className='text-muted mx-2'>Novel</p>
                    </Link>
                </div>
                <br />
                <div className="row">
                    <Link to='/cat/friction' style={{color: 'black', textDecoration :'none'}} className="col sm-12  mx-5">
                        <img src='https://cdn.vox-cdn.com/thumbor/Gf2YEIdhhdH59_gA2b5oo-KwkcQ=/0x0:1019x1024/1400x1050/filters:focal(429x431:591x593):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/52605333/new_books.1483624478.png' alt='friction' width='50%' />
                        <p className='text-muted mx-2'>Fiction</p>
                    </Link>
                    <Link to='/cat/sports' style={{color: 'black', textDecoration :'none'}} className="col sm-12  mx-5">
                        <img src='https://static01.nyt.com/images/2015/05/23/sports/23sportsbooks-1/23sportsbooks-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale' alt='sports' width="50%"  />
                        <p className='text-muted mx-2'>Sports</p>
                    </Link>
                </div>
                <br />
                <div className="row">
                    <Link to='/cat/Horror' style={{color: 'black', textDecoration :'none'}} className="col sm-12  mx-5">
                        <img src='https://i.insider.com/6091aa7ef22c6b00185dbd13?width=1000&format=jpeg&auto=webp' alt='Horror' width="50%" height= '50%' />
                        <p className='text-muted mx-2'>Horror</p>
                    </Link>
                    
                    <Link to='/cat/Action and Advanture' style={{color: 'black', textDecoration :'none'}} className="col sm-12  mx-5">
                        <img src='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/imgrok0717_38426.GIF' alt='Action and Adventure' width="50%"/>
                        <p className='text-muted mx-2'>Action and Adventure</p>
                    </Link>
                </div>
                
                </div>
        </div>
    )
}
