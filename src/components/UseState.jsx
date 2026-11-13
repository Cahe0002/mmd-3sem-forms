"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Navnet er for kort"),
  email: z.string().email("Indtast en gyldig email"),
});

function FormWithRhf() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex w-full max-w-80 mx-auto h-full mt-10 p-8 bg-[#23272f] rounded-2xl shadow-lg align-middle">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        <div>
          <label className="block text-sm font-medium text-[#ebecf0] mb-2">
            Navn
          </label>

          <input
            type="text"
            {...register("name")}
            className="w-full p-3 border border-[#414750] bg-[#31353c] rounded-lg focus:ring-1 focus:ring-[#414750] focus:outline-none text-[#ebecf0]"
            placeholder="Dit navn"
          />

          <div className="min-h-6">
            {errors.name && (
              <p className="text-[#c64640] text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#ebecf0] mb-2">
            Email
          </label>

          <input
            type="email"
            {...register("email")}
            className="w-full p-3 border border-[#414750] bg-[#31353c] text-[#ebecf0] rounded-lg focus:ring-1 focus:ring-[#414750] focus:outline-none"
            placeholder="Din email"
          />

          <div className="min-h-6">
            {errors.email && (
              <p className="text-[#c64640] text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#58c4dc] hover:bg-[#58c4dc] text-[#23272f] font-semibold py-3 rounded-lg transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default FormWithRhf;
