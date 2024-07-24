import { render, screen } from "@testing-library/react"
import { Cards } from "../components/Cards";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe('Funcionamiento del componente Cards', () => {
    const mockFiltrar = [
        {
            '_id': 1,
            'name': "Evento 1",
            'description': "Descripcion 1",
            'image': "imagen.jpg",
        }
    ]
    test('Verificar si renderiza la imagen', () => {
        render(
            <MemoryRouter>
                <Cards filtrar={mockFiltrar} />
            </MemoryRouter>
        );
        const imagen = screen.getByRole('imagen');
        expect(imagen).toBeInTheDocument();
        expect(imagen).toHaveClass('card-imagen');
        expect(imagen).toHaveAttribute('src','imagen.jpg')
    });
    test('Verificar si renderiza el titulo principal', () => {
        render(
            <MemoryRouter>
                <Cards filtrar={mockFiltrar} />
            </MemoryRouter>
        );
        const titulo = screen.getByText('Evento 1');
        expect(titulo).toBeInTheDocument();
    });
    test('Verificar si renderiza el parrafo', () => {
        render(
            <MemoryRouter>
                <Cards filtrar={mockFiltrar} />
            </MemoryRouter>
        );
        const parrafo = screen.getByText('Descripcion 1');
        expect(parrafo).toBeInTheDocument();
    });
    test('Verificar si renderiza el Link', () => {
        render(
            <MemoryRouter>
                <Cards filtrar={mockFiltrar} />
            </MemoryRouter>
        );
        const link = screen.getByText('Ver más');
        expect(link).toBeInTheDocument();
    });
    test('Verificar si renderiza a la pagina detail', () => {
        render(
            <MemoryRouter>
                <Cards filtrar={mockFiltrar} />
            </MemoryRouter>
        );
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href','/detail/1');
    });
});