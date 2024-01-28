import React, { useEffect, useState } from 'react';
import satori from 'satori';

export default function CreateImage(content) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const generateImage = async () => {
      const img = await satori(
        <div style={{ color: 'black' }}>{content}</div>,
        {
          width: 600,
          height: 400,
          fonts: [
            {
              name: 'Roboto',
              data: robotoArrayBuffer, // Ensure robotoArrayBuffer is defined
              weight: 400,
              style: 'normal',
            },
          ],
        },
      );
      setImage(img);
    };

    generateImage();
  }, [content]);

  return image;
}
