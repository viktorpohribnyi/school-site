import carousel1 from '../assets/photo_1.jpg';
import carousel2 from '../assets/photo_2.jpg';
import carousel3 from '../assets/photo_3.jpg';
import '../App.css';
import { Fade } from 'react-awesome-reveal';

function Home() {
  return (
    <div className="container mt-4">
      <Fade cascade>
        <h1 className="mb-4 text-center">Ласкаво просимо до Червонобаштанського ліцею!</h1>

        <div id="schoolCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel1} className="d-block w-100" alt="Школа 1" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="d-block w-100" alt="Школа 2" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="d-block w-100" alt="Школа 3" style={{ height: '400px', objectFit: 'cover' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#schoolCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#schoolCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        <section className="mb-5 text-center">
          <h2>Місце, де розпочинається майбутнє</h2>
          <p className="lead">Наша школа — це сучасний освітній простір для розвитку талантів, критичного мислення та відповідальності.</p>
        </section>

        <section className="row mb-5 text-center">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h4>🎓 Якість освіти</h4>
              <p>Високий рівень викладання з урахуванням новітніх методик.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h4>🤝 Партнерство</h4>
              <p>Тісна співпраця з батьками, громадою та освітніми установами.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h4>🌱 Розвиток</h4>
              <p>Підтримка індивідуального зростання кожного учня.</p>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h3 className="text-center mb-4">Останні події</h3>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">День науки у школі</h5>
                  <p className="card-text">Учні провели наукові досліди та презентації, щоб продемонструвати свої знання.</p>
                  <p className="text-muted">14 червня 2025</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Концерт до Дня матері</h5>
                  <p className="card-text">Тепла атмосфера, музика, вірші та щирі слова для найрідніших людей.</p>
                  <p className="text-muted">10 травня 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="text-center py-5 bg-light rounded">
          <h3>Приєднуйтесь до нашої дружньої шкільної родини!</h3>
          <p>Маєте питання? Напишіть нам через форму зворотного зв'язку.</p>
          <a href="/contacts" className="btn btn-primary">Зв'язатися з нами</a>
        </section>
      </Fade>
    </div>
  );
}

export default Home;

