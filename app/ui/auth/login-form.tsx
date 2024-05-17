"use client";

import Image from "next/image";

import { loginAction, State } from "@/app/actions/auth/login-action";
import { useFormState } from "react-dom";
import login_picture from "@/assets/delivery_login.png";

import PasswordTextField from "./password";
import { Card, Typography } from "@mui/material";
import SubmitButton from "../utils/components/submit-button";

export default function LoginForm() {
  const initialState: State = { message: "", errors: {} };

  const [state, dispatch] = useFormState(loginAction, initialState);
  return (
    <div className="flex min-h-screen  items-center justify-center">
      <Card
        className="p-4  w-1/4 flex  flex-col "
        elevation={1}
        variant="outlined"
      >
        <div className="flex justify-center mb-3"> <Typography variant="h6"> Login  Your Account </Typography></div>

        <form action={dispatch} method="POST">
          <div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <PasswordTextField />
            </div>
          </div>
          <hr />

          <div>
            <SubmitButton label="Sign In" />
            {state?.message && (
              <p className="mt-2 text-sm text-red-500"> {state?.message}</p>
            )}
          </div>
          <div className="text-sm">
            {/* <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a> */}
          </div>
          <div className="text-sm mt-3 flex justify-center">
            <a
              href="/signup"
              className="font-semibold text-black-600 hover:text-indigo-500"
            >
              I do not have an account
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
}
