import {Facebook, Twitter, Instagram} from '@material-ui/icons'


const SocialMedia = () => {
    return (
        <div>
            <div className='socialMedia'>
                <Facebook className='socialMediaIcon' style={{ color: '#3347f5', cursor: 'pointer' }} />
                <Twitter className='socialMediaIcon' style={{ color: '#5bbdf5', cursor: 'pointer' }} />
                <Instagram className='socialMediaIcon' style={{ color: '#ff8383', cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default SocialMedia