import { useState } from 'react';
import { useNavigate } from 'react-router';

const LetterForm = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mailboxId: '',
    recipient: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addLetter({
      ...formData,
      mailboxId: Number(formData.mailboxId),
    });

    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <main>
      <h1>New Letter</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Mailbox:</label>

        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
          required
        >
          <option value="">Select a mailbox</option>

          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox._id}
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient:</label>

        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Letter</button>
      </form>
    </main>
  );
};

export default LetterForm;