import { useState } from "react";
import axios from 'axios';



function Contact() {

  const [formdata, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      await axios.post('http://localhost:5000/inquiries', formdata)
      setStatus('Message sent successfully');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
    catch (err) {
      setStatus('Something wrong', err);
    }

  }

  return (

    <div className="container mt-4 mb-4">
      <h3>Contact Us</h3>
      <p>Feel free to reach out to us with any inquiries or feedback. We’d love to hear from you!</p>

      <div>
        <p><strong>Address:</strong>123 Gym Street AbcXyz</p>
        <p><strong>Phone:</strong>+91 9988776655</p>
        <p><strong>Email:</strong>contact@ascegym.com</p>
      </div>

      <div>
        <form className="d-flex flex-column w-50 gap-3" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" className="p-2" required value={formdata.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" className="p-2" required value={formdata.email} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Your Subject" className="p-2" required value={formdata.subject} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" className="p-2" required value={formdata.message} onChange={handleChange}></textarea>
          <button type="submit" className="btn btn-success">Send Message</button>
        </form>
      </div>
      {status && <p className="text-success">{status}</p>}
    </div>
  );
}

export default Contact;
