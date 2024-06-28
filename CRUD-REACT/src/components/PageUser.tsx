import styled from "styled-components";

interface PageDefaultProps {
  children: React.ReactNode;
}

const Main = styled.main`
background: rgb(255,166,0);
background: linear-gradient(151deg, rgba(255,166,0,0.9220938375350141) 0%, rgba(255,166,0,0.8408613445378151) 78%, rgba(255,255,255,0) 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function PageUser({ children }: PageDefaultProps) {
  return (
    <Main>
      {children}
    </Main>
  );
}

export default PageUser;
