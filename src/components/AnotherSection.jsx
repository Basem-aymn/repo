import React from 'react'

export default function AnotherSection() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-semibold mb-8">Another Section</h2>
      <div className="flex justify-between space-x-6">
        <div className="bg-gray-100 p-6 rounded shadow w-1/3 text-center">Card 1</div>
        <div className="bg-gray-100 p-6 rounded shadow w-1/3 text-center">Card 2</div>
        <div className="bg-gray-100 p-6 rounded shadow w-1/3 text-center">Card 3</div>
      </div>
    </section>
  )
}
