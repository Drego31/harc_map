export const actionUtils = {
  copyToClipboard (node) {
    const r = document.createRange();
    r.selectNode(node);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  },
};
