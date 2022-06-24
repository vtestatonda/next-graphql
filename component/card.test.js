/**
 * etapas de buena practica para realizar un test
 * 1 - Hacer que nuestro test falle
 * 2 - Hacer que nuestro test funcione
 * 3 - Refactor del codigo
 **/

import { render } from "@testing-library/react";
import { sumar } from "../util";
import { CardComponent } from "./CardComponent";
//en este modulo es necesario importar todo manual.

const mockData = {
  image: "url",
  name: "algo",
  species: "otra cosa",
};

test("Card Component no recibe datos", () => {
  const component = render(<CardComponent />);
  //creamos una constante que es component que lo que hace es renderizar nuestro componente, es una funcion y dentro ponemos el componente que vamos a renderizar en este caso "cardcomponent"
  //en este caso no le estamos enviando informacion a cardcomponent y por eso envia loading.
  expect(component.container.querySelector("h4").textContent).toBe("Loading");
});

test("Card Component si recibe datos", () => {
  const component = render(<CardComponent character={mockData} />);
  expect(component.container.querySelector("h2").textContent).toBe("algo");
  expect(component.container.querySelector("p").textContent).toBe("otra cosa");
});

test("Sumar deberia sumar dos numeros", () => {
  expect(sumar(10, 10)).toBe(20);
});
