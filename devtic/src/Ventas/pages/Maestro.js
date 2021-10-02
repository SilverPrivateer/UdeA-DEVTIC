
import Reloj from '../components/Reloj'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Maestro =() => {
    return(
        <Container>
            <Row className="d-flex justify-content-center">
            <h1 className="d-flex justify-content-center mt-5 mb-5">Maestro de Ventas</h1>
            <Reloj className="d-flex justify-content-center mt-5 mb-5"/>
                <Col xs={6}>
                
                <h6 className="d-flex justify-content-center mt-5 mb-5">Seleccione la venta</h6>
                <Form.Select  aria-label="Default select example">
                <Form.Label>Seleccione La venta</Form.Label>
                    <option>Ventas</option>
                    
                    
                    <option value="Venta1">Venta1</option>
                    <option value="Venta2">Venta2</option>
                    <option value="Venta3">Venta3</option>
                    <option value="Venta4">Venta4</option>
                    <option value="Venta5">Venta5</option>
                </Form.Select>
                </Col>
                <Col xs={6}>
                
                <h6 className="d-flex justify-content-center mt-5 mb-5">Modificar Estado de venta</h6>
                <Form.Select  aria-label="Default select example">
                <Form.Label>Seleccione La venta</Form.Label>
                    <option>Estado</option>
                    
                    
                    <option value="Estado1">Pendiente</option>
                    <option value="Estado2">Cancelada</option>
                    <option value="Esado3">Confirmada</option>

                </Form.Select>
                </Col>
            </Row>
            <Button className=" mt-5 mb-5" variant="primary" type="submit">
                Guardar Cambios
            </Button>
            
        </Container>



    );
}
export default Maestro;