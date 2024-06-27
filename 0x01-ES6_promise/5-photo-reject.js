export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // Reject promise with an error
    reject(new Error(`${filename} cannot be processed`));
  });
}
