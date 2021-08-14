import AppBar from "components/Appbar";
import Footer from "components/Footer";

function Layout({ children, locale, selectedColor, onChangeMode }) {
  return (
    <div
      className={locale === "ar" ? "" : ""}
      dir={`${locale === "ar" ? "rtl" : "ltr"}`}
    >
      <AppBar
        onChangeMode={onChangeMode}
        selectedColor={selectedColor}
        locale={locale}
      />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
