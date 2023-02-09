import Button from 'react-bootstrap/Button';

function Buttons(){
    const mystyle = {
        margin:"75px"
    }
    return (
        <Button size = "lg" style = {mystyle} href='/joinus' variant="dark">Join Us Today </Button>
    )
}

export default Buttons;