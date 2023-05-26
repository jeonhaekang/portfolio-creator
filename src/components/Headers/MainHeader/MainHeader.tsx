import Link from "next/link";
import { JoinModal } from "~/components/Modal/JoinModal";
import { LoginModal } from "~/components/Modal/LoginModal";
import { useMainHeader } from "./MainHeader.hooks";
import * as Styled from "./MainHeader.styles";

export const MainHeader = () => {
  const app = useMainHeader();

  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Title>PortfolioCreator</Styled.Title>

        <Styled.Menus>
          {app.user === "member" && (
            <>
              <Link href="/create">
                <Styled.MenuButton>Create</Styled.MenuButton>
              </Link>
              <Styled.MenuButton onClick={app.requestLogoutUser}>
                Logout
              </Styled.MenuButton>
            </>
          )}

          {app.user === "guest" && (
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
