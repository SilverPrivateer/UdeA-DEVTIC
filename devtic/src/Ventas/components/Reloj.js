const Reloj = () => {
    const time = new Date().toDateString();

    return(
        <footer>
            <span className="d-flex justify-content-center">{time}</span>
        </footer>
        
    );

}
export default Reloj;