import {screen,render} from '@testing-library/react';
import { Header } from '../components/Header';
import '@testing-library/jest-dom';

describe("Funcionamiento del componente Header",() => {
    test('Saber si recibe props el componente', () => { 
        render(<Header data={"inicio"} />)
         expect(screen.getByText('inicio')).toBeInTheDocument();
    });
    test('Verificar si aparece la clase principal', () => { 
        const { container } = render(<Header/>);
        expect(container.querySelector('.principal')).toBeInTheDocument();
     })
})