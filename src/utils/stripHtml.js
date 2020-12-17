export const stripHtml = (html) => {
  let el = document.createElement('div');
  el.innerHTML = html;
  return el.textContent || el.innerText;
}