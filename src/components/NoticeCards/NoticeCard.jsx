import NewsCard from "../NewsCard/NewsCard";

// Este componente recibe una noticia individual y la muestra
function NoticeCard({ id, type, title, date, content, image, alt }) {
  console.log("NoticeCard recibió ID:", id); // Log para depuración

  return (
    <NewsCard
      id={id}
      type={type}
      title={title}
      date={date}
      content={content}
      image={image}
      alt={alt}
    />
  );
}

export default NoticeCard;
