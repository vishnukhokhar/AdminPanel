import React from 'react'

const PartnerEnquiries = () => {
  return (
    <div className='main'>
      <h1>PartnerShip Enquiries</h1>
      <form action="" style={{border:'2px solid black', padding:'2px',display:'flex', flexDirection:'column'}}>
        <input type="text" placeholder='Company name' />
        <input type="text" placeholder='contact person'/>
        <input type="email" placeholder='email'/>
        <input type="tel" placeholder='phone'/>
        <input type="textArea" placeholder='message'/>
        <button>Save</button>
      </form>
    </div>
  )
}

export default PartnerEnquiries
