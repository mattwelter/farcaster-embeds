import satori from 'satori';

export default async function CreateImage(content) {
  return await satori(
    <div style={{ color: 'black' }}>{content}</div>,
    {
      width: 600,
      height: 400,
      fonts: [
        {
          name: 'Roboto',
          data: robotoArrayBuffer, // Make sure robotoArrayBuffer is defined or imported
          weight: 400,
          style: 'normal',
        },
      ],
    },
  );
}