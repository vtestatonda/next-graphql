import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UserInput } from "../models/UserInput";
import { SET_USER } from "../apollo/mutations/register";

//a continuacion creamos los estados por cada uno de los input de retun
export default function authScreen() {
  const [userData, setUserData] = useState<UserInput>({
    fullName: "",
    email: "",
    password: "",
  });

  const [register, { data }] = useMutation(SET_USER);
  //creamos una variable "register", la informacion la guarda data, usemutation recive la mutacion que creamos
  console.log(userData);
  console.log(data);
  // console.log(data && `Bienvenido a la plataforma ${data.register.fullName}`);
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <br />
        <input
          type="text"
          id="name"
          className="fadeIn second"
          //cada vez que haya un onChange tenemos que ir modificando los valores y agregandolos a la propiedad
          //cada vez que cambie el valor del input se va a setear un nuevo valor al estado y se vuelve a renderizar.
          onChange={(event) => {
            setUserData({ ...userData, fullName: event.target.value });
          }}
          name="name"
          placeholder="your name"
        />
        <input
          type="text"
          id="login"
          className="fadeIn second"
          name="login"
          onChange={(event) => {
            setUserData({ ...userData, email: event.target.value });
          }}
          placeholder="login"
        />
        <input
          type="text"
          id="password"
          className="fadeIn third"
          name="logn"
          onChange={(event) => {
            setUserData({ ...userData, password: event.target.value });
          }}
          placeholder="password"
        />
        <button
          className="fadeIn fourth"
          onClick={() => {
            register({ variables: { input: userData } });
          }}
        >
          Registrase
        </button>
        <div id="formFooter">
          <a className="inderlineHover" href="#">
            terms and conditions
          </a>
        </div>
      </div>
    </div>
  );
}
