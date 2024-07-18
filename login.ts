interface User {
  username: string;
  password: string;
}

const users: User[] = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

function login(username: string, password: string): string {
  for (let user of users) {
    if (user.username === username && user.password === password) {
      return 'Login successful';
    }
  }
  return 'Invalid username or password';
}

const usernameInput = 'user1';
const passwordInput = 'password1';

const loginResult = login(usernameInput, passwordInput);
console.log(loginResult);