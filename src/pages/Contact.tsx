
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p>Feel free to get in touch with us through our contact form below or reach us at brochure@site.com</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
