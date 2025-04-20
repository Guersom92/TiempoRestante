import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from '../App';
  
describe("App",()=>{
  test("renders App component", () => {
    render(<App />);
    const appElement = screen.getByText("Calculadora de Tiempo");
    expect(appElement).toBeDefined();
  }); 
  test("does not render Resultados initially", () => {
    render(<App />);
    // The Resultados component is not rendered initially
    expect(screen.queryByText(/recalcular/i)).toBeNull();
  });
})
  
