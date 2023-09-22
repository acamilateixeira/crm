export function formatarPath(path: string) {
  return path.replace(/\\/g, '/');
}

export function formatarPathParaUrl(path: string) {
  return path.replace(/\\/g, '/').replace(/\//g, '\\');
}

export function formatarPathParaUrlParaDownload(path: string) {
  return path.replace(/\\/g, '/').replace(/\//g, '\\').replace('\\', '%5C');
}

export function formatarPathParaNomeDoArquivo(path: string) {
  return path.replace(/\\/g, '/').split('/').pop()?.split('.').shift();
}
