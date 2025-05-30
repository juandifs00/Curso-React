const fileUpload = async (file) => {
  // if (!file) throw new Error("No hay ningún archivo por subir.");
  if (!file) return null;

  const cloudUrl = "https://api.cloudinary.com/v1_1/dojcdl2nt/upload";
  const formData = new FormData();
  formData.append("upload_preset", "journal-app-react");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) {
      throw new Error("Error al subir la imagen.");
    }

    const cloudResp = await resp.json();
    return cloudResp.secure_url;

  } catch (error) {
    // console.error(error);
    // throw new Error(error.message);
    return null;
  }
};

export default fileUpload;
