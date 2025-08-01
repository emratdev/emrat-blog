export const dataUrl = (images: FileList): Promise<string | null> => {
  const file = images[0];

  if (!file) return Promise.resolve(null);

  if (
    ["image/png", "image/jpg", "image/jpeg", "image/webp"].includes(file.type)
  ) {
    return new Promise((resolve, reject) => {
      const readerFile = new FileReader();

      readerFile.onload = () => {
        resolve(readerFile.result as string);
      };

      readerFile.onerror = () => {
        reject(null);
      };

      readerFile.readAsDataURL(file);
    });
  }

  return Promise.resolve(null);
};
