import axios from 'axios';
export async function uploadImg(file:File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.UPLOAD_PRESET);

    const url = import.meta.env.CLOUDINARY_URL;
   if (url == null) return;
  const result = await axios.post(url,formData).then((result) => {
    const { data } = result;
    return data.url;
    })
    .catch((err) => {
        console.log(err);
    })    
  return result;
}