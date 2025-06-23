import { useParams, Link } from "react-router-dom";
import teacher_1 from '../assets/teacher_1.jpg';
import teacher_2 from '../assets/teacher_2.jpg';
import teacher_3 from '../assets/teacher_3.jpg';

const teachers = [
  { id: "ivanov", name: "Іван Віталійович", subject: "Математика", photo: teacher_1, description: "Досвідчений викладач математики з 15-річним стажем.", bio: "Іван Іванович закінчив Київський університет і з 2005 року викладає математику. Він любить складні задачі і допомагає учням досягати успіхів." },
  { id: "petrova", name: "Олена Петрівна", subject: "Українська мова", photo: teacher_2, description: "Спеціаліст з української мови та літератури.", bio: "Олена Петрівна має великий досвід роботи та любить викликати інтерес до української мови через творчі завдання." },
  { id: "sergiy", name: "Сергій Миколайович", subject: "Фізика", photo: teacher_3, description: "Професор фізики, любить експерименти та науку.", bio: "Сергій Миколайович завжди використовує практичні приклади на уроках, щоб зацікавити учнів." },
];

function TeacherDetail() {
  const { id } = useParams();
  const teacher = teachers.find(t => t.id === id);

  if (!teacher) {
    return (
      <div className="container mt-4">
        <h2>Вчитель не знайдений</h2>
        <Link to="/teachers" className="btn btn-primary mt-3">Повернутися до списку</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to="/teachers" className="btn btn-outline-secondary mb-3">&larr; Назад</Link>
      <div className="card mb-4 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={teacher.photo} alt={teacher.name} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{teacher.name}</h2>
              <h5 className="text-primary">{teacher.subject}</h5>
              <p className="card-text">{teacher.description}</p>
              <hr />
              <h6>Біографія</h6>
              <p>{teacher.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
