import { fbIcon, twitterIcon, whatsappIcon } from '../assets'

const SocialMedia = () => {
  return (
    <div>
        <div>
            <h3 className='text-black'>Share event</h3>
        </div>
        <div className='flex flex-row gap-5 h-4 w-4 '>
        <img src={fbIcon} alt="Share on Facebook" title="Share on Facebook" />
      <img src={twitterIcon} alt="Share on Twitter" title="Share on Twitter" />
      <img src={whatsappIcon} alt="Share on WhatsApp" title="Share on WhatsApp" />
        </div>
    </div>
  )
}

export default SocialMedia