import { API_CATEGORY, API_DETAIL, CategoryProps, CategoryResult } from '@/types/global';
import CategoryButton from '@/components/common/CategoryButton';

const getCategories = async () => {
  const response = await fetch(API_CATEGORY);
  const data: CategoryProps = await response.json();
  if (data.status !== 'OK') {
    throw new Error('Category를 불러오는 데 실패했습니다.');
  }
  return data.results;
};

const Home = async () => {
  const categories = await getCategories();
  // console.table(categories);
  return (
    <div>
      <ul className="flex flex-wrap justify-between">
        {categories.map((category) => (
          <CategoryButton key={category.list_name_encoded} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
