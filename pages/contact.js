import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="pb-8 mb-4 " onSubmit={handleSubmit} method="POST">
      <div className="mb-2">
        <label
          className="block mb-2 text-sm font-bold text-gray-500"
          htmlFor="Name"
        >
          Nama
        </label>
        <input
          className="w-full py-2 text-sm leading-tight text-gray-700 border-b border-main-color appearance-none focus:outline-none focus:shadow-outline"
          id="Name"
          type="text"
          placeholder="Contoh: Rakat Nuari"
          name="name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="mb-2">
        <label
          className="block mb-2 text-sm font-bold text-gray-500"
          htmlFor="restaurantName"
        >
          Nama Restoran
        </label>
        <input
          className="w-full py-2 text-sm leading-tight text-gray-700 border-b border-main-color appearance-none focus:outline-none focus:shadow-outline"
          id="restaurantName"
          type="text"
          placeholder="Nama Restoran Kamu"
          name="restaurantName"
        />
        <ValidationError
          prefix="restaurantName"
          field="restaurantName"
          errors={state.errors}
        />
      </div>
      <div className="mb-2">
        <label
          className="block mb-2 text-sm font-bold text-gray-500"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full py-2 mb-3 text-sm leading-tight text-gray-700 border-b border-main-color appearance-none focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <div className="mb-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-500"
            htmlFor="numeric"
          >
            No. Hp
          </label>
          <input
            className="w-full py-2 mb-3 text-sm leading-tight text-gray-700 border-b border-main-color appearance-none focus:outline-none focus:shadow-outline"
            id="tel"
            type="numeric"
            placeholder="Phone Number"
            name="phoneNumber"
          />
          <ValidationError
            prefix="numeric"
            field="numeric"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-sky-blue float-right hover:bg-orange-dark flex text-white font-bold py-2 px-5 md:px-9 rounded-md focus:outline-none focus:shadow-outline"
        >
          <p className="md:mr-2 text-sm md:text-base text-right">Daftar</p>
        </button>
      </div>
    </form>
  );
}
export default ContactForm;
