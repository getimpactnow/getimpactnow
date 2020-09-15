import React from "react";
import { Box, Heading, Flex, Text, LinkProps } from "@chakra-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

const MenuItems: React.FC<LinkProps & { href: string }> = ({
  children,
  href,
  ...linkProps
}) => (
  <Link to={href}>
    <a>
      <Text mt={{ base: 4, md: 0 }} mr={6} display="block" {...linkProps}>
        {children}
      </Text>
    </a>
  </Link>
);

const HeaderNav: React.FC = (props) => {
  const [show, setShow] = React.useState(false);
  // TODO find way to updating the cache from login mutation
  const handleToggle = () => setShow(!show);
  const route = useRouteMatch();
  console.log(">> ", { route: JSON.stringify(route) });

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="whiteAlpha.900"
      borderBottom="1px"
      borderBottomColor="whiteAlpha.300"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="span" size="lg">
          <Link to="/">get.impact.now</Link>
        </Heading>
      </Flex>

      <Box
        as="nav"
        display={{ sm: "block", md: "none" }}
        onClick={handleToggle}
        cursor="pointer"
      >
        <svg
          fill="white"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        as="nav"
        display={{ xs: show ? "block" : "none", md: "flex" }}
        width={{ xs: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        onClick={handleToggle}
      >
        <MenuItems href={`/`}>Home</MenuItems>
        <MenuItems href="/profile">Profile</MenuItems>
        <MenuItems href="/politician">Politician</MenuItems>
      </Box>
    </Flex>
  );
};

export default HeaderNav;
