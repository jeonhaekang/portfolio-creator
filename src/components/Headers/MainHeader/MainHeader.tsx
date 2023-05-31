import { Typography } from "@sun-river/components";
import Link from "next/link";
import { JoinModal, LoginModal } from "~/components";
import * as Styled from "../Header.styles";
import { useMainHeader } from "./MainHeader.hooks";

export const MainHeader = () => {
  const app = useMainHeader();

  return (
    <Styled.Container>
      <Styled.Contents>
        <Typography as="h1" size="heading3" color="white">
          PortfolioCreator
        </Typography>

        <Styled.Menus>
          {app.user ? (
            <>
              <Link href={`/portfolio/${app.user.uid}`}>
                <Styled.MenuButton>MyPortfolio</Styled.MenuButton>
              </Link>
              <Link href="/create">
                <Styled.MenuButton>Create</Styled.MenuButton>
              </Link>
              <Styled.MenuButton onClick={app.requestLogoutUser}>
                Logout
              </Styled.MenuButton>
            </>
          ) : (
            <>
              <Styled.MenuButton onClick={app.loginModal?.controller.on}>
                Login
              </Styled.MenuButton>
              <Styled.MenuButton onClick={app.joinModal?.controller.on}>
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
