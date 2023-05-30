import Link from "next/link";
import { JoinModal, LoginModal } from "~/components";
import * as Styled from "../Header.styles";
import { useMainHeader } from "./MainHeader.hooks";

export const MainHeader = () => {
  const app = useMainHeader();

  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Title>PortfolioCreator</Styled.Title>

        <Styled.Menus>
          {app.user.type === "member" && (
            <>
              <Link href={`/portfolio/${app.user.data?.uid}`}>
                <Styled.MenuButton>MyPortfolio</Styled.MenuButton>
              </Link>
              <Link href="/create">
                <Styled.MenuButton>Create</Styled.MenuButton>
              </Link>
              <Styled.MenuButton onClick={app.requestLogoutUser}>
                Logout
              </Styled.MenuButton>
            </>
          )}

          {app.user.type === "guest" && (
            <>
              <Styled.MenuButton onClick={app.loginModal.controller.on}>
                Login
              </Styled.MenuButton>
              <Styled.MenuButton onClick={app.joinModal.controller.on}>
                Join
              </Styled.MenuButton>
            </>
          )}
        </Styled.Menus>
      </Styled.Contents>

      <LoginModal />
      <JoinModal />
    </Styled.Container>
  );
};
