"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import PhoneInputTest from "../PhoneInputTest";
import SubmitButton from "../SubmitButton";
import { useState } from "react";

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phone_input",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton"
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const PatientForm = () => {
    const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
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
        <SubmitButton isLoading={isLoading} >
            Υποβολή
        </SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
