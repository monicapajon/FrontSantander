import { Table } from "../components/Table";
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Funcionamiento del componente Table', () => { 
    const dataTable = {
        titulo: "Titulo",
        filas: ['Encabezados 1','Encabezados 2','Encabezados 3']
    }
    const stast = [
        { name: 'Porcentaje de mayor asistencia', assistance: 20, capacity: 100 },
        { name: 'Porcentaje de menor asistencia', assistance: 50, capacity: 200 },
        { name: 'Eventos con gran capacidad', assistance: 40, capacity: 150 },
      ];
    const dataPast = [
        { categoria: 'FOOD', ingresos: 4000, porcentaje: 20 },
        { categoria: 'CINEMA', ingresos: 5000, porcentaje: 35 },
        { categoria: 'BOOK', ingresos: 2000, porcentaje: 25 },
      ];
    const dataPost = [
        { categoria: 'MUSEUM', ingresos: 2000, porcentaje: 10 },
        { categoria: 'RACE', ingresos: 6000, porcentaje: 15 },
        { categoria: 'PARTY', ingresos: 5000, porcentaje: 25 },
      ];
    
    test('Verificar el titulo de la tabla', () => { 
        render(<Table dataTable={dataTable} />)
        expect(screen.getByText(dataTable.titulo)).toBeInTheDocument();
     })
    test('Verificar los subtitulos de la tabla', () => { 
        render(<Table dataTable={dataTable} />)
        dataTable.filas.forEach(filas => {
            expect(screen.getByText(filas)).toBeInTheDocument();
        })
     })
     test('Verificar las estadisticas por eventos', () => {
        render(<Table dataTable={dataTable} stast={stast} />);
        
        expect(screen.getByText('Porcentaje de mayor asistencia')).toBeInTheDocument();
        expect(screen.getByText('Porcentaje de menor asistencia')).toBeInTheDocument();
        expect(screen.getByText('Eventos con gran capacidad')).toBeInTheDocument();
        expect(screen.getByText('- 20 %')).toBeInTheDocument();
        expect(screen.getByText('- 25 %')).toBeInTheDocument();
        expect(screen.getByText('- 27 %')).toBeInTheDocument();
      });
     test('Verificar las estadisticas por categorias de datos pasados', () => {
        render(<Table dataTable={dataTable} dataPast={dataPast} />);

        expect(screen.getByText('FOOD')).toBeInTheDocument();
        expect(screen.getByText('CINEMA')).toBeInTheDocument();
        expect(screen.getByText('BOOK')).toBeInTheDocument();
        expect(screen.getByText('$4000')).toBeInTheDocument();
        expect(screen.getByText('$5000')).toBeInTheDocument();
        expect(screen.getByText('$2000')).toBeInTheDocument();
        expect(screen.getByText('20 %')).toBeInTheDocument();
        expect(screen.getByText('35 %')).toBeInTheDocument();
        expect(screen.getByText('25 %')).toBeInTheDocument();
      });
     test('Verificar las estadisticas por categorias de datos futuros', () => {
        render(<Table dataTable={dataTable} dataPost={dataPost} />);

        expect(screen.getByText('MUSEUM')).toBeInTheDocument();
        expect(screen.getByText('RACE')).toBeInTheDocument();
        expect(screen.getByText('PARTY')).toBeInTheDocument();
        expect(screen.getByText('$2000')).toBeInTheDocument();
        expect(screen.getByText('$6000')).toBeInTheDocument();
        expect(screen.getByText('$5000')).toBeInTheDocument();
        expect(screen.getByText('10 %')).toBeInTheDocument();
        expect(screen.getByText('15 %')).toBeInTheDocument();
        expect(screen.getByText('25 %')).toBeInTheDocument();
      });
 })