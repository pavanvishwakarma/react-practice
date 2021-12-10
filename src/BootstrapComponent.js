import { Button, Alert } from 'react-bootstrap';
function BootstrapComponent(){
    return(
        <div>
            <h2>Bootstrap Component</h2>

            <Button variant="warning"  className="d-inline mb-2" onClick={()=>alert("Clicked")}>Primary</Button>
          {
            [
              'primary',
              'secondary',
              'success',
              'danger',
              'warning',
              'info',
              'light',
              'dark',
            ].map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                This is a {variant} alert—check it out!
              </Alert>
            ))
          }
        </div>
    )
}
export default BootstrapComponent;