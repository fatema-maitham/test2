import { useParams } from 'react-router';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!selectedBox) {
    return <h1>Mailbox Not Found!</h1>;
  }

  return (
    <main>
      <h1>Mailbox {selectedBox._id}</h1>

      <h2>Details</h2>

      <p>Box Owner: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>

      <h2>Letters</h2>

      {selectedLetters.map((letter, index) => (
        <div key={index}>
          <p>Dear {letter.recipient},</p>
          <p>{letter.message}</p>
        </div>
      ))}
    </main>
  );
};

export default MailboxDetails;