import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/EventsCalendar.css'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const demoEvents = [
  {
    id: 1,
    date: '2025-09-01',
    title: 'Свято Першого Дзвоника',
    category: 'Свято',
    description: 'Урочиста лінійка для учнів, батьків та вчителів.',
  },
  {
    id: 2,
    date: '2025-09-15',
    title: 'Відкриття нового спортмайданчика',
    category: 'Інфраструктура',
    description: 'Запрошуємо всіх на презентацію нових спортивних можливостей.',
  },
  {
    id: 3,
    date: '2025-09-20',
    title: 'Батьківські збори (1-4 класи)',
    category: 'Збори',
    description: 'Інформація про навчальний процес та плани на семестр.',
  },
  {
    id: 4,
    date: '2025-10-01',
    title: 'День вчителя',
    category: 'Свято',
    description: 'Вітання педагогів та святковий концерт.',
  },
];

function EventsCalendar() {
  const [date, setDate] = useState(new Date());

  const selectedDate = date.toISOString().split('T')[0];
  const filteredEvents = demoEvents.filter((e) => e.date === selectedDate);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Свято':
        return 'success';
      case 'Збори':
        return 'warning';
      case 'Інфраструктура':
        return 'info';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="container my-5 calendar-page">
      <Fade cascade damping={0.15}>
        <h2 className="text-center mb-4">Календар подій школи</h2>

        <div className="row">
          <div className="col-md-6 mb-4">
            <Calendar onChange={setDate} value={date} />
            <p className="mt-3">
              <strong>Обрана дата:</strong>{' '}
              {date.toLocaleDateString('uk-UA')}
            </p>
          </div>

          <div className="col-md-6">
            <h5>Події на цю дату:</h5>
            {filteredEvents.length === 0 ? (
              <p className="fst-italic">Подій немає.</p>
            ) : (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="card mb-3 shadow-sm border-start border-4 border-primary"
                >
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <span
                      className={`badge bg-${getCategoryColor(
                        event.category
                      )} mb-2`}
                    >
                      {event.category}
                    </span>
                    <p className="card-text">{event.description}</p>
                    <Link
                      to={`/events/${event.id}`}
                      className="btn btn-sm btn-outline-primary"
                    >
                      Детальніше
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="text-muted">
            Натисніть на дату в календарі, щоб переглянути заплановані події.
          </p>
        </div>
      </Fade>
    </div>
  );
}

export default EventsCalendar;
