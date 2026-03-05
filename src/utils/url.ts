export function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function mailTo(email: string) {
  window.location.href = `mailto:${email}`;
}