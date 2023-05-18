import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div style={{ padding: 50 }}>{children}</div>;
};
