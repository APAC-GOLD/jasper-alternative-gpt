import React from 'react';

export default function Home() {
  const sections = [
    { title: 'Enter Text Here', colStart: 1, colSpan: 10, rowStart: 3, rowSpan: 1 },
    { title: 'Problem', colStart: 1, colSpan: 2, rowStart: 4, rowSpan: 2 },
    { title: 'Solution', colStart: 3, colSpan: 2, rowStart: 4, rowSpan: 1 },
    { title: 'Unique Value Proposition', colStart: 5, colSpan: 2, rowStart: 4, rowSpan: 2 },
    { title: 'Key Metrics', colStart: 3, colSpan: 2, rowStart: 5, rowSpan: 1 },
    { title: 'Unfair Advantage', colStart: 7, colSpan: 2, rowStart: 4, rowSpan: 1 },
    { title: 'Channels', colStart: 7, colSpan: 2, rowStart: 5, rowSpan: 1 },
    { title: 'Customer Segments', colStart: 9, colSpan: 2, rowStart: 4, rowSpan: 2 },
    { title: 'Cost Structure', colStart: 1, colSpan: 5, rowStart: 6, rowSpan: 1 },
    { title: 'Revenue Streams', colStart: 6, colSpan: 5, rowStart: 6, rowSpan: 1 },
    { title: 'Refine', colStart: 1, colSpan: 10, rowStart: 7, rowSpan: 1 },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="min-h-screen bg-[#00167F] text-white p-4 md:p-8">
        <h1 className="text-2xl md:text-4xl text-white-600 mb-8 flex items-center" style={{ fontWeight: 900 }}>
          Toolkit
        </h1>
        
        <div className="flex flex-wrap md:grid md:grid-cols-10 md:grid-rows-20 gap-4">
          {sections.map((section) => (
            <div
              key={section.title}
              style={{
                gridColumnStart: section.colStart,
                gridColumnEnd: section.colStart + section.colSpan,
                gridRowStart: section.rowStart,
                gridRowEnd: section.rowStart + section.rowSpan,
              }}
              className="bg-gray-200 p-4 rounded w-full md:w-auto md:col-start-[section.colStart] md:col-span-[section.colSpan] md:row-start-[section.rowStart] md:row-span-[section.rowSpan]"
            >
              <h2 className="text-gray-600 mb-2 overflow-auto">{section.title}</h2>
              <textarea className="w-full h-32 bg-white text-black" style={{ fontWeight: 400 }}></textarea>
            </div>
          ))}
        </div>
        <a href="https://datacom.com" target="_blank" rel="noopener noreferrer" className="text-white mt-8">
          Datacom Homepage
        </a>
      </div>
    </main>
  );
}