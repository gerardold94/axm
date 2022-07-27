import {getFocusedRouteNameFromRoute, Route} from '@react-navigation/native';

export const showHeader = (route: Route<string, object>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return true;
    case 'WeekImage':
      return true;
    case 'Settings':
      return true;
    default:
      return false;
  }
};

export const getTitle = (route: Route<string, object>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Articulos AXM';
    case 'WeekImage':
      return 'Imagen de la semana';
    case 'Settings':
      return 'Ajustes';
    default:
      return '';
  }
};
