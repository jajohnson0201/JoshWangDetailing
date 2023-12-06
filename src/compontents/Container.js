import React, {useState} from 'react';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Location from './pages/Location';
import Review from './pages/Review';
import Gallery from './pages/Gallery';


function Container (){
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const renderPage = () => {
        if(currentPage === 'AboutMe'){
            return <AboutMe />;
        }
        if(currentPage === 'Location'){
            return <Location />;
        }
        if(currentPage === 'Review'){
            return <Review />;
        }
        return <Gallery />;
    };
    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div className='container'> 
            <Header  currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
        
      );
}

export default Container