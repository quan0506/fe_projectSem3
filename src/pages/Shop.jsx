import { useState } from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Pagination from "../components/pagination/pagination";
import Filter from "../components/filter/filter"

const items = [...Array(100).keys()]; 

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      <Header/>
      <Filter/>
      <h1>Product List</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
      <Footer/>
    </div>
  );
};

export default Shop;
