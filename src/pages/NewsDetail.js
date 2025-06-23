import { useParams, Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const demoNews = [
  {
    id: 1,
    title: "Успішний старт нового навчального року!",
    content: `
      Перший вересень у нашій школі розпочався святковою урочистою лінійкою. В цей день адміністрація, вчителі та учнівський колектив вітали один одного з початком нового навчального року. Особливу увагу було приділено новачкам — першокласникам, які вперше переступили поріг школи. Цей день залишив теплі спогади у серцях кожного.
    `,
    date: "2025-09-01",
    category: "Події",
    image: "https://via.placeholder.com/800x400?text=1+Вересня",
    quote: "Це був надзвичайний початок — емоцій повно! – Дарина, учениця 5-Б",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Новий спортивний майданчик відкрито",
    content: `
      Школа радо повідомляє про відкриття сучасного спортивного майданчика, оснащеного усім необхідним для занять футболом, баскетболом, волейболом та іншими видами спорту. Майданчик побудований за новітніми стандартами безпеки та комфорту.
    `,
    date: "2025-09-15",
    category: "Спорт",
    image: "https://via.placeholder.com/800x400?text=Майданчик",
    quote: "Тепер ми тренуємось навіть під час перерв! – Андрій, учень 7-А",
    video: "",
  },
  {
    id: 3,
    title: "Олімпіада з математики – перемоги наших учнів",
    content: `
      Учні школи посіли призові місця на міській олімпіаді з математики. Вітаємо наших переможців та їхніх наставників! Ця подія є підтвердженням високої якості освіти у нашій школі.
    `,
    date: "2025-10-05",
    category: "Оголошення",
    image: "https://via.placeholder.com/800x400?text=Математика",
    quote: "Я готувався місяць і це було того варте! – Максим, 9-Б",
    video: "",
  },
];

function NewsDetail() {
  const { id } = useParams();
  const newsItem = demoNews.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="container mt-4">
        <h2>Новина не знайдена</h2>
        <Link to="/news" className="btn btn-secondary mt-3">
          Повернутися до новин
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to="/news" className="btn btn-outline-secondary mb-3">
        &larr; Назад до новин
      </Link>

      <Fade cascade>
        <h2>{newsItem.title}</h2>
        <small className="text-muted">
          Дата: {new Date(newsItem.date).toLocaleDateString("uk-UA")} | Категорія:{" "}
          <span className="badge bg-info text-dark">{newsItem.category}</span>
        </small>

        <hr />

        <img
          src={newsItem.image}
          alt="Зображення новини"
          className="img-fluid rounded mb-3 shadow-sm"
        />

        <p style={{ whiteSpace: 'pre-line' }}>{newsItem.content}</p>

        {newsItem.video && (
          <div className="my-4">
            <h5>Відео з події</h5>
            <video controls className="w-100 rounded shadow">
              <source src={newsItem.video} type="video/mp4" />
              Ваш браузер не підтримує відео.
            </video>
          </div>
        )}

        {newsItem.quote && (
          <blockquote className="blockquote mt-4 p-3 bg-light rounded shadow-sm">
            <p className="mb-0 fst-italic">“{newsItem.quote}”</p>
          </blockquote>
        )}
      </Fade>
    </div>
  );
}

export default NewsDetail;
