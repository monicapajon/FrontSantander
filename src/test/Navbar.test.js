import { Navbar } from "../components/Navbar/Navbar";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";

describe('Funcionamiento del componente Navbar', () => {
    test('Saber si tiene el titulo LOGO el menu', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)
        const logo = screen.getByText('LOGO')
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveClass('logo');
    })
    test('Navegacion de los links', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)
        const links = screen.getAllByRole('link');
        const textolink = links.map(link => link.textContent);
        const hrefs = ['/', '/', '/upcoming', '/past', '/contact', '/stast'];

        links.map((link, index) => {
            expect(link).toHaveAttribute('href', hrefs[index])
        })
        expect(links).toHaveLength(6);
        expect(textolink).toEqual(['LOGO', 'INICIO', 'PROXIMOS EVENTOS', 'EVENTOS ANTERIORES', 'CONTACTOS', 'ESTADISTICAS']);

    })
    test('Cuando sea responsiva la web, verificar si el menu navbar no aparezca con la class visible', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)
        const navbar = screen.getByRole('menuNavegacion');
        expect(navbar).not.toHaveClass('visible');
    })
    test('Cuando sea responsiva la web, verificar si el boton abre el menu de navegación', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)
        const abrir = screen.getByTitle('abrir');
        const navbar = screen.getByRole('menuNavegacion');
        fireEvent.click(abrir);
        expect(navbar).toHaveClass('visible');
    })
    test('Cuando sea responsiva la web, verificar si el al hacer click en cerrar desaparece la class visible',() => {
        render(<MemoryRouter><Navbar /></MemoryRouter>)
        const abrir = screen.getByTitle('abrir');
        const cerrar = screen.getByTitle('cerrar');
        const navbar = screen.getByRole('menuNavegacion');
        fireEvent.click(abrir);
        expect(navbar).toHaveClass('visible');
        fireEvent.click(cerrar);
        expect(navbar).not.toHaveClass('visible');
    })
})