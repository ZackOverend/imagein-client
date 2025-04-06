"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

interface TagResult {
  tag: string;
  confidence: number;
}

const ImageUploader: React.FC = () => {
  const [tags, setTags] = useState<TagResult[]>([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // 🔍 Generate a preview URL
    const previewUrl = URL.createObjectURL(file);
    setImagePreviewUrl(previewUrl);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://imagein-c9c6asg3adbkbke6.canadacentral-01.azurewebsites.net/api/image/UploadFile",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setTags(response.data.data || []);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Check the console.");
    } finally {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    multiple: false,
  });

  return (
    <div className="max-w-xl mx-auto mt-10 p-6">
      <div
        {...getRootProps()}
        className="p-10 rounded-lg text-center cursor-pointer shadow-neumorphic bg-gradient-to-r from-[#FAFAFA] to-[#EAEAEA]"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="text-2xl h-[10vh] text-center">
            <p className="text-blue-300">Drop Your Image Here...</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-2xl space-y-4">
            <p>Drop Your Image Here</p>
            <svg
              width="61"
              height="61"
              viewBox="0 0 91 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.5986 9.45611C47.0598 8.86689 46.2985 8.53125 45.4999 8.53125C44.7014 8.53125 43.94 8.86689 43.4012 9.45611L28.2345 26.0447C27.1747 27.2038 27.2553 29.0025 28.4144 30.0623C29.5735 31.1221 31.3723 31.0415 32.432 29.8824L42.6562 18.6997V60.6667C42.6562 62.2372 43.9294 63.5104 45.4999 63.5104C47.0704 63.5104 48.3437 62.2372 48.3437 60.6667V18.6997L58.5679 29.8824C59.6277 31.0415 61.4265 31.1221 62.5856 30.0623C63.7447 29.0025 63.8251 27.2038 62.7653 26.0447L47.5986 9.45611Z"
                fill="#777777"
              />
              <path
                d="M14.2188 56.875C14.2188 55.3045 12.9456 54.0312 11.375 54.0312C9.80446 54.0312 8.53125 55.3045 8.53125 56.875V57.0832C8.53118 62.2686 8.5311 66.4482 8.97306 69.7356C9.43192 73.1485 10.4135 76.0218 12.6958 78.304C14.9781 80.5866 17.8517 81.5682 21.2646 82.027C24.5519 82.4687 28.7315 82.4687 33.917 82.4687H57.0832C62.2687 82.4687 66.4482 82.4687 69.7356 82.027C73.1485 81.5682 76.0218 80.5866 78.3044 78.304C80.5866 76.0218 81.5682 73.1485 82.027 69.7356C82.4688 66.4482 82.4688 62.2686 82.4688 57.0832V56.875C82.4688 55.3045 81.1955 54.0312 79.625 54.0312C78.0545 54.0312 76.7812 55.3045 76.7812 56.875C76.7812 62.3176 76.7752 66.1134 76.3903 68.9776C76.0161 71.7599 75.3321 73.233 74.2825 74.2825C73.233 75.3321 71.76 76.0161 68.9776 76.3903C66.1134 76.7752 62.3176 76.7812 56.875 76.7812H34.125C28.6824 76.7812 24.8865 76.7752 22.0225 76.3903C19.2402 76.0161 17.7669 75.3321 16.7175 74.2825C15.6681 73.233 14.9839 71.7599 14.6099 68.9776C14.2248 66.1134 14.2188 62.3176 14.2188 56.875Z"
                fill="#777777"
              />
            </svg>

            <p>Or Click To Upload</p>
          </div>
        )}
      </div>

      {imagePreviewUrl && (
        <div className="mt-6">
          <img
            src={imagePreviewUrl}
            alt="Uploaded preview"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      )}

      {loading && <p className="mt-4 ">Analyzing image...</p>}

      {tags.length > 0 && (
        <div className="mt-6">
          <ul className="flex flex-wrap gap-2 items-center justify-center">
            {tags.slice(0, 5).map((tag, index) => (
              <li
                key={index}
                className="bg-white text-gray-800 rounded-lg px-4 py-2 shadow-sm border border-gray-200"
              >
                {tag.tag} ({Math.round(tag.confidence)}%)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
