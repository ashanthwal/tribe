import React from "react";
import { Menu, Container, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useSelector } from "react-redux";
import "./NavBar.css";

export default function NavBar({ setFormOpen }) {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted compact fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" className="logo">
          Tribe
        </Menu.Item>

        <Menu.Item as={NavLink} to="/events" name="Events" />

        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            Create Event
          </Menu.Item>
        )}

        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}
