import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const checkRoute = (route: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return pathname === route;
};
