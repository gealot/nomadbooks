import BookList from '@/components/common/BookList';
import { API_DETAIL, BookProps } from '@/types/global';
import { toUppercased } from '@/libs/char';

interface IParams {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  const book = id;
  return {
    title: toUppercased(id.replaceAll(/-/g, ' ')),
  };
};

const fetchBookDetail = async (id: string) => {
  const response = await fetch(`${API_DETAIL}${id}`);
  const data = await response.json();
  if (data.status !== 'OK') {
    throw new Error('Book Detail을 불러오는 데 실패했습니다.');
  }
  return data;
};

const DetailPage = async ({ params }: IParams) => {
  const bookList: BookProps = await fetchBookDetail(params.id);
  return (
    <>
      <BookList results={bookList.results} status={''} copyright={''} num_results={0} last_modified={''} />
    </>
  );
};

export default DetailPage;
