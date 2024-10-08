import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});

export const UnemployedFormValidation = z.object({
  gender: z.enum(["Άνδρας", "Γυναίκα", "Άλλο"]),
  ageGroup: z.enum(["18-24", "25-34", "35-44", "45-54", "55-64", "65+"]),
  educationLevel: z.enum([
    "Δημοτικό",
    "Γυμνάσιο",
    "Λύκειο",
    "ΤΕΙ",
    "ΑΕΙ",
    "Μεταπτυχιακό",
    "Διδακτορικό",
  ]),
  employmentStatus: z.enum([
    "Ανέργος",
    "Φοιτητής",
    "Βραχυπρόθεσμα Εργαζόμενος",
    "Μακροχρόνια Εργαζόμενος",
  ]),
  skillLevel: z.enum(["Αρχάριος", "Μέτριος", "Προχωρημένος", "Επαγγελματίας"]),
  jobSearchStatus: z.enum(["Ενεργός", "Μη Ενεργός"]),
  previousIndustry: z.enum([
    "Τράπεζες",
    "Τηλεπικοινωνίες",
    "Τουρισμός",
    "Υγεία",
    "Δημόσιος Τομέας",
    "Εκπαίδευση",
    "Πληροφορική",
    "Διαφήμιση",
    "Μάρκετινγκ",
    "Διοίκηση Επιχειρήσεων",
    "Δικηγορία",
    "Αρχιτεκτονική",
    "Μηχανική",
    "Ασφάλειες",
    "Επιστήμες",
    "Δημοσιογραφία",
    "Διαφορετικός Τομέας",
  ]),
});
