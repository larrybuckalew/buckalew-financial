import { useState } from 'react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={i} className={`accordion-item ${open ? 'open' : ''}`}>
            <button className="accordion-q" onClick={() => setOpenIndex(open ? -1 : i)}>
              <span>{item.q}</span>
              <span className="accordion-icon">+</span>
            </button>
            <div className="accordion-a" style={{ maxHeight: open ? '400px' : '0' }}>
              <p className="accordion-a-inner">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}