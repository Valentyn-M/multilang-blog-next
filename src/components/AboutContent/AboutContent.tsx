import MainTitle from '@/components/MainTitle/MainTitle';
import s from './AboutContent.module.scss';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import ContentBody from '@/components/ContentBody/ContentBody';

export interface AboutContentProps {}

export default function AboutContent({}: AboutContentProps) {
  return (
    <ContentWrapper>
      <MainTitle>About Us</MainTitle>
      <ContentBody>
        <p>
          Welcome to Mini-Blog — a small but mighty multilingual blog project.
        </p>
        <p>
          This project was created by an imaginary team of developers who love
          clean code, accessibility, and beautiful design.
        </p>
        <p>
          Our mission is to demonstrate how even a small blog can be built with
          modern tools like Next.js App Router, TypeScript, and SCSS modules —
          while supporting multiple languages and a great developer experience.
        </p>
        <p>
          This project is open for learning, experimenting, and contributing.
        </p>
        <p>Thank you for visiting!</p>

        {/* <p>
          Ласкаво просимо до Mini-Blog — невеликого, але потужного мультимовного
          блог-проєкту.
        </p>
        <p>
          Цей проєкт створено уявною командою розробників, які цінують чистий
          код, доступність та гарний дизайн.
        </p>
        <p>
          Наша мета — показати, як навіть маленький блог може бути побудований з
          використанням сучасних технологій: Next.js App Router, TypeScript і
          SCSS-модулів — із підтримкою мультимовності та комфортом для
          розробників.
        </p>
        <p>Проєкт відкритий для навчання, експериментів і вдосконалення.</p>
        <p>Дякуємо за візит!</p> */}
      </ContentBody>
    </ContentWrapper>
  );
}
