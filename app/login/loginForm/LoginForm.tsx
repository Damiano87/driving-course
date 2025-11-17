"use client";

import { formSchema } from "@/schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { signInAction, SignInState } from "./actions";

const initialState: SignInState = {
  error: {
    username: "",
    password: "",
    general: "",
  },
};

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [state, formAction, isPending] = useActionState(
    signInAction,
    initialState
  );

  // Validation check for username
  const usernameValue = useWatch({
    control: form.control,
    name: "username",
    defaultValue: "",
  });

  const userHasMinLength = usernameValue.length >= 2;
  const userHasUpperCase = /[A-Z]/.test(usernameValue);

  // Validation check for password
  const passwordValue = useWatch({
    control: form.control,
    name: "password",
    defaultValue: "",
  });

  const passHasMinLength = passwordValue.length >= 8;
  const passHasUpperCase = /[A-Z]/.test(passwordValue);
  const passHasNumber = /[0-9]/.test(passwordValue);

  // Check if all requirements are met
  const isValidForSubmit =
    userHasMinLength &&
    userHasUpperCase &&
    passHasMinLength &&
    passHasUpperCase &&
    passHasNumber;

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-8 w-md">
        {/* General error */}
        {state?.error && (
          <p className="text-red-700 text-xs">{state?.error?.general}</p>
        )}

        {/* username field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="username"
                  {...field}
                  onChange={(e) => {
                    // clean error on change
                    field.onChange(e);
                    if (state?.error?.username) {
                      state.error.username = "";
                    }
                  }}
                />
              </FormControl>

              {state?.error?.username ? (
                <p className="text-red-700 text-xs">{state?.error?.username}</p>
              ) : (
                <div className="space-y-1">
                  <ValidationRule
                    isValid={userHasMinLength}
                    text="Min 2 litery"
                  />
                  <ValidationRule
                    isValid={userHasUpperCase}
                    text="Co najmniej jedna duża litera"
                  />
                </div>
              )}
            </FormItem>
          )}
        />

        {/* password field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  {...field}
                  onChange={(e) => {
                    // clean error on change
                    field.onChange(e);
                    if (state?.error?.password) {
                      state.error.password = "";
                    }
                  }}
                />
              </FormControl>

              {state?.error?.password ? (
                <p className="text-red-700 text-xs">{state?.error?.password}</p>
              ) : (
                <div className="space-y-1">
                  <ValidationRule
                    isValid={passHasMinLength}
                    text="Min 8 znaków"
                  />
                  <ValidationRule
                    isValid={passHasUpperCase}
                    text="Co najmniej jedna duża litera"
                  />
                  <ValidationRule
                    isValid={passHasNumber}
                    text="Co najmniej jedna cyfra"
                  />
                </div>
              )}
            </FormItem>
          )}
        />

        {/* Submit button */}
        <div className="text-center">
          <Button
            type="submit"
            disabled={!isValidForSubmit}
            className="text-foreground"
          >
            {isPending ? "Logging in..." : "Log In"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default LoginForm;

const ValidationRule = ({
  isValid,
  text,
}: {
  isValid: boolean;
  text: string;
}) => (
  <div
    className={`flex items-center gap-2 text-xs ${
      isValid ? "text-green-600" : "text-red-600"
    }`}
  >
    <span>{isValid ? "✓" : "✗"}</span>
    <span>{text}</span>
  </div>
);
