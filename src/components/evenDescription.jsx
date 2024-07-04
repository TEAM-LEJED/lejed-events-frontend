import React from 'react'

const EvenDescription = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">


  {/* Description section */}
  <div className="col-span-1 md:col-span-1 bg-white p-4">
    <h2 className="text-xl font-bold">Join us for an unforgettable Night of Worship & Honor</h2>
    <p className="text-gray-700 mb-4">
      Hosted by Wendy Fory, this evening promises to be a soul-stirring experience, featuring guest ministers Chris Ametepe, Jacquline Oforiwaa-Amanfo, Minister Success, Nii Praiz, Jonas Botchwey, and many more. With performances by the Genesis Choir and other talented artists, this event will uplift and inspire your spirit.
    </p>

    <p className="mb-2"><strong>Date:</strong> 21st July 2024</p>
    <p className="mb-2"><strong>Time:</strong> 4:00 pm</p>
    <p className="mb-2"><strong>Venue:</strong> Lifecity Chapel Auditorium, Ayimensah</p>

    <p className="mb-4"><strong>Google Location Link:</strong> <a href="https://maps.app.goo.gl/EMtLSYCEuBQXehQE8?g_st=ic" target="_blank" rel="noopener noreferrer">Google Maps</a></p>

    <p className="text-green-600 font-bold">It's FREE!! Reserve a seat NOW !!!</p>
    <p><strong>RSVP:</strong> 0242666795 / 0504135454 / 0247967952</p>
  </div>
</div>
  )
}

export default EvenDescription