import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { GlobalHeader } from "@/features/shared/GlobalHeader.tsx";
import { isAppHttpError } from "@/fetch/utils/httpError.ts";
import { useTitle } from "@/utils/useTitle.ts";
import type { BreadcrumbsPath } from "@/features/shared/Breadcrumbs.tsx";
import type { FC, ReactNode } from "react";

type Props = {
  statusCode?: number;
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

const getRouteErrorPageModel = (title: string, statusCode?: number, error?: unknown) => {
  const resolvedStatusCode = statusCode ?? (isAppHttpError(error) ? error.status : undefined);

  return {
    breadcrumbsPaths: [{ label: title }] satisfies BreadcrumbsPath[],
    statusCode: resolvedStatusCode,
    requestId: isAppHttpError(error) ? error.requestId : undefined,
    errorMessage: error instanceof Error ? error.message : undefined,
  };
};

export const RouteErrorPage: FC<Props> = ({ statusCode, title, description, action, error }) => {
  useTitle(title);

  const { breadcrumbsPaths, statusCode: resolvedStatusCode, requestId, errorMessage } = getRouteErrorPageModel(
    title,
    statusCode,
    error
  );

  return (
    <main className={"flex min-h-screen flex-col gap-8 p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <section className={"flex flex-1 items-center justify-center"}>
        <div className={"flex max-w-3xl flex-col gap-6 rounded bg-gray-50 p-6 text-gray-600"}>
          <div className={"flex flex-col gap-3"}>
            {resolvedStatusCode && (
              <span
                className={
                  "w-fit rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-red-700 uppercase"
                }
              >
                {resolvedStatusCode}
              </span>
            )}
            <h1 className={"text-4xl font-semibold text-gray-900"}>{title}</h1>
            <p className={"text-base leading-7"}>{description}</p>
          </div>

          <div className={"flex flex-wrap gap-3"}>
            <Link to={"/"} className={linkClasses}>
              Back to home
            </Link>
            {action}
          </div>

          {(requestId || errorMessage) && (
            <div className={"rounded border border-gray-200 bg-white p-4 text-sm"}>
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

export const __TEST__RouteErrorPage = {
  getRouteErrorPageModel,
};
