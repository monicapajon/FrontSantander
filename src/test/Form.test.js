import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Form } from "../components/Form"

describe('Funcionamiento del componente Form', () => {
    const mockCategoria = ['Food', 'Museum', 'Cinema'];
    const mockEvents =
        [
            {
                "_id": 1,
                "name": "Collectivities Party",
                "category": "Food",
            },
            {
                "_id": 2,
                "name": "Jurassic Park",
                "category": "Museum",
            },
            {
                "_id": 3,
                "name": "Arabic holidays",
                "category": "Food",
            },
            {
                "_id": 4,
                "name": "Aladdin",
                "category": "Cinema",
            },
            {
                "_id": 5,
                "name": "Korean style",
                "category": "Food",
            },
        ]
    const setFiltrar = jest.fn();
    test('Aparece el input placeholder con el texto Buscar por nombre', () => {
        render(<MemoryRouter><Form setFiltrar={setFiltrar} /></MemoryRouter>)
        expect(screen.getByPlaceholderText(/Buscar por nombre/i)).toBeInTheDocument();
    })
    test('Aparece el boton Buscar', () => {
        render(<MemoryRouter><Form setFiltrar={setFiltrar} /></MemoryRouter>)
        expect(screen.getByText(/Buscar/i)).toBeInTheDocument();
    })
    test('Aparecen los checkbox', () => {
        render(<MemoryRouter><Form categorias={mockCategoria} setFiltrar={setFiltrar} /></MemoryRouter>)
        expect(screen.getAllByRole('searchCheckbox')).toHaveLength(3);
    })
    test('Filtrar por el nombre del evento', () => {
        render(
            <MemoryRouter>
                <Form categorias={mockCategoria} filtro={mockEvents} setFiltrar={setFiltrar} />
            </MemoryRouter>
        )
        const searchName = screen.getByRole('searchName');

        fireEvent.change(searchName, { target: { value: 'Jurassic Park' } });

        fireEvent.click(screen.getByRole('buscar'));

        expect(setFiltrar).toHaveBeenCalledWith([{
            "_id": 2,
            "name": "Jurassic Park",
            "category": "Museum",
        }])
    })
    test('Filtrar por Categoria del evento Food', () => {
        render(
            <MemoryRouter>
                <Form categorias={mockCategoria} filtro={mockEvents} setFiltrar={setFiltrar} />
            </MemoryRouter>
        )
        const checkFood = screen.getByRole('searchCheckbox', { name: "Food" });
        fireEvent.click(checkFood)

        fireEvent.click(screen.getByRole('buscar'))
        expect(setFiltrar).toHaveBeenCalledWith([
            { "_id": 1, "name": "Collectivities Party", "category": "Food" },
            { "_id": 3, "name": "Arabic holidays", "category": "Food" },
            { "_id": 5, "name": "Korean style", "category": "Food" },
        ])
    })
    test('Filtrar por Categoria del evento Museum', async () => {
        render(
            <MemoryRouter>
                <Form categorias={mockCategoria} filtro={mockEvents} setFiltrar={setFiltrar} />
            </MemoryRouter>
        )
        const checkMuseum = screen.getByRole('searchCheckbox', { name: 'Museum' });

        fireEvent.click(checkMuseum);
        fireEvent.click(screen.getByRole('buscar'))
        await expect(setFiltrar).toHaveBeenCalledWith([{
            "_id": 2,
            "name": "Jurassic Park",
            "category": "Museum",
        }]);
    })
    test('Filtrar por Categoria del evento Cinema', () => {
        render(
            <MemoryRouter>
                <Form categorias={mockCategoria} filtro={mockEvents} setFiltrar={setFiltrar} />
            </MemoryRouter>
        )
        const checkCinema = screen.getByRole('searchCheckbox', { name: 'Cinema' });

        fireEvent.click(checkCinema);
        fireEvent.click(screen.getByRole('buscar'))
        expect(setFiltrar).toHaveBeenCalledWith([{
            "_id": 4,
            "name": "Aladdin",
            "category": "Cinema"
        }]);
    })
})