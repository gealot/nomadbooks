'use client';
import { extractYear } from '@/libs/date';
import NewTag from './NewTag';
import { useRouter } from 'next/navigation';
import { CategoryResult } from '@/types/global';

const CategoryButton = ({ category }: { category: CategoryResult }) => {
  const router = useRouter();
  return (
    <li
      key={category.list_name_encoded}
      onClick={() => router.push(`/list/${category.list_name_encoded}`)}
      className="mx-4 my-3 inline-flex cursor-pointer items-center rounded-xl border border-solid border-gray-400 bg-white px-4 py-2 align-middle text-gray-700 transition-all hover:scale-110 hover:border-0 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white dark:border-0"
    >
      {category.display_name}{' '}
      {extractYear(category.newest_published_date) === new Date().getFullYear().toString() ? <NewTag /> : ''}
    </li>
  );
};

export default CategoryButton;
