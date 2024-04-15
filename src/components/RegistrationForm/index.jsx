import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();

 const onSubmit = (data) => {
  console.log(data);
  // Aqui você pode enviar os dados para um servidor ou realizar outras operações com eles
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <div>
    <label htmlFor="name">Nome</label>
    <input
     type="text"
     id="name"
     {...register("name", {
      required: "Por favor, insira seu nome",
      minLength: { value: 3, message: "O nome deve ter pelo menos 3 caracteres" }
     })}
    />
    {errors.name && <p>{errors.name.message}</p>}
   </div>

   <div>
    <label htmlFor="email">E-mail</label>
    <input
     type="email"
     id="email"
     {...register("email", {
      required: "Por favor, insira seu e-mail",
      pattern: {
       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
       message: "Endereço de e-mail inválido"
      }
     })}
    />
    {errors.email && <p>{errors.email.message}</p>}
   </div>

   <div>
    <label htmlFor="phone">Telefone</label>
    <input
     type="tel"
     id="phone"
     {...register("phone", {
      required: "Por favor, insira seu telefone",
      pattern: {
       value: /^[0-9]{11}$/,
       message: "Telefone inválido. Insira apenas números (11 dígitos)"
      }
     })}
    />
    {errors.phone && <p>{errors.phone.message}</p>}
   </div>

   <button type="submit">Enviar</button>
  </form>
 );
};

export default RegistrationForm;
