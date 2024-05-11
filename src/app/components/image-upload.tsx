"use client";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import React, { useState } from "react";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  return (
    <div>
      <UploadDropzone
        appearance={{
          container: {
            border: "1px dotted  blue",
          },
          uploadIcon: {
            color: "blue",
          },
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImageUrl(res[0].url);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imageUrl.length ? (
        <div>
          <Image src={imageUrl} alt="my-image" width={500} height={300} />
        </div>
      ) : null}
    </div>
  );
};

export default ImageUpload;
