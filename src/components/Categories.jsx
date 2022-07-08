const Categories = ({ allCategories, filterItems }) => {

    


  return (
    <div className="categories">
      {allCategories.map((categoryItem, index) => {
        return <button onClick={() => filterItems(categoryItem)} key={index}>{categoryItem}</button>;
      })}
    </div>
  );
};

export default Categories;
