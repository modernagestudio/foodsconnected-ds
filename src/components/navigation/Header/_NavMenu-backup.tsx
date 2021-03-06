import tw from 'twin.macro';
import { styled, css, keyframes } from '@/styles/stitches.config';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const IconChevron = () => {
  return (
    <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
      <path
        d='M11.573 6.002a1.185 1.185 0 0 1 1.653.002 1.148 1.148 0 0 1-.002 1.644l-3.89 3.802a1.947 1.947 0 0 1-2.712 0l-3.89-3.802a1.15 1.15 0 0 1-.002-1.644 1.185 1.185 0 0 1 1.653-.002l3.595 3.513 3.595-3.513Z'
        fill='#172029'
      />
    </svg>
  );
};
const IconMenuArrow = () => {
  return (
    <svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42 15'>
      <path
        d='m16.758 2.243-8.243 8.242a12 12 0 0 1-7.487 3.473c-.55.046-.998.49-.998 1.042h41.94c0-.552-.448-.996-.998-1.042a12 12 0 0 1-7.487-3.473l-8.242-8.242a6 6 0 0 0-8.485 0Z'
        fill='#FCFDFF'
      />
      <path
        d='m17.465 2.95-8.243 8.242A13 13 0 0 1 .03 15v-1a12 12 0 0 0 8.485-3.515l8.242-8.242a6 6 0 0 1 8.486 0l8.242 8.242A12 12 0 0 0 41.971 14v1a13 13 0 0 1-9.193-3.808L24.536 2.95a5 5 0 0 0-7.071 0Z'
        fill='#DAE1E8'
      />
    </svg>
  );
};

/************ Nav **********/
const StyledNav = styled(NavigationMenu.List, {
  '@md': {
    ...tw`flex`,
  },
});

const StyledRoot = styled(NavigationMenu.Root, {
  marginRight: '$3',
  position: 'relative',
});

const StyledNavItem = styled(NavigationMenu.Item, {
  '& > button, & > a': {
    display: 'flex',
    gap: '$05',
    alignItems: 'center',
    color: '$primaryMidnight',
    typeStyle: 'body',
    fontFamily: '$display',
    fontWeight: '$heavy',
    paddingBlock: '$2',
    paddingInline: '$2',
  },
  '& a': {
    // cursor: 'pointer',
  },
  '& > [data-state="open"]': {
    color: '$primaryBrand',
    fill: '$primaryBrand',
  },
  '& > [data-state="open"] svg': {
    transform: 'rotate(180deg)',
  },
  '& svg': {
    width: '$2',
    height: '$2',
    transition: '0.2s transform ease',
    fill: 'inherit',
    '& > path': {
      fill: 'inherit',
    },
  },
});

const StyledIndicator = styled(NavigationMenu.Indicator, {
  position: 'relative',
  zIndex: 10,
  height: 0,
  opacity: 0,
  transition: 'opacity 0.2s ease',
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform, 250ms ease',
  },

  '&[data-state="visible"]': {
    opacity: 1,
  },

  '& > svg': {
    height: 15,
    position: 'absolute',
    right: 2,
    top: -14,
  },
});

const StyledNavTrigger = styled(NavigationMenu.Trigger, {});

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-100%)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromRight = keyframes({
  from: { transform: 'translateX(100%)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-100%)', opacity: 0 },
});

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(100%)', opacity: 0 },
});

const StyledContent = styled(NavigationMenu.Content, {
  position: 'absolute',
  left: 0,
  top: 0,
  padding: 32,
  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
});

const Content1 = () => (
  <div tw='flex width[400px]'>
    {/* Col1 */}
    <div>
      <h3>Yo!</h3>
      <p>Howdy doodie</p>
    </div>

    {/* Col2 */}
    <div>
      Curabitur est gravida et libero vitae dictum. Plura mihi bona sunt,
      inclinet, amari petere vellent. Quisque placerat facilisis egestas cillum
      dolore. Quam diu etiam furor iste tuus nos eludet? Morbi fringilla
      convallis sapien, id pulvinar odio volutpat. Cum ceteris in veneratione
      tui montes, nascetur mus.
    </div>
  </div>
);

const Content2 = () => (
  <div tw='flex width[600px] gap-3'>
    {/* Col1 */}
    <div tw='flex-1'>
      <h3>Yo!</h3>
      <p>Howdy doodie</p>
    </div>

    {/* Col2 */}
    <div tw='flex-1'>
      Curabitur est gravida et libero vitae dictum. Plura mihi bona sunt,
      inclinet, amari petere vellent. Quisque placerat facilisis egestas cillum
      dolore. Quam diu etiam furor iste tuus nos eludet? Morbi fringilla
      convallis sapien, id pulvinar odio volutpat. Cum ceteris in veneratione
      tui montes, nascetur mus.
    </div>

    {/* Col3 */}
    <div tw='flex-1'>
      Curabitur est gravida et libero vitae dictum. Plura mihi bona sunt,
      inclinet, amari petere vellent. Quisque placerat facilisis egestas cillum
      dolore. Quam diu etiam furor iste tuus nos eludet? Morbi fringilla
      convallis sapien, id pulvinar odio volutpat. Cum ceteris in veneratione
      tui montes, nascetur mus.
    </div>
  </div>
);

const StyledViewport = styled(NavigationMenu.Viewport, {
  position: 'absolute',
  top: 56,
  right: '-$2',
  transform: 'scale(1)',
  transformOrigin: '100% 0',
  opacity: 1,
  width: 'var(--radix-navigation-menu-viewport-width)',
  height: 'var(--radix-navigation-menu-viewport-height)',
  transition: 'width, height, 250ms ease',
  overflow: 'hidden',
  background: '#FCFDFF',
  border: '1px solid #DAE1E8',
  boxShadow: '1px 2px 12px rgba(10, 40, 86, 0.12)',
  borderRadius: '$md',

  '&[data-state="closed"]': {
    opacity: 0,
    transform: 'scale(0.75)',
  },
});

type NavMenuItemProps = {
  children: React.ReactNode;
  label: string;
};

const NavMenuItem = ({ children, label }: NavMenuItemProps) => (
  <StyledNavItem>
    <StyledNavTrigger>
      {label} <IconChevron />
    </StyledNavTrigger>
    <StyledContent>{children}</StyledContent>
  </StyledNavItem>
);

export const NavMenu = () => (
  <StyledRoot>
    <StyledNav>
      <NavMenuItem label='News &amp; statistics' children={<Content1 />} />
      <NavMenuItem label='Supplier approval' children={<Content2 />} />
      <NavMenuItem label='Quality management' children={<Content1 />} />
      <NavMenuItem label='Trading &amp; planning' children={<Content2 />} />
      <NavMenuItem label='More' children={<Content1 />} />
      <NavMenuItem label='Richard' children={<Content2 />} />
      <StyledIndicator>
        <IconMenuArrow />
      </StyledIndicator>
    </StyledNav>

    <StyledViewport forceMount />
  </StyledRoot>
);
