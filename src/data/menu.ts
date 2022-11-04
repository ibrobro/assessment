import HomeIcon from '@mui/icons-material/Home';
import ErrorIcon from '@mui/icons-material/Error';
import PageviewIcon from '@mui/icons-material/Pageview';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';


export interface MenuStructure{
  title: string;
  link: string;
  icon:  (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string}) | null;
}


export interface Menus {
  [id: string]: MenuStructure;
}


const MENUS: Menus = {
  home: {
    title: 'Home',
    link: '/',
    icon: HomeIcon,

  },
  find: {
    title: 'Find Something',
    link: '/find',
    icon: PageviewIcon,
  },
  notFoudTest: {
    title: 'Render no page found',
    link: '/test-no-page',
    icon: ErrorIcon,
  },
  registerOk: {
    title: 'Register ok',
    link: '/register/ok',
    icon: null,
  },
};

export default MENUS;
