function fetchUserData(userId, callback) {
  setTimeout(() => {
    const userData = {
      id: userId,
      username: 'exampleUser',
      email: 'user@example.com',
    };
    callback(userData);
  }, 2000);
}
function handleUserData(data) {
  console.log('Fetched user data:', data);
}
const userId = 123;
fetchUserData(userId, handleUserData);

console.log('Fetching user data...');

function readFileAsync(filename, callback) {
  setTimeout(() => {
    const fileContent = `Content of ${filename}`;
    callback(fileContent);
  }, 1000);
}

function handleFileContent(content) {
  console.log(`Received file content: ${content}`);
}

readFileAsync('example.txt', handleFileContent);
console.log('Reading file...');
