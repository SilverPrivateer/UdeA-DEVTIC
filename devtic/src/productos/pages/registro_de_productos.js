
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Registro_de_productos =() => {
    return(
        <Container>

            <h1 className="d-flex justify-content-center mt-5 mb-5">Registro de Productos</h1>
            
            
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese identificador del producto</Form.Label>
                <Form.Control type="text" placeholder="identificador #" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ingrese la descripcion del producto</Form.Label>
                <Form.Control type="text" placeholder="Descripcion" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ingrese el valor unitario</Form.Label>
                <Form.Control type="text" placeholder="Valor del producto" />
            </Form.Group>

            <h6>Estado del producto</h6>
            <Form.Select  aria-label="Default select example">
            <Form.Label>Estado del producto</Form.Label>
                
                
                
                <option value="Disponible">Disponible</option>
                <option value="No Disponible">No Disponible</option>
              
            </Form.Select>


            <Button  className=" mt-5 mb-5" variant="primary" type="button">
                Almacenar productos
            </Button>
            

                
                
            
            
            
            
           
            
            

            </Form>
            
        </Container>
    );    

}

export default Registro_de_productos;