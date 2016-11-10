export default function({path:path="/", callback:callback}) {
  callback()
  history.pushState(path, "", path);
}
