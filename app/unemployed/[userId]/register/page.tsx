import RegisterForm from '@/components/forms/RegisterForm';
import { getUser } from '@/lib/actions/unemployed.actions';
import Image from 'next/image'
import React from 'react'

const Register = async ( {params : { userId }} : SearchParamProps) => {
    const user =  await getUser(userId);

    return (
      <div className="flex h-screen max-h-screen ">
        <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />

            {/* <PatientForm /> */}

            <RegisterForm user={user} />

            <div className="text-14-regular justify-between flex">
              <p className="justify-items-end text-dark-600 xl:text-left">
                {" "}
                © 2024 Database{" "}
              </p>
            </div>
          </div>
        </section>

        <Image
          src="/assets/images/register-img.png"
          alt="register"
          width={1000}
          className="side-img max-w-[390px]"
          height={1000}
        />
      </div>
    );
}

export default Register
