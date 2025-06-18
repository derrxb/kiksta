import clsx from "clsx";
import React from "react";

export interface DataStringifyBlobProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  className?: string;
}

export const DataStringifyBlob = ({
  className,
  data,
}: DataStringifyBlobProps) => {
  if (!data) {
    return null;
  }

  const stringifiedData = JSON.stringify(data, null, 2);

  return (
    <div
      className={clsx(
        "font-mono font-medium bg-gray-300 text-gray-700 rounded-2xl p-4",
        className
      )}
    >
      <div className="overflow-x-auto">
        <code className="whitespace-pre">{stringifiedData}</code>
      </div>
    </div>
  );
};
