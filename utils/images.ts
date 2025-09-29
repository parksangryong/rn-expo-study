import * as ImagePicker from "expo-image-picker";

function getFormDataImages(
  key: string,
  images: ImagePicker.ImagePickerAsset[]
) {
  const formData = new FormData();

  images.forEach(({ uri, mimeType = "image/jpeg" }) => {
    const file = {
      uri,
      type: mimeType,
      name: uri.split("/").pop(),
    };

    formData.append(key, file as unknown as File);
  });

  return formData;
}

function getImageId(id: string) {
  const filename = id.split("/").pop() ?? "";
  const [imageId] = filename.split(".");
  return imageId;
}

export { getFormDataImages, getImageId };
