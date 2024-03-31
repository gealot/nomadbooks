import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '404 | Not Found',
};

const NotFoundImgUrls: string[] = [
  '/page_not_found.png',
  'https://http.dog/404.webp',
  'https://http.cat/404.jpg',
  'https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x1525-klhjkkii.png',
  'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const NotFound = () => {
  return (
    <>
      <Image
        src={NotFoundImgUrls[Math.floor(Math.random() * NotFoundImgUrls.length)]}
        alt="페이지를 찾을 수 없습니다."
        width={800}
        height={640}
        className="m-auto block rounded-xl"
      />
    </>
  );
};

export default NotFound;
