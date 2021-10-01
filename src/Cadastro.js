import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Cadastro = () => {
  return (
    <header className="py-5">
    <Form>
      
        <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-left">
                  
      <div className="px-lg-5">
        <Label for="cadastroEmail"><p>Email</p></Label>
        <Input className="m-4 m-lg-1" type="email" name="email" id="exampleEmail" placeholder="Digite seu Email" />
      </div>

      <div className="px-lg-5">
        <Label className="m-4 m-lg-1"for="cadastroNome"><p>Nome</p></Label>
        <Input className="m-4 m-lg-1"type="text" name="nome" id="nome" placeholder="digite seu nome" />
      </div>
      

      <div className="px-lg-5">
       <Label className="m-4 m-lg-1" for="cadastroTelefone"><p>Telefone</p></Label>
        <Input type="text" name="telefone" id="telefone" placeholder="digite seu Telefone " />
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary">Cadastrar</button>
     </div>
    
    </Form>
    </header>
  );
}

export default Cadastro;