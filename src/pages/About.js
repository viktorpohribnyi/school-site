import { Fade, Slide } from "react-awesome-reveal";

function About() {
  return (
    <div className="container mt-4">
      <Fade cascade>
        <h2 className="mb-4 text-center">Про нашу школу</h2>

        <Slide direction="left" triggerOnce>
          <p className="lead">
            Наша школа заснована у 1991 році і є одним із провідних навчальних закладів у регіоні. 
            Ми поєднуємо багаторічні традиції з інноваційними методиками навчання.
          </p>
        </Slide>

        <div className="row my-5 align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
              alt="Шкільне життя"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
          </div>
          <Fade direction="right" triggerOnce>
            <div className="col-md-6">
              <h4>Наші цінності</h4>
              <ul>
                <li>Висока якість освіти</li>
                <li>Розвиток критичного мислення</li>
                <li>Підтримка кожного учня</li>
                <li>Формування відповідального громадянина</li>
              </ul>
            </div>
          </Fade>
        </div>

        <Slide direction="up" triggerOnce>
          <blockquote className="blockquote text-center my-5">
            <p className="mb-0 fst-italic">
              "Освіта — це найпотужніша зброя, яку ти можеш використати, щоб змінити світ."
            </p>
            <footer className="blockquote-footer mt-2">Нельсон Мандела</footer>
          </blockquote>
        </Slide>

        <Fade triggerOnce>
          <h4>Наша місія</h4>
          <p>
            Створювати комфортне, безпечне та інтелектуальне середовище для розвитку здібностей кожної дитини. 
            Виховувати молодь, яка буде здатна відповідати викликам сучасного світу і впливати на нього позитивно.
          </p>
        </Fade>

        <div className="my-5 p-4 bg-light rounded shadow-sm">
          <h5>Історія школи</h5>
          <p>
            Відкривши свої двері в далекому 1991 році, школа пройшла шлях від невеликого навчального закладу до сучасного комплексного освітнього центру. 
            Щороку ми оновлюємо програми, інтегруємо цифрові технології і підтримуємо таланти у спорті, мистецтві і науці.
          </p>
        </div>
      </Fade>
    </div>
  );
}

export default About;
