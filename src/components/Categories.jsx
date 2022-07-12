const Categories = ({ allCategories, filterItems }) => {
  console.log(allCategories);
  return (
    <div className="categories flex gap-4 ">
      {allCategories.map((categoryItem, index) => {
        return (
          <button
            className="bg-green-600 rounded-sm px-2 "
            onClick={() => filterItems(categoryItem)}
            key={index}
          >
            {categoryItem}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
