import { useState } from 'react';
import './filter.css';

const Filter = () => {
    const [selectedFilters, setSelectedFilters] = useState({});
    // const [sortOption, setSortOption] = useState('New Product');

    const filters = {
        'Brand': ['Brand A', 'Brand B', 'Brand C'],
        'Price': ['Under $50', '$50 - $100', 'Above $100'],
        'Collection': ['Collection 1', 'Collection 2', 'Collection 3'],
    };

    // const sortOptions = ['New Product', 'Price increases', 'Price decreases'];

    const handleFilterChange = (category, value) => {
        setSelectedFilters((prev) => {
            const isSelected = prev[category]?.includes(value);
            if (isSelected) {
                return {
                    ...prev,
                    [category]: prev[category].filter((item) => item !== value),
                };
            } else {
                return {
                    ...prev,
                    [category]: prev[category] ? [...prev[category], value] : [value],
                };
            }
        });
    };

    // const handleSortChange = (option) => {
    //     setSortOption(option);
    // };

    return (
        <div className="filter-container">
            <div className="filters">
                {Object.keys(filters).map((category) => (
                    <div className="dropdown" key={category}>
                        <button className="dropbtn">{category}</button>
                        <div className="dropdown-content">
                            {filters[category].map((item) => (
                                <label key={item}>
                                    <input
                                        type="checkbox"
                                        value={item}
                                        checked={selectedFilters[category]?.includes(item) || false}
                                        onChange={() => handleFilterChange(category, item)}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                        <div className="selected-filters">
                            {selectedFilters[category]?.map((item) => (
                                <span key={item} className="selected-filter">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="sort">
                <button className="dropbtn">{sortOption}</button>
                <div className="dropdown-content">
                    {sortOptions.map((option) => (
                        <a key={option} onClick={(e) => { e.preventDefault(); handleSortChange(option); }}>{option}</a>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default Filter;
