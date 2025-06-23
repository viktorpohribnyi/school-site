import { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

function Contacts() {
  const form = useRef();
  const [ip, setIp] = useState("");

  useEffect(() => {
    axios.get("https://api.ipify.org?format=json")
      .then(res => setIp(res.data.ip))
      .catch(() => setIp("IP недоступна"));
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const timestamp = new Date().toLocaleString();
    form.current.querySelector('[name="timestamp"]').value = timestamp;

    form.current.querySelector('[name="user_ip"]').value = ip;

    emailjs.sendForm(
      'service_wchnpwc',       
      'template_pcwonro',     
      form.current,
      'XOs1foabTAX2M3Dzf'       
    )
    .then(() => {
      alert('✅ Повідомлення надіслано!');
      form.current.reset();
    }, () => {
      alert('❌ Сталася помилка при надсиланні.');
    });
  };

  return (
    <div className="container mt-4">
      <h2>Контакти</h2>
      <p>📍 Адреса: вул. Освітня, 12, м. Київ</p>
      <p>📞 Телефон: +380 44 123 45 67</p>
      <p>📧 Email: school@example.com</p>

      <h4 className="mt-4">Зворотній зв'язок</h4>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">Ім’я</label>
          <input name="name" type="text" className="form-control" placeholder="Ваше ім’я" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control" placeholder="example@gmail.com" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Тема звернення</label>
          <input name="subject" type="text" className="form-control" placeholder="Наприклад: Запис до школи" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Повідомлення</label>
          <textarea name="message" className="form-control" rows="4" placeholder="Напишіть своє питання..." required></textarea>
        </div>

        <input type="hidden" name="timestamp" />
        <input type="hidden" name="user_ip" />

        <button type="submit" className="btn btn-primary">Надіслати</button>
      </form>
    </div>
  );
}

export default Contacts;
