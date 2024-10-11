"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UnemployedFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { FormFieldType } from "./PatientForm";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { AgeGroup, EducationLevel, EmploymentStatus, GenderOptions, JobSearchStatus, PreviousIndustry, SkillLevel, UnemployedFormDefaultValues } from "@/constants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof UnemployedFormValidation>>({
    resolver: zodResolver(UnemployedFormValidation),

    defaultValues: {
      ...UnemployedFormDefaultValues,
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
 const onSubmit = async (values: z.infer<typeof UnemployedFormValidation>) => {
   setIsLoading(true);

   //store file in form data as a blob
    let formData;
    if (
      values.identificationDocument &&
      values.identificationDocument.length > 0
    ) {
        const blobFile = new Blob([values.identificationDocument[0]], {
            type: values.identificationDocument[0].type,
        })

        formData = new FormData();
        formData.append("blobFile", blobFile);
        formData.append("fileName", values.identificationDocument[0].name);
    }

    //TODO: Add API call here
    try{
      const unemployed = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        gender: values.gender,
        ageGroup: values.ageGroup,
        educationLevel: values.educationLevel,
        employmentStatus: values.employmentStatus,
        jobSearchStatus: values.jobSearchStatus,
        previousIndustry: values.previousIndustry,
        skillLevel: values.skillLevel,
        identificationDocument: values.identificationDocument ? formData : undefined,
      };

      const newUnemployed = await createUnemployed(unemployed);
      if(newUnemployed) router.push("/unemployed/${newUnemployed.id}/prediction");

    }catch(e){
      console.log(e);
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
