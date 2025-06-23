import { useParams, Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const demoEvents = [
  {
    id: 1,
    title: "Свято Першого Дзвоника",
    date: "2025-09-01",
    category: "Свято",
    description:
      "Урочиста лінійка з вітальним словом директора та першими дзвониками для першокласників. Початок о 9:00 на шкільному подвір’ї.",
  },
  {
    id: 2,
    title: "Відкриття нового спортмайданчика",
    date: "2025-09-15",
    category: "Інфраструктура",
    description:
      "Презентація сучасного спорткомплексу. В програмі: показові виступи, турніри та приємні сюрпризи. Початок о 12:00.",
  },
  {
    id: 3,
    title: "Батьківські збори (1-4 класи)",
    date: "2025-09-20",
    category: "Збори",
    description:
      "Зустріч батьків з класними керівниками для обговорення успішності учнів та планів на семестр. Початок о 17:30 в актовій залі.",
  },
  {
    id: 4,
    title: "День вчителя",
    date: "2025-10-01",
    category: "Свято",
    description:
      "Святковий концерт, вручення подяк педагогам, виставки творчості учнів. Початок о 14:00.",
  },
];

function EventDetail() {
  const { id } = useParams();
  const event = demoEvents.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="container mt-4">
        <h2>Подію не знайдено</h2>
        <Link to="/events" className="btn btn-secondary mt-3">
          Повернутися до календаря
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <Fade>
        <Link to="/events" className="btn btn-outline-secondary mb-3">
          &larr; Назад до календаря
        </Link>

        <div className="bg-light p-4 rounded shadow-sm">
          <h2>{event.title}</h2>
          <p className="text-muted mb-2">
            Дата: {new Date(event.date).toLocaleDateString("uk-UA")} | Категорія:{' '}
            <span className={`badge bg-${getCategoryColor(event.category)}`}>
              {event.category}
            </span>
          </p>
          <hr />
          <p>{event.description}</p>
        </div>
      </Fade>
    </div>
  );
}

function getCategoryColor(category) {
  switch (category) {
    case "Свято":
      return "success";
    case "Збори":
      return "warning";
    case "Інфраструктура":
      return "info";
    default:
      return "secondary";
  }
}

export default EventDetail;
