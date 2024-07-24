import { render, screen } from "@testing-library/react";
import { Contact } from "../components/Contact";
import "@testing-library/jest-dom";

describe("Funcionamiento del componente Contact", () => {
   test('Saber si existe la label nombre en el componente', () => {
      render(<Contact />)
      const nombreLabel = screen.getByLabelText("Nombre:");
      const input = screen.getByRole('textbox',{name: /Nombre/i});

      expect(nombreLabel).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('type','text');
      expect(input).toHaveAttribute('id','nombre');
      expect(input).toHaveAttribute('placeholder','Nombre');
      expect(input).toHaveAttribute('autocomplete','off');
      expect(input).toHaveAttribute('class','form-input');
   });
   test('Saber si existe la label Correo electronico en el componente', () => {
      render(<Contact />)
      const nombreLabel = screen.getByLabelText("Correo electronico:");
      const input = screen.getByRole('textbox',{name: /Correo electronico/i});

      expect(nombreLabel).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('type','text');
      expect(input).toHaveAttribute('id','email');
      expect(input).toHaveAttribute('placeholder','Correo electronico');
      expect(input).toHaveAttribute('autocomplete','off');
      expect(input).toHaveAttribute('class','form-input');
   });
   test('Saber si existe la label Mensaje en el componente', () => {
      render(<Contact />)
      const nombreLabel = screen.getByLabelText("Mensaje:");
      const input = screen.getByRole('textbox',{name: /Mensaje/i});

      expect(nombreLabel).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('id','mensaje');
      expect(input).toHaveAttribute('placeholder','Mensaje');
      expect(input).toHaveAttribute('autocomplete','off');
      expect(input).toHaveAttribute('class','form-input');
   });
   test('Saber si existe el input enciar en el componente', () => { 
        render(<Contact/>)
        const input = screen.getByRole('Enviar',{name: /Enviar/i});
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type','submit');
        expect(input).toHaveAttribute('value','Enviar');
        expect(input).toHaveAttribute('class','boton-contacts');
    })
});