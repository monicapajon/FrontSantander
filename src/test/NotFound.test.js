import { NotFound } from "../components/NotFound";
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Funcionamiento del componente NotFound', () => { 
    test('El componente recibe una prop de titulo', () => { 
        render(<NotFound title={'Evento no encontrado'}/>)
        const titulo = screen.getByText('Evento no encontrado');
         expect(titulo).toBeInTheDocument();
         expect(titulo).toHaveClass('page')
     })
    test('El componente tiene el texto 404', () => { 
        render(<NotFound title={'Evento no encontrado'}/>)
        const texto = screen.getByText('404');
         expect(texto).toBeInTheDocument();
         expect(texto).toHaveClass('error')
     })
    test('El componente tiene una clase global que es not-found', () => { 
        render(<NotFound title={'Evento no encontrado'}/>)
        const notFoundDiv = screen.getByRole('not-found');
        expect(notFoundDiv).toHaveClass('not-found');
    })
 })