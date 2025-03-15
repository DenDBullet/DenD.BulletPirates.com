import "@fontsource/poppins"; // Importing Poppins globally
import type { ChildrenType } from "@core/types";
import Providers from "@components/Providers";
import BlankLayout from "@layouts/BlankLayout";

const Layout = ({ children }: ChildrenType) => {
  return (
    <Providers direction="ltr">
      <BlankLayout>
        <div style={{ fontFamily: "Poppins, sans-serif" }}>{children}</div>
      </BlankLayout>
    </Providers>
  );
};

export default Layout;
