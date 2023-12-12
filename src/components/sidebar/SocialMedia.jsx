import './_sidebar.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SocialMedia({ justifyContent }) {
    return (
        <div className={`d-flex justify-content-${justifyContent} social-media-icons`}>
            <a href='https://www.facebook.com/profile.php?id=100055147804181' target='_blank'><FacebookOutlinedIcon fontSize='small' /></a>
            <a href='https://www.instagram.com/usman_s_usman2913/' target='_blank'><InstagramIcon fontSize='small' /></a>
            <a href='https://www.linkedin.com/in/muhammad-usman-51a946201' target='_blank'><LinkedInIcon fontSize='small' /></a>
            <a href='https://github.com/MuhammadUsmanAnsari' target='_blank'><GitHubIcon fontSize='small' /></a>
        </div>
    )
}
