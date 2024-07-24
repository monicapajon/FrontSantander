import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer";
import '@testing-library/jest-dom'

describe('Funcionamiento del componente Footer', () => { 
    test('Verificar la redes sociales de Instagram', () => { 
        render(<Footer />)

        expect(screen.getByRole('instagram')).toBeInTheDocument();
        expect(screen.getByRole('instagram')).toHaveClass('fa-brands','fa-instagram','rojo')
     })
    test('Verificar la redes sociales de Whatsapp', () => { 
        render(<Footer />)
        expect(screen.getByRole('whatsapp')).toBeInTheDocument();
        expect(screen.getByRole('whatsapp')).toHaveClass('fa-brands','fa-whatsapp','verde')
     })
    test('Verificar la redes sociales de Facebook', () => { 
        render(<Footer />)
        expect(screen.getByRole('facebook')).toBeInTheDocument();
        expect(screen.getByRole('facebook')).toHaveClass('fa-brands','fa-facebook','azul')
     })
     test('Verificando el nombre del autor', () => { 
        render(<Footer />)
        expect(screen.getByText('Mendez Avelino')).toBeInTheDocument()
      })
     test('Verificando el nombre de la clase autor', () => { 
        render(<Footer />)
        expect(screen.getByRole('autor')).toHaveClass('autor')
      })
 })