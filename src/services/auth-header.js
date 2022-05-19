export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));
  if (user && user.value) {
    return { Authorization: 'Bearer ' + user.value };
  } else {
    return {};
  }
}