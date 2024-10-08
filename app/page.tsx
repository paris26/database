import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen ">

      {/* TO DO : OTP Verification */}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container flex justify-center max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular justify-between flex">
            <p className="justify-items-end text-dark-600 xl:text-left">
              {" "}
              © 2024 Database{" "}
            </p>
            <Link href="/?admin=true" className="text-blue-700">
              Admin Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
