import { gql } from "@apollo/client";
//vamos a tomar esta informacion de la API. estamos haciendo una consulta.
//a travez de una funcion estamos ingresando el numero de pagina, llamamos y consultamos a la API
//las comillas acostadas nos dicen que estamos usando un templates chain nos permite escapar del texto y escribir variables.
export const GET_CHARACTERS = (page: number) => {
  return gql`
    query {
      characters(page:${page}) {
        results {
          name
          species
          image
        }
      }
    }
  `;
};
