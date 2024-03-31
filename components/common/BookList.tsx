'use client';
import { Book, BookProps, BookResult } from '@/types/global';
import Image from 'next/image';
import styles from '@/styles/BookList.module.css';

const BookList = ({ results }: BookProps) => {
  const { books }: BookResult = results;
  return (
    <div className="grid grid-cols-1 items-start gap-4 text-[rgb(var(--foreground-rgb))] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dark:text-[rgb(var(--foreground-rgb))]">
      {books &&
        books.map((book: Book) => (
          <div key={book.primary_isbn13} className={styles.bookcard}>
            <Image
              src={book.book_image}
              alt={book.title}
              placeholder="empty"
              height={book.book_image_height}
              width={book.book_image_width}
              className="m-auto cursor-pointer rounded-xl transition duration-300 ease-in-out hover:scale-105"
              onClick={() => {
                book.amazon_product_url && window.open(book.amazon_product_url, '_blank');
              }}
            />
            <h1
              className="my-4 max-h-24 cursor-pointer text-center text-xl font-semibold leading-none transition-all hover:scale-110"
              onClick={() => {
                book.amazon_product_url && window.open(book.amazon_product_url, '_blank');
              }}
            >
              {book.title}
            </h1>
            {book.description === '' ? null : (
              <dl className="description flex-col">
                <dt className="mb-1">책소개</dt>
                <dd className="mb-2 text-justify italic proportional-nums hover:overflow-visible hover:whitespace-pre-line">
                  {book.description}
                </dd>
              </dl>
            )}

            <dl>
              <dt>저자</dt>
              <dd className="w-44 text-right hover:overflow-visible hover:whitespace-pre-line">{book.author}</dd>
            </dl>
            <dl>
              <dt className="w-11">출판사</dt>
              <dd>{book.publisher}</dd>
            </dl>
            <dl>
              <dt>ISBN-13</dt>
              <dd>{book.primary_isbn13}</dd>
            </dl>
            <dl>
              <dt>ISBN-10</dt>
              <dd>{book.primary_isbn10}</dd>
            </dl>
            <dl>
              <dt>순위</dt>
              <dd>{book.rank}</dd>
            </dl>
            {book.rank_last_week === 0 ? (
              ''
            ) : (
              <dl>
                <dt>지난 주 순위</dt>
                <dd>{book.rank_last_week}</dd>
              </dl>
            )}
            {book.weeks_on_list === 0 ? (
              ''
            ) : (
              <dl>
                <dt>순위 진입 주차</dt>
                <dd>{book.weeks_on_list}</dd>
              </dl>
            )}
            {book.price === '0.00' ? (
              ''
            ) : (
              <dl>
                <dt>가격</dt>
                <dd>${book.price}</dd>
              </dl>
            )}
            <dl>
              <dt className="w-11">구입처</dt>
              <div className="flex flex-col items-end justify-between">
                {book.buy_links.map((link) => (
                  <dd
                    className="cursor-pointer hover:text-[rgb(var(--foreground-rgb))] hover:underline hover:decoration-sky-500 hover:decoration-2 dark:hover:text-[rgb(var(--foreground-rgb))]"
                    key={link.url}
                    onClick={() => {
                      link.url && window.open(link.url, '_blank');
                    }}
                  >
                    {link.name}
                  </dd>
                ))}
              </div>
            </dl>
          </div>
        ))}
    </div>
  );
};

export default BookList;
