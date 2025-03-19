import "./styles/global.scss";

export const App = () => {
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("color-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("color-theme", newTheme);
  }
  return (
    <>
      <p>Hello world!</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};
