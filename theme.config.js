  import { useRouter } from 'next/router'

const Logo = ({ height }) => <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 1029.07 1029.07"><circle cx="514.54" cy="514.54" r="514.54" fill="#fff"/><path d="M754.19,549,570.08,295.83c33,0,60.85-1.89,88.2,1,10.17,1.06,21.56,11.49,28.39,20.72C743.21,394,798.82,471.25,855.54,549.4,799.08,627,743.07,705.08,685.41,781.84c-6.77,9-22.29,14.17-34.34,15.49-22.26,2.43-45,.7-76.84.7Z" transform="translate(-445.46 -25.46)"/><path d="M958,338.64l248.64-187.46c0,33.62,1.86,62-1,89.8-1,10.36-11.28,22-20.35,28.91-75.13,57.58-151,114.2-227.7,172-76.23-57.5-152.88-114.52-228.27-173.23-8.86-6.9-13.92-22.7-15.21-35-2.39-22.66-.69-45.78-.69-78.24Z" transform="translate(-445.46 -25.46)"/><path d="M1165.81,548.76l184.11,253.17c-33,0-60.85,1.9-88.2-1-10.17-1.07-21.56-11.49-28.39-20.73-56.54-76.49-112.15-153.71-168.87-231.86,56.46-77.62,112.47-155.67,170.13-232.44,6.77-9,22.29-14.17,34.34-15.48,22.26-2.44,45-.7,76.84-.7Z" transform="translate(-445.46 -25.46)"/><path d="M962.05,741.36,713.41,928.82c0-33.62-1.86-62,1-89.8,1-10.36,11.28-22,20.35-28.91,75.13-57.58,151-114.2,227.7-172,76.23,57.5,152.88,114.52,228.27,173.23,8.86,6.9,13.92,22.7,15.21,35,2.39,22.66.69,45.78.69,78.24Z" transform="translate(-445.46 -25.46)"/></svg>


const TITLE_WITH_TRANSLATIONS = {
  'en-US' : 'ConvORM: A simple ORM for C#',
  'pt-BR' : 'ConvORM: Um simple ORM para C#'
}

export default {
  repository: 'https://github.com/ConvORM/Conv.ORM.NET5',
  titleSuffix: ' – ConvORM',
  logo: () => {
    const { locale } = useRouter()
    return <>
      <Logo height={18}/>
      <span className="mx-2 font-extrabold hidden md:inline" style={{paddingLeft: '0.5rem'}}>Conv.ORM</span>
      <span className="text-gray-600 font-normal hidden md:inline whitespace-no-wrap" style={{paddingLeft: '0.5rem'}}>{TITLE_WITH_TRANSLATIONS[locale]}</span>
    </>
  },
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="ConvORM: A simple ORM for C#" />
      <meta name="og:description" content="ConvORM: A simple ORM for C#" />
      <meta name="og:title" content="ConvORM: A simple ORM for C#" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="ConvORM" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>MIT {new Date().getFullYear()} © ConvORM.</>,
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'pt-br', text: 'Português Brasileiro' }
  ]
}