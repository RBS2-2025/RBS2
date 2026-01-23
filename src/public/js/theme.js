const THEME = {
  BRIGHT: "bright",
  DARK: "dark",
};
let current_theme = THEME.BRIGHT;
function toggle_theme() {
  document.querySelector("body")?.classList.remove(current_theme);

  if (current_theme == THEME.BRIGHT) current_theme = THEME.DARK;
  else if (current_theme == THEME.DARK) current_theme = THEME.BRIGHT;
  else current_theme = THEME.BRIGHT;
  document.querySelector("body")?.classList.add(current_theme);
  console.log("theme :" + current_theme);
}
