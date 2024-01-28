import React from 'react';
import { LineChart, Line } from 'recharts';

// Define the props interface
interface TinyChartProps {
  fid: number[];
}

// Use the interface for your component's props
export default function TinyChart({ fid }: TinyChartProps) {
  const data = fid

  return (
    <LineChart width={250} height={50} data={data}>
      <Line type="monotone" dataKey="followers" stroke="#8884d8" strokeWidth={1} dot={false} />
    </LineChart>
  );
}
