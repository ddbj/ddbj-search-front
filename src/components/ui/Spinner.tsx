import { FC } from "react";

export const Spinner: FC = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-primary" />
    </div>
  );
};
