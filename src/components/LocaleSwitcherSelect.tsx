"use client";

import { useParams } from "next/navigation";
import { ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "../navigation";

import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    const nextLocale = value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <>
      <Select
        onValueChange={onSelectChange}
        defaultValue={defaultValue}
        disabled={isPending}
      >
        <SelectTrigger
          className={cn(
            "w-[180px]",
            isPending && "transition-opacity [&:disabled]:opacity-30"
          )}
        >
          <SelectValue placeholder={label} />
        </SelectTrigger>
        {children}
      </Select>
    </>
  );
}
