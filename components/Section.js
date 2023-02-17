import { Wrapper } from "./Wrapper";

export function Section({ children, className }) {
  return (
    <div className={`w-full py-6 lg:py-12 ${className || ""}`}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
