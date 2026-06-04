import { Link } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";
import { ExternalLinkIcon } from "@/features/shared/graphics/ExternalLinkIcon.tsx";
import { linkIconClasses } from "@/styles/classTokens.ts";
import type { ResolvedDbLink } from "@/utils/sanitizeDbLink.ts";

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
