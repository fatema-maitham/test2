import { Link } from 'react-router';

const MailboxList = (props) => {
  return (
    <main>
      <h1>Mailboxes</h1>

      <section>
        {props.mailboxes.map((mailbox) => (
          <Link
            to={`/mailboxes/${mailbox._id}`}
            key={mailbox._id} >
            <div className="mail-box" key={mailbox._id}>
              {mailbox._id}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default MailboxList;