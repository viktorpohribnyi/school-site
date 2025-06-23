import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const demoNews = [
  {
    id: 1,
    title: "Успішний старт нового навчального року!",
    content:
      "Перший вересень відзначився урочистою лінійкою, на якій привітали учнів, батьків та вчителів з початком навчального року.",
    date: "2025-09-01",
    category: "Події",
  },
  {
    id: 2,
    title: "Новий спортивний майданчик відкрито",
    content:
      "Школа отримала сучасний спортивний майданчик з обладнанням для футболу, баскетболу та волейболу.",
    date: "2025-09-15",
    category: "Спорт",
  },
  {
    id: 3,
    title: "Олімпіада з математики – перемоги наших учнів",
    content:
      "Учні школи посіли призові місця на міській олімпіаді з математики, демонструючи високий рівень знань.",
    date: "2025-10-05",
    category: "Оголошення",
  },
];

function News() {
  const [selectedCategory, setSelectedCategory] = useState("Всі");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Всі", "Події", "Спорт", "Оголошення"];

  const filteredNews = demoNews.filter((item) => {
    const matchesCategory =
      selectedCategory === "Всі" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Новини школи</h2>

      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Пошук новин..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-6 d-flex justify-content-md-end">
          <select
            className="form-select w-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredNews.length === 0 ? (
        <p className="text-center fst-italic">Новин не знайдено.</p>
      ) : (
        <Fade cascade damping={0.1}>
          {filteredNews.map(({ id, title, content, date, category }) => (
            <div className="card mb-3 shadow-sm" key={id}>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <small className="text-muted">
                  Дата: {new Date(date).toLocaleDateString("uk-UA")} | Категорія:{" "}
                  <span className="badge bg-info text-dark">{category}</span>
                </small>
                <p className="card-text mt-2">{content}</p>
                <Link
                  to={`/news/${id}`}
                  className="btn btn-sm btn-outline-primary"
                >
                  Детальніше
                </Link>
              </div>
            </div>
          ))}
        </Fade>
      )}

      <div className="mt-5 p-4 bg-light rounded shadow-sm text-center">
        <h4>Підпишіться на нашу розсилку</h4>
        <p>Отримуйте останні новини прямо на ваш email.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Дякуємо за підписку!");
          }}
          className="d-flex justify-content-center"
        >
          <input
            type="email"
            placeholder="Ваш email"
            required
            className="form-control w-50 me-2"
          />
          <button type="submit" className="btn btn-primary">
            Підписатися
          </button>
        </form>
      </div>
    </div>
  );
}

export default News;
