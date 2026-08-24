import React from "react";

export function UnsafePreview({ html }: { html: string }) {
  // Intentionally unsafe fixture for source analysis.
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
