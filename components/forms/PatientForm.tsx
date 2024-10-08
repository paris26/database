"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/unemployed.actions";

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phone_input",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
      setIsLoading(true);

      try{
        
        //TODO: Add API call here         

        const userData = { name, email , phone}

        const user =  await createUser(userData);
        
        if(user) console.log(user);

        if(user) router.push("unemployed/${user.id}/register"); 

      }catch(e){
        console.error(e);
      }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4 text-center justify-center">
          <h1 className="header">Γεια σας</h1>
          <p className="text-dark-700">Παρακαλούμε, εισάγετε τα στοιχεία σας</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Ονοματεπώνυμο"
          placeholder="Εισάγετε το ονοματεπώνυμο σας"
          iconSrc="/assets/icons/user.svg"
          iconAlt="User"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="user@email.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="Email"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Αριθμός Τηλεφώνου"
          placeholder="+30 69 123 123 12"
        />
        <SubmitButton isLoading={isLoading}>Υποβολή</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
