// This is the configuration for the Obsidian and Gold theme in a Next.js app
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Global styles for the Obsidian and Gold theme */
  body {
    background-color: #121212; /* Obsidian background */
    color: #E1E1E1; /* Gold text */
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #FFD700; /* Gold color for headings */
  }

  a {
    color: #FFD700;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function Layout({ children }) {
  return (
    <> 
      <GlobalStyle />
      {children}
    </>
  );
}