import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Reloj from '../components/Reloj'
import React, {useEffect, useState, Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


const Registro =() => {


    const productos = [
        {
            nombre: "Producto_1",
            precio: "10",
        },
        {
            nombre: "Producto_2",
            precio: "20",
        },
        {
            nombre: "Producto_3",
            precio: "30",
        }
    ];
    
    const [value, setValue] = useState("");
    const [total, setValor] = useState("");
    const [count, setCount] = useState(0);

    const [precios, setPrecio] = useState([])
    

    const handleChange = (event) => {
        setValue(event.target.value);
        
    }
    
    const time = new Date().toDateString();
    
    const handleClick = () => {
        if (value==="Producto1"){
            
            setPrecio([...precios,{producto:value,unidad:10}])
            
        }else if (value==="Producto2"){
            setPrecio([...precios,{producto:value,unidad:20}])

        }else if (value==="Producto3"){
            setPrecio([...precios,{producto:value,unidad:30}])

        }else{
            alert("Producto Invalido")
        }

    }


    return(
        <Container>

            <h1 className="d-flex justify-content-center mt-5 mb-5">Registro de Ventas</h1>
            <Reloj />
            <h6>Indice de venta {count} </h6>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese documento de identidad del cliente</Form.Label>
                <Form.Control type="text" placeholder="Documento de Identidad" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ingrese el nombre del cliente</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <h6>Seleccione al vendedor</h6>
            <Form.Select  aria-label="Default select example">
            <Form.Label>Seleccione al vendedor</Form.Label>
                <option>Vendedores</option>
                
                
                <option value="Daniel">Daniel</option>
                <option value="Johan">Johan</option>
                <option value="Laura">Laura</option>
            </Form.Select>
            <Form.Group className="mb-3" >
                <Form.Label>Producto Solicitado</Form.Label>
                <Form.Control type="text" onChange={handleChange} />
            </Form.Group>
            <Form.Group  className="mb-3" >
                <Form.Label>Cantidad</Form.Label>
                <Form.Control onChange={() => setValor(total)} />
            </Form.Group>

                
                
            
            <Button onClick={handleClick} className=" mt-5 mb-5" variant="primary" type="button">
                Confirmar Producto
            </Button>
            
            
            <ListGroup>
                {precios.map((precios)=>{
                    return (
                        <ListGroup.Item>
                            Nombre del Producto: {precios.producto} Precio Unitario del Producto: ${precios.unidad} Total: $  fecha{time}
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
            
            <Button className=" mt-5 mb-5" variant="primary" type="button" onClick={() => setCount(count + 1)}>
            Finalizar Venta
            </Button>

            </Form>
            
        </Container>

    


    );
}
export default Registro;