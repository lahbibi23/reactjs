import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample2;