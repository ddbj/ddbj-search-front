import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { GlobalHeader } from "@/features/shared/GlobalHeader.tsx";
import { isAppHttpError } from "@/fetch/utils/httpError.ts";
import { useTitle } from "@/utils/useTitle.ts";
import type { BreadcrumbsPath } from "@/features/shared/Breadcrumbs.tsx";
import type { FC, ReactNode } from "react";

type RouteErrorVariant = "not-found" | "server-error";

type Props = {
  variant: RouteErrorVariant;
  title: string;
  description: string;
  action?: ReactNode;
  error?: unknown;
};

const linkClasses = clsx(
  "rounded border border-link-primary px-4 py-2 text-link-primary transition-colors hover:border-link-primary-hover hover:text-link-primary-hover"
);

const actionButtonClasses = clsx(
  "cursor-pointer rounded bg-link-primary px-4 py-2 text-white transition-colors hover:bg-link-primary-hover"
);

const variantLabelMap: Record<RouteErrorVariant, string> = {
  "not-found": "404 Not Found",
  "server-error": "500 Server Error",
};

const variantAccentClasses: Record<RouteErrorVariant, string> = {
  "not-found": "border-sky-200 bg-sky-50 text-sky-700",
  "server-error": "border-amber-200 bg-amber-50 text-amber-700",
};

export const RouteErrorPage: FC<Props> = ({ variant, title, description, action, error }) => {
  useTitle(title);

  const breadcrumbsPaths: BreadcrumbsPath[] = [{ label: title }];
  const requestId = isAppHttpError(error) ? error.requestId : undefined;
  const errorMessage = error instanceof Error ? error.message : undefined;
  const variantLabel = variantLabelMap[variant];
  const variantAccentClassName = variantAccentClasses[variant];

  return (
    <main className={"flex min-h-screen flex-col gap-8 p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <section className={"flex flex-1 items-center justify-center"}>
        <div className={"flex max-w-3xl flex-col gap-6 rounded-2xl bg-gray-50 p-10 shadow-sm"}>
          <div className={"flex flex-col gap-3"}>
            <div className={"flex flex-wrap items-center gap-3"}>
              <p className={"text-sm font-semibold uppercase tracking-[0.18em] text-link-primary"}>
                DDBJ Search
              </p>
              <span
                className={clsx(
                  "w-fit rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase",
                  variantAccentClassName
                )}
              >
                {variantLabel}
              </span>
            </div>
            <h1 className={"text-4xl font-semibold text-gray-900"}>{title}</h1>
            <p className={"text-base leading-7 text-gray-600"}>{description}</p>
          </div>

          <div className={"flex flex-wrap gap-3"}>
            <Link to={"/"} className={linkClasses}>
              Back to home
            </Link>
            <Link to={"/entry/"} className={linkClasses}>
              Browse entries
            </Link>
            {action}
          </div>

          {(requestId || errorMessage) && (
            <div className={"rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-600"}>
              {requestId && <p>{`Request ID: ${requestId}`}</p>}
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export const routeErrorPageActionButtonClasses = actionButtonClasses;
