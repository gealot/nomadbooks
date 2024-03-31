import { Metadata } from 'next';

const AboutPage = () => {
  const metadata: Metadata = {
    title: 'About Us',
    description: 'NomadBooks is a site that provides the bestseller list from the New York Times.',
  };

  return (
    <div className="text-xl font-light leading-8 text-[rgb(var(--foreground-rgb))] dark:text-[rgb(var(--foreground-rgb))]">
      <h1 className="my-6 text-3xl font-normal">About US | 인사말</h1>
      <p>NomadBooks는 미국의 New York Times에서 발표하는 베스트셀러 목록을 제공하는 사이트입니다.</p>
      <p>이 사이트는 Next.js로 만들어졌고, TypeScript로 작성되었으며, Vercel로 배포하였습니다.</p>
      <p className="my-8 text-center">Code with Fun @ Busan & Seoul, Thanks Nico! 😎</p>
    </div>
  );
};

export default AboutPage;
