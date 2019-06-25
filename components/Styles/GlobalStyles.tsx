import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import tw from 'tailwind.macro';

export const GlobalStyles = createGlobalStyle`
  ${reboot()}

  :root {
    --bg-color: #fff;
    --header-color: #fcfcfc;
    --logo-color: #000;
    --primary-color: #e4570e;
    --primary-color-light: #e4570e;
    --text-color: #2d3748;
    --text-color-secondary: #4a5568;
    --text-color-tertiary: #4a5568;
  }

  .dark-mode {
    --bg-color: #171717;
    --header-color: #1A1A1A;
    --logo-color: #e4570e;
    --primary-color: #e4570e;
    --primary-color-light: #e4570e;
    --text-color: #E0E0E0;
    --text-color-secondary: #F2F2F2;
    --text-color-tertiary: #4a5568;
  }

  body {
    ${tw`font-body`}
    background: var(--bg-color);
    transition: background .2s;
  }
  h2 {
    margin-bottom: 0.2rem;
  }
  a {
    ${tw`text-primary`}
    text-decoration: none;

    &:hover {
      ${tw`text-primary-light`}
      text-decoration: none;
    }
  }
`;
