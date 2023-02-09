import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from "../resources/logo.png"

function ContactComponent() {
    const mystyle = {
        padding:"20px"
    }
    const clicked = () => {
        alert("You're message has been sent.")
    }

    return (
        <>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
                <img style ={mystyle} src={logo} alt="ComeWithMe Logo" />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                            <Form.Label>Message</Form.Label>
                            <div >
                            <Form.Control  type="text" placeholder="Write your message here..." />
                            </div>
                        </Form.Group>
                    <Button onClick={clicked} href="/" variant="danger" type="submit">
                        Send!
                    </Button>
                </Form>
            </div>
        </div>
        </>
    );
}

export default ContactComponent;