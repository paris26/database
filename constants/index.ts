export const GenderOptions = [ "Άνδρας", "Γυναίκα", "Άλλο" ];

export const EducationLevel = ["Δημοτικό", "Γυμνάσιο", "Λύκειο", "ΤΕΙ", "ΑΕΙ", "Μεταπτυχιακό", "Διδακτορικό"];

export const EmploymentStatus = ["Ανέργος", "Φοιτητής", "Βραχυπρόθεσμα Εργαζόμενος", "Μακροχρόνια Εργαζόμενος"];

export const SkillLevel = ["Αρχάριος", "Μέτριος", "Προχωρημένος", "Επαγγελματίας"];

export const JobSearchStatus = ["Ενεργός", "Μη Ενεργός"];

export const PreviousIndustry = ["Τράπεζες", "Τηλεπικοινωνίες", "Τουρισμός", "Υγεία", "Δημόσιος Τομέας", "Εκπαίδευση", "Πληροφορική", "Διαφήμιση", "Μάρκετινγκ", "Διοίκηση Επιχειρήσεων", "Δικηγορία", "Αρχιτεκτονική", "Μηχανική", "Ασφάλειες", "Επιστήμες", "Δημοσιογραφία", "Διαφορετικός Τομέας"];

export const AgeGroup = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];


export const UnemployedFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender : "Άνδρας" as Gender,
  ageGroup: "18-24" as AgeGroup,
  educationLevel: "Δημοτικό" as EducationLevel,
  employmentStatus: "Ανέργος" as EmploymentStatus,
  jobSearchStatus: "Ενεργός" as JobSearchStatus,
  previousIndustry: "Τράπεζες" as previousIndustry,
  skills: "",
  skillsLevel: "Αρχάριος" as SkillLevel,
  identificationDocument: [],
};