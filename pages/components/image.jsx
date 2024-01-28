import React, { useEffect, useState } from 'react';
import satori from 'satori';

export default function CreateImage(content) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const generateImage = async () => {
      const img = await satori(
        <div style={{ color: 'black' }}>{content}</div>,
      );
      console.log({img})
      setImage(img);
    };

    generateImage();
  }, [content]);

  return image;
}
