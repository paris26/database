/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "Άνδρας" | "Γυναίκα" | "Άλλο";
declare type AgeGroup = "18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+";
declare type EducationLevel = "Δημοτικό" | "Γυμνάσιο" | "Λύκειο" | "ΤΕΙ" | "ΑΕΙ" | "Μεταπτυχιακό" | "Διδακτορικό";
declare type EmploymentStatus = "Ανέργος" | "Φοιτητής" | "Βραχυπρόθεσμα Εργαζόμενος" | "Μακροχρόνια Εργαζόμενος";
declare type JobSearchStatus = "Ενεργός" | "Μη Ενεργός";
declare type SkillLevel = "Αρχάριος" | "Μέτριος" | "Προχωρημένος" | "Επαγγελματίας";

declare type previousIndustry = "Τράπεζες" | "Τηλεπικοινωνίες" | "Τουρισμός" | "Υγεία" | "Δημόσιος Τομέας" | "Εκπαίδευση" | "Πληροφορική" | "Διαφήμιση" | "Μάρκετινγκ" | "Διοίκηση Επιχειρήσεων" | "Δικηγορία" | "Αρχιτεκτονική" | "Μηχανική" | "Ασφάλειες" | "Επιστήμες" | "Δημοσιογραφία" | "Διαφορετικός Τομέας";


declare type Unemployed = {
  userId: string;
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  address: string;
  ageGroup: AgeGroup;
  educationLevel: EducationLevel;
  employmentStatus: EmploymentStatus;
  jobSearchStatus: JobSearchStatus;
  previousIndustry: string;
}

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
  gender: Gender;
  address: string;
  ageGroup: string;
  educationLevel: string;
  employmentStatus: string;
  jobSearchStatus: string;
  previousIndustry: string;
  skills: string;
  skillsLevel: string;
  skillsArea: string;
}