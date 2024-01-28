import React, { useEffect, useState } from 'react';
import style from './Followers.module.css';
import TinyChart from './TinyChart';

interface DataItem {
  daily_counts: number[];
  total_this_week: number;
  percent_change: number | null; // This property can be number or null
}

type Data = DataItem[]; // Assuming the data is an array of items

interface FollowersProps {
    fid: string; // Adjust the type according to what fid represents
}
  
export default function HomeFeed({ fid }: FollowersProps) {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/getFollowers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fid }),
      });

      if (response.ok) {
        const result: Data = await response.json();
        setData(result);
      }
    };

    fetchData();
  }, [fid]);

  if (!data) {
    return <div>Loading...</div>; // Handle loading state
  }

  if (data.length === 0) {
    return <div>No data available.</div>; // Handle empty data state
  }

  const firstItem = data[0]; // Assuming you want to display the first item

  return (
    <>
      <h3 className={style['sub-heading']}>
        {firstItem.total_this_week} new followers{' '}
        <a
          className={`${style['sub-heading-percentage']} ${
            firstItem.percent_change && firstItem.percent_change < 0 ? style['negative-change'] : style['positive-change']
          }`}
        >
          {/* Use optional chaining and nullish coalescing to safely access and display percent_change */}
          {firstItem.percent_change?.toFixed(2) ?? 'N/A'}%
        </a>
      </h3>
      <TinyChart fid={firstItem.daily_counts} />
    </>
  );
}
