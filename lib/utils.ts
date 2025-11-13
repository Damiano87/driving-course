import { clsx, type ClassValue } from "clsx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setUrlParams = (
  slideNumber: number,
  searchParams: ReadonlyURLSearchParams,
  router: AppRouterInstance
) => {
  // create new object with url search params
  const params = new URLSearchParams(searchParams.toString());
  params.set("slide", slideNumber.toString());

  // update URL
  router.push(`?${params.toString()}`);
};
