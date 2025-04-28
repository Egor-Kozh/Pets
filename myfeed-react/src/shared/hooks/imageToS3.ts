export const uploadToS3 = async (fileImage: File) => {
  const url = new URL(
    "https://internship-social-media.purrweb.com/v1/aws/signed-url"
  );
  url.searchParams.append("fileName", fileImage.name);
  url.searchParams.append("fileCategory", "POSTS");

  const signedUrlResponse = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });

  console.log(signedUrlResponse);

  if (!signedUrlResponse.ok) {
    throw new Error("Ошибка при получении подписанной ссылки");
  }

  const signedUrl = await signedUrlResponse.text();
  console.log(signedUrl);

  // 2. Загружаем файл напрямую в S3
  const uploadResponse = await fetch(signedUrl, {
    method: "PUT",
    body: fileImage,
    headers: {
      "Content-Type": fileImage.type,
    },
  });

  if (!uploadResponse.ok) {
    throw new Error("Ошибка загрузки файла в S3");
  }

  // 3. Получаем чистый URL (без параметров подписи)
  const cleanUrl = signedUrl.split("?")[0] as string;

  // 4. Сохраняем URL на бекенде
  // const saveResponse = await fetch(
  //   "https://internship-social-media.purrweb.com/api/v1/files",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  //     },
  //     body: JSON.stringify({ fileUrl: cleanUrl }),
  //   }
  // );

  // if (!saveResponse.ok) {
  //   throw new Error("Ошибка сохранения ссылки на файл");
  // }

  return cleanUrl;
};
