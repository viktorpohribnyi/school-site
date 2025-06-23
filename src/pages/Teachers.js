import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import teacher_1 from '../assets/teacher_1.jpg';
import teacher_2 from '../assets/teacher_2.jpg';
import teacher_3 from '../assets/teacher_3.jpg';

function Teachers() {
  const [searchTerm, setSearchTerm] = useState("");
  const teachers = [
  { id: "ivanov", name: "Іван Віталійович", subject: "Математика", photo: teacher_1, description: "Досвідчений викладач математики з 15-річним стажем." },
  { id: "petrova", name: "Олена Петрівна", subject: "Українська мова", photo: teacher_2, description: "Спеціаліст з української мови та літератури." },
  { id: "sergiy", name: "Сергій Миколайович", subject: "Фізика", photo: teacher_3, description: "Професор фізики, любить експерименти та науку." },
];

  const filtered = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <Fade cascade>
        <h2 className="text-center mb-3">Наші Вчителі</h2>
        <p className="text-center text-muted mb-4">
          Знайдіть свого вчителя або предмет за допомогою пошуку.
        </p>
      </Fade>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Пошук за ім’ям або предметом"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {filtered.length > 0 ? (
          <Fade cascade damping={0.1}>
            {filtered.map((teacher, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div
                  className="card h-100 shadow-sm"
                  style={{
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src={teacher.photo}
                    className="card-img-top"
                    alt={teacher.name}
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{teacher.name}</h5>
                    <p className="card-text text-primary fw-semibold">{teacher.subject}</p>
                    <button className="btn btn-outline-primary mt-auto">
                    <Link to={`/teachers/${teacher.id}`} style={{ textDecoration: "none" }}>Детальніше</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        ) : (
          <p className="text-center fst-italic">Нічого не знайдено.</p>
        )}
      </div>

      <Fade triggerOnce>
        <div className="my-5 p-4 bg-light rounded shadow-sm">
          <h4>Цікаві факти про нашу школу</h4>
          <ul>
            <li>Понад 500 учнів навчаються щороку.</li>
            <li>Школа має власну бібліотеку з більш ніж 10,000 книг.</li>
            <li>Регулярно проводяться олімпіади з різних предметів.</li>
            <li>Наші вчителі — лауреати всеукраїнських конкурсів.</li>
            <li>Підтримуємо інноваційні освітні технології та STEM-напрямки.</li>
          </ul>
        </div>
      </Fade>
    </div>
  );
}

export default Teachers;
