import React from "react";
import {
  MenuMenu,
  MenuItem,
  Button,
  Menu,
  Container,
} from "semantic-ui-react";
import CardSummary from "./CardSummary";
export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />
          <MenuMenu position="right">
            <CardSummary />

            <MenuItem>
              <Button primary>Sign Up</Button>
            </MenuItem>
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}
