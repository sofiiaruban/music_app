import { render, screen } from '@testing-library/react';
import Button from '../Button';
import { MemoryRouter } from "react-router-dom";

test('renders btn txt', () => {
    render(
    <MemoryRouter>
        <Button>Sample text</Button>
    </MemoryRouter>
    );
    const linkElement = screen.getByText("Sample text");
    expect(linkElement).toBeInTheDocument();
});
  
test('is active btn', ()=>{
    render(
    <MemoryRouter>
        <Button disabledBtn={false}>Sample text</Button>
    </MemoryRouter>
    );
    const btn = screen.getByRole('button');
    expect(btn).not.toBeDisabled();
});

