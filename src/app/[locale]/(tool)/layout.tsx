import { type ReactNode } from "react";
import { FooterSection } from "./footer-section";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <FooterSection />
    </>
  );
}
