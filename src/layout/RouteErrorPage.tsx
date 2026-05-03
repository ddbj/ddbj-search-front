import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import type { FC } from "react";
import type { BreadcrumbsPath } from "@/features/shared/Breadcrumbs.tsx";
import { GlobalHeader } from "@/features/shared/GlobalHeader.tsx";
import { isAppHttpError } from "@/fetch/utils/httpError.ts";
import { useTitle } from "@/utils/useTitle.ts";

type Props = {
  statusCode?: number;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  error?: unknown;
};

const linkClasses = clsx(
  "border-link-primary text-link-primary hover:border-link-primary-hover hover:text-link-primary-hover rounded border px-4 py-2 transition-colors",
);

const actionButtonClasses = clsx(
  "bg-link-primary hover:bg-link-primary-hover cursor-pointer rounded px-4 py-2 text-white transition-colors",
);

const formatDisplayTitle = (title: string, statusCode?: number) => {
  return statusCode ? `[${statusCode}] ${title}` : title;
};

const getRouteErrorPageModel = (title: string, statusCode?: number, error?: unknown) => {
  const resolvedStatusCode = statusCode ?? (isAppHttpError(error) ? error.status : undefined);
  const displayTitle = formatDisplayTitle(title, resolvedStatusCode);

  return {
    breadcrumbsPaths: [{ label: displayTitle }] satisfies BreadcrumbsPath[],
    displayTitle,
    statusCode: resolvedStatusCode,
    requestId: isAppHttpError(error) ? error.requestId : undefined,
    errorMessage: error instanceof Error ? error.message : undefined,
  };
};

export const RouteErrorPage: FC<Props> = ({
  statusCode,
  title,
  description,
  actionLabel,
  onAction,
  error,
}) => {
  const {
    breadcrumbsPaths,
    displayTitle,
    statusCode: resolvedStatusCode,
    requestId,
    errorMessage,
  } = getRouteErrorPageModel(title, statusCode, error);

  useTitle(displayTitle);

  return (
    <main className={"flex flex-col gap-4 p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <section className={"flex justify-center py-32"}>
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
            {actionLabel && onAction ? (
              <button type={"button"} onClick={onAction} className={actionButtonClasses}>
                {actionLabel}
              </button>
            ) : null}
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

// eslint-disable-next-line react-refresh/only-export-components -- Test helper stays colocated with error page copy/model logic.
export const __TEST__RouteErrorPage = {
  formatDisplayTitle,
  getRouteErrorPageModel,
};
