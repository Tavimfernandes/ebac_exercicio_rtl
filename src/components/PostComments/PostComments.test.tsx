import { fireEvent, render, screen } from '@testing-library/react';
// import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve adcionar dois comentarios', () => {
        render(<PostComment />)

         // Primeiro comentário
        fireEvent.change(screen.getByTestId('campoComentario'), {
            target: {
                value: 'Primeiro comentario de teste'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        // Segundo comentário
        fireEvent.change(screen.getByTestId('campoComentario'), {
            target: {
                value: 'Segundo comentario de teste'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        expect(screen.getAllByTestId('comentarioTeste')).toHaveLength(2)
    })
})