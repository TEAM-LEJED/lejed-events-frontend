const Footer = () => {
  return (
    <div className="bg- bg-[#E88BBA] w-screen h-85">
      <div className="flex gap-x-10 place-content-center py-20">
        <div>
          <h3 className="font-bold text-[20px] mb-3">Host Events</h3>
          <p>Publish Your Events</p>
          <p>Promote Your Events</p>
          <p>Sell Tickets Online</p>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-[20px]">Discover Events</h3>
          <p>Formal Events</p>
          <p>Informal Events</p>
          <p>Past Events</p>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-[20px]">Explore More</h3>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div></div>

        <div className="flex flex-col">
          <h3 className="font-bold mb-3 text-[20px]">Subscription</h3>
          <input type="text" className="mb-3" placeholder="Name" />
          <input type="text" className="mb-3" placeholder="Email" />
          <button className="bg-white h-8 ">Subscribe</button>
        </div>



      </div>
      <span>
        icons
      </span>

    </div>
  )
}

export default Footer