import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { menu } from '../../data/menu';
import Link from 'next/link';
import { Logo } from '../Logo';
import { NavLink } from '../Navigation/NavLink';

const Wrapper = styled.div`
  ${tw`bg-header`};
`;

const Content = styled.div`
  ${tw`flex items-center justify-center flex-col md:flex-row md:justify-between flex-wrap pt-6 px-4 md:px-16 mx-auto`};
  max-width: 1400px;
`;

const Menu = styled.nav``;

const HeaderLogo = styled(Logo)`
  ${tw`fill-logo sm:mx-auto`};
  height: 48px;

  @media (max-width: 768px) {
    height: 32px;
  }
`;

export const Header: React.FC<{}> = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Link href="/">
            <a aria-label="itiden.se">
              <HeaderLogo />
            </a>
          </Link>
          <Menu>
            {menu.Main.map(item => (
              <MenuItem key={item.label} {...item} />
            ))}
          </Menu>
        </Content>
      </Wrapper>
    </>
  );
};

const MenuItem: React.FC<{ label: string; slug: string }> = ({
  label,
  slug,
}) => {
  const isRootLink: boolean = slug === '/';
  const href: string = isRootLink ? slug : `/page?slug=${slug}`;
  const as: string = isRootLink ? slug : `/${slug}`;

  return (
    <NavLink href={href} as={as} passHref>
      {label}
    </NavLink>
  );
};
