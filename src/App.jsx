import React, { useEffect, useState } from 'react'
import { Card } from 'antd'

const { Meta } = Card

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => {
        setData(res.products)
      })
  }, [])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {data.map((item) => (
        <Card
          key={item.id}
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt={item.title}
              src={item.images[0]}
              style={{ height: 200, objectFit: 'cover' }}
            />
          }
        >
          <Meta
            title={item.title}
            description={`$${item.price}`}
          />
        </Card>
      ))}
    </div>
  )
}