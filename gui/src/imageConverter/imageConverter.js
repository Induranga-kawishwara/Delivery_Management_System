// function convertToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// }

// const handleFileUpload = async (file) => {
//   const base64 = await convertToBase64(file);
//   console.log(base64);
//   return base64;
// };

// export default handleFileUpload;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

const handleFileUpload = async (file) => {
  try {
    const base64 = await convertToBase64(file);
    return base64.replace(/^data:image\/[a-z]+;base64,/, "");
  } catch (error) {
    console.error("Error converting file to base64:", error);
    throw error;
  }
};

export default handleFileUpload;
