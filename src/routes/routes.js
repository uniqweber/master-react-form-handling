import NotFound from "../components/shared/NotFound";
import ExploreForm from "../pages/form/ExploreForm";
import Login from "../pages/form/Login";
import Registration from "../pages/form/Registration";
import Home from "../pages/home/Home";

export const routes = [
   { id: 1, path: "/", Element: Home },
   { id: 2, path: "form", Element: ExploreForm },
   { id: 3, path: "registration", Element: Registration },
   { id: 4, path: "login", Element: Login },
   //   {
   //     id: 2,
   //     path: "",
   //     Element: "",
   //     subRoute: [
   //       { id: 6, index: true, Element: "" },
   //       { id: 6, path: "", Element: "" },
   //       {
   //         id: 7,
   //         path: "",
   //         Element: "",
   //         childrenSubRoute: [
   //           { id: 8, index: true, Element: "" },
   //           { id: 9, path: "", Element: "" },
   //         ],
   //       },
   //     ],
   //   },
   { id: 15, path: "*", Element: NotFound },
];
