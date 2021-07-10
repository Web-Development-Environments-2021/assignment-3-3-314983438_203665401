import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage")
  },
  {
    path: "/Managment",
    name: "Managment",
    component: () => import("./pages/ManagmentPage")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },
  {
    path: "/CurrentGames",
    name: "CurrentGames",
    component: () => import("./pages/CurrentGames")
  },
  {
    path: "/About",
    name: "About",
    component: () => import("./pages/About")
  },
  {
    path: "/favoriteGames",
    name: "favoriteGames",
    component: () => import("./components/FavoriteGames")
  },
  {
    path: "/PlayerPage/:player_id",
    name: "PlayerPage",
    component: () => import("./pages/PlayerPage")
  },
  {
    path: "/teampreview",
    name: "teampreview",
    component: () => import("./components/TeamPreview")
  },
  {
    path: "/TeamPage/:team_name",
    name: "TeamPage",
    component: () => import("./pages/TeamPage")
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
