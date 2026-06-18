import { Link } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";
import type { ResolvedDbLink } from "@/lib/sanitizing/sanitizeDbLink.ts";
import { ExternalLinkIcon } from "@/views/shared/icons/ExternalLinkIcon.tsx";
import { linkIconClasses } from "@/views/shared/styles/classTokens.ts";

type Props = {
  children: ReactNode;
  className?: string;
  link: ResolvedDbLink;
};

export const DbLink: FC<Props> = ({ children, className, link }) => {
  if (link.kind === "internal") {
    return (
      <Link
        to={link.to}
        from={"/"}
        search={{}}
        preload={"intent"}
        resetScroll={true}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <a href={link.href} target={"_blank"} rel={"noreferrer"} className={className}>
      {children}
      <ExternalLinkIcon className={linkIconClasses} />
    </a>
  );
};
