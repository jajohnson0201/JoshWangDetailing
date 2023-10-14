import React, {useState} from 'react';
import InitMap from './pages/Map';

export default function Container (){
    const [currentPage, setCurrentPage] = useState('Map');
    const renderPage = () => {
        if (currentPage === 'Map') {
          return <InitMap />;
        }
        
      };
      const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            
        </div>
      );
}