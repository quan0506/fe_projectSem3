import { useState } from 'react';
import Pagination from "./New/pagination/pagination.jsx";
import Filter from "./New/filter/filter.jsx"

const items = [...Array(23).keys()]; 

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <div>
      <Filter/>
      <h1>Product List</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
    </div>
  );
};

export default Shop;
