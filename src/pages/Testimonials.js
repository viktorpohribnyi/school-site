import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Testimonials.css'; 
import FeedbackForm from './FeedbackForm';
import gallery_1 from '../assets/gallery_1.jpg';
import gallery_2 from '../assets/gallery_2.jpg';
import gallery_3 from '../assets/gallery_3.jpg';

function Testimonials() {
  const reviews = [
    {
      name: 'Анна, мама учениці',
      text: 'Моя донька щаслива щодня! Дякую за турботу та розвиток.',
    },
    {
      name: 'Ігор, випускник',
      text: 'Тут я знайшов справжніх друзів і вчителів, які в мене вірили.',
    },
    {
      name: 'Оксана, мама першокласника',
      text: 'Чудовий старт шкільного життя. Вчителі — неймовірні!',
    },
  ];

  const gallery = [
    gallery_1,
    gallery_2,
    gallery_3,
  ];

  return (
    <div className="container my-5 testimonials-page">
      <Fade cascade>
        <h2 className="text-center mb-4">Відгуки про школу</h2>

        <Carousel className="mb-5" fade>
          {reviews.map((r, i) => (
            <Carousel.Item key={i} interval={6000}>
              <div className="p-4 bg-light text-center rounded shadow carousel-box">
                <blockquote className="blockquote mb-0">
                  <p>“{r.text}”</p>
                  <footer className="blockquote-footer mt-2">{r.name}</footer>
                </blockquote>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="text-center mb-5">
          <Link to="/feedbackform" className="btn btn-outline-primary btn-lg">
            Залишити свій відгук
          </Link>
        </div>

        <div className="gallery mb-5">
          <h4 className="mb-4">Щасливі моменти з життя школи</h4>
          <div className="row">
            {gallery.map((img, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <img src={img} alt={`gallery-${idx}`} className="img-fluid rounded shadow-sm gallery-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="alert alert-info shadow-sm text-center">
        <p className="mb-2">Ми завжди раді зворотному зв’язку! Допоможіть нам стати ще кращими ❤️</p>
        <a href="/feedbackform" className="btn btn-outline-primary btn-sm">Залишити відгук</a>
        </div>
      </Fade>
    </div>
  );
}

export default Testimonials;
