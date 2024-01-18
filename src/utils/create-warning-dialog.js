export function createWarningDialog(content, appendParent) {
  const dialogWrapper = document.createElement('div');
  const dialogParagraph = document.createElement('p');

  dialogWrapper.classList.add('warning-dialog');
  dialogParagraph.textContent = content;

  dialogWrapper.appendChild(dialogParagraph);
  appendParent.appendChild(dialogWrapper);

  return dialogWrapper;
}
