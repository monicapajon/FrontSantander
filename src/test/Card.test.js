import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { Card } from "../components/Card";
import { MemoryRouter } from 'react-router-dom';

describe('Funcionamiento del componente Card', () => {
    const mockEvent = {
        "_id": 1,
        "name": "Collectivities Party",
        "category": "Food",
        "date": "2021-12-12",
        "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "image": "https://i.postimg.cc/kXWrBjXC/collectivities-party.jpg",
        "place": "Multi Space",
        "price": 10,
        "capacity": 50000,
        "assistance": 42756
    }

    test('Si aparece el loading Cargando', () => {
        render(<MemoryRouter>
            <Card loading={true} event={mockEvent} />
            </MemoryRouter>
            );
        expect(screen.getByText(/cargando/i)).toBeInTheDocument();
    })
    test('Aparece el titulo de la card', () => {
        render(<MemoryRouter>
            <Card loading={false} event={[mockEvent]} />
        </MemoryRouter>
        );
        const eventName = screen.getByText("Collectivities Party");
        expect(eventName).toBeInTheDocument();
    });
    test('Aparece la imagen en la card', () => {
        render(<MemoryRouter>
            <Card loading={false} event={[mockEvent]} />
        </MemoryRouter>
        );
        const imagen = screen.getByAltText('Collectivities Party');
        expect(imagen).toBeInTheDocument();
        expect(imagen).toHaveAttribute('src','https://i.postimg.cc/kXWrBjXC/collectivities-party.jpg')
    })
    test('Aparece la parrafo en la card', () => {
        render(<MemoryRouter>
            <Card loading={false} event={[mockEvent]} />
        </MemoryRouter>
        );
        const parrafo = screen.getByText('Enjoy your favourite dishes, from different countries, in a unique event for the whole family.');
        expect(parrafo).toBeInTheDocument();
    })
})