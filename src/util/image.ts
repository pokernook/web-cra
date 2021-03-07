export const createImageFromUrl = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (e) => reject(e));
  });
