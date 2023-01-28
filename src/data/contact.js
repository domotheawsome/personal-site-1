import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

// instagram = faInstagram

const data = [
  {
    link: 'https://github.com/domotheawsome',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/ariel-meshorer-sagi-58b39188/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/domothedev',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:cblappers@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
