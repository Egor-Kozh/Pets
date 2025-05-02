import { Args } from "./model/types";

export const uploadToS3 = async ({ fileImage, typeImage }: Args) => {
  const url = new URL(
    "https://internship-social-media.purrweb.net/v1/aws/signed-url"
  );
  url.searchParams.append("fileName", fileImage.name);
  url.searchParams.append("fileCategory", typeImage);

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

  const uploadResponse = await fetch(signedUrl, {
    method: "PUT",
    body: fileImage,
    headers: {
      "Content-Type": fileImage.type,
      Origin: window.location.origin,
      "Access-Control-Request-Method": "PUT",
      mode: "cors",
    },
  });

  if (!uploadResponse.ok) {
    throw new Error("Ошибка загрузки файла в S3");
  }
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
