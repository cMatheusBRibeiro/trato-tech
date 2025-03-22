import { Header } from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const params = useParams();
  const category = useSelector((state) =>
    state.categories.find((category) => category.id === params.id)
  );

  return (
    <main>
      <Header
        title={category.name}
        description={category.description}
        image={category.header}
      />
    </main>
  );
};

export default CategoryPage;
