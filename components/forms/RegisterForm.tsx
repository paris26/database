"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UnemployedFormValidation, UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/unemployed.actions";
import { FormFieldType } from "./PatientForm";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { AgeGroup, EducationLevel, EmploymentStatus, GenderOptions, JobSearchStatus, PreviousIndustry, SkillLevel } from "@/constants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof UnemployedFormValidation>>({
    resolver: zodResolver(UnemployedFormValidation),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try {
      //TODO: Add API call here

      const userData = { name, email, phone };

      const user = await createUser(userData);

      if (user) console.log(user);

      if (user) router.push("unemployed/${user.id}/register");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-12"
      >
        <section className="mb-12">
          <h1 className="header">Γεια σας</h1>
          <p className="text-dark-700">Παρακαλούμε, εισάγετε τα στοιχεία σας</p>
        </section>

        <section className="space-y-6">
          <div className="mb-12 space-y-1">
            <h2 className="sub-header">Προσωπικές Πληροφορίες</h2>
          </div>
        </section>

        <div className="flex flex-col gap-6 xl:flex-row">
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
        </div>

        <div className="flex flex-col gap-3 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="birthDate"
            label="Ημερομηνία Γέννησης"
          />
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="Gender"
            label="Φύλο"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="h-11 flex gap-2 xl:justify-between"
                >
                  {GenderOptions.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem id={option} value={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>
        <section className="space-y-6">
          <div className="mb-12 space-y-1">
            <h2 className="sub-header">Εργασιακές Πληροφορίες</h2>
          </div>
        </section>
        <div className="flex flex-col gap-6">
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="EducationLevel"
            label="Επίπεδο Εκπαίδευσης"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="h-11 flex gap-2 xl:justify-between"
                >
                  {EducationLevel.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem id={option} value={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="EmploymentStatus"
            label="Εργασιακή  Κατάσταση"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="h-11 flex gap-2 xl:justify-between"
                >
                  {EmploymentStatus.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem id={option} value={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="SkillLevel"
            label="Επίπεδο Γνώσης"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="h-11 flex gap-2 xl:justify-between"
                >
                  {SkillLevel.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem id={option} value={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="JobSearchStatus"
            label="Κατάσταση Αναζήτησης Εργασίας"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="h-11 flex gap-2 xl:justify-between"
                >
                  {JobSearchStatus.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem id={option} value={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="PreviousIndustry"
            label="Προηγούμενη Βιομηχανία"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                >
                  {PreviousIndustry.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem id={option} value={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="AgeGroup"
            label="Ηλικιακή Ομάδα"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="h-11 flex gap-2 xl:justify-between"
                >
                  {AgeGroup.map((option) => (
                    <div key={option} className="radio-group">
                      <RadioGroupItem id={option} value={option} />
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>

        <SubmitButton isLoading={isLoading}>Υποβολή</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
