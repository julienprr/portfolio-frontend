export type Project = {
  title: string,
  key: string;
  route: string;
  imageUrl: string;
  iconUrl: string;
};

export const projects: Project[] = [
  {
    title: 'Spotify Profile',
    key: 'spotify-profile',
    route: '/projects/spotify-profile',
    imageUrl: '/images/projects/spotify-profile/sc_playlist_details.png',
    iconUrl: '/icons/spotify.svg',
  },
  //   {
  //     key: 'portfolio-website',
  //     route: '/projects/portfolio-website',
  //     imageUrl: '/icons/portfolio.svg',
  //     iconUrl: '/icons/portfolio.svg',
  //   },
  {
    title: 'My VPS',
    key: 'my-vps',
    route: '/projects/my-vps',
    imageUrl: '/icons/kubernetes.svg',
    iconUrl: '/icons/kubernetes.svg',
  },
  {
    title: 'Compdoc',
    key: 'compdoc',
    route: '/projects/compdoc',
    imageUrl: '/images/projects/compdoc/sc_homepage.png',
    iconUrl: '/icons/compdoc.svg',
  },
];
