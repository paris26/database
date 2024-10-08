export const GenderOptions = [ "Άνδρας", "Γυναίκα", "Άλλο" ];

export const EducationLevel = ["Δημοτικό", "Γυμνάσιο", "Λύκειο", "ΤΕΙ", "ΑΕΙ", "Μεταπτυχιακό", "Διδακτορικό"];

export const EmploymentStatus = ["Ανέργος", "Φοιτητής", "Βραχυπρόθεσμα Εργαζόμενος", "Μακροχρόνια Εργαζόμενος"];

export const SkillLevel = ["Αρχάριος", "Μέτριος", "Προχωρημένος", "Επαγγελματίας"];

export const JobSearchStatus = ["Ενεργός", "Μη Ενεργός"];

export const PreviousIndustry = ["Τράπεζες", "Τηλεπικοινωνίες", "Τουρισμός", "Υγεία", "Δημόσιος Τομέας", "Εκπαίδευση", "Πληροφορική", "Διαφήμιση", "Μάρκετινγκ", "Διοίκηση Επιχειρήσεων", "Δικηγορία", "Αρχιτεκτονική", "Μηχανική", "Ασφάλειες", "Επιστήμες", "Δημοσιογραφία", "Διαφορετικός Τομέας"];

export const AgeGroup = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];

// TODO: Change the default values
export const UnemployedFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};
