import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Maestro_de_productos =() => {
    return(
        <Container>
            <Row className="d-flex justify-content-center">
            <h1 className="d-flex justify-content-center mt-5 mb-5">Maestro de Productos</h1>
            
                <Col xs={6}>
                
                <h6 className="d-flex justify-content-center mt-5 mb-5">Seleccione el producto</h6>
                <Form.Select  aria-label="Default select example">
                <Form.Label>Actualice el estado el producto</Form.Label>
                    <option>Producto</option>
                    
                    
                    <option value="Venta1">Producto1</option>
                    <option value="Venta2">Producto2</option>
                    <option value="Venta3">Producto3</option>
                    <option value="Venta4">Producto4</option>
                    <option value="Venta5">Producto5</option>
                </Form.Select>
                </Col>
                <Col xs={6}>
                
                <h6 className="d-flex justify-content-center mt-5 mb-5">Modificar el estado del producto</h6>
                <Form.Select  aria-label="Default select example">
                <Form.Label>Seleccione La venta</Form.Label>
                    
                    
                    <option>Estado</option>
                    <option value="Estado1">Disponible</option>
                    <option value="Estado2">No Disponible</option>
                  

                </Form.Select>
                </Col>
            </Row>
            <Button className=" mt-5 mb-5" variant="primary" type="submit">
                Guardar Cambios
            </Button>
            
        </Container>

    );

}

export default Maestro_de_productos;