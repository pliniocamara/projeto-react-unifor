import React from 'react';

const Footer = () => {
    const data = new Date();
    return (
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Aplicação - {data.toLocaleDateString()} </p>
            </div>
        </footer>
    )
}
export default Footer;