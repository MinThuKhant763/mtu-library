import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import { useState,useEffect } from 'react';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/books')
            .then(response => response.json())
            .then(data => setBooks([...data]));
    }, []);
    console.log(books[0]);
    return (
        <>
            <Sidebar />
            <div className='col-9 offset-3 ' style={ { marginTop: '70px' } }>
                <div className=' row pt-4 ms-2' >                 
                    { books.map(({ id, title, description }) => (
                        <div className='col-3 mb-3' >
                            <Card key={ id } title={ title } description={ description } />
                        </div>
                        )) }   
                </div>
            </div>
            {/* <div style={ {
                    backgroundImage: `url(${ background })`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vh',
                    height: '100vh',
                } }
                    className='w-auto '
                >
                    <div className='d-flex flex-column align-items-center min-vh-100 text-light'>
                        
                            <h1>Welcome to MTU</h1>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quidem consectetur nihil maiores quod corporis optio doloremque distinctio excepturi quisquam qui perspiciatis voluptatem voluptatibus iusto in, deleniti culpa error laborum.</p>
                   </div>
                </div> */}

        </>
    );
};

export default Home;
