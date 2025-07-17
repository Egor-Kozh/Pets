import { Args } from "./model/types";

export const uploadToS3 = async ({ fileImage, typeImage }: Args) => {
  const url = new URL(
    "https://internship-social-media.purrweb.net/v1/aws/signed-url"
  );
  url.searchParams.append("fileName", fileImage.name);
  url.searchParams.append("fileCategory", typeImage);

  const signedUrlResponse = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });

  if (!signedUrlResponse.ok) {
    throw new Error("Ошибка при получении подписанной ссылки");
  }

  const signedUrl = await signedUrlResponse.text();

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

  const cleanUrl = signedUrl.split("?")[0] as string;

  return cleanUrl;
};
