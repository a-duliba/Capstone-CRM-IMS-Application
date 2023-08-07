import { AuthProvider, Refine } from "@pankod/refine-core";
import {
  CssBaseline,
  ErrorComponent,
  GlobalStyles,
  ReadyPage,
  RefineSnackbarProvider,
  notificationProvider,
} from "@pankod/refine-mui";

/* imports for side bar icons */
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import { PostAddOutlined } from "@mui/icons-material";

import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import axios, { AxiosRequestConfig } from "axios";
import { Header, Layout, Sider, Title } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";

/* Local imports */
import Customers from "pages/customers";
import Products from "pages/products";
import EditProduct from "pages/edit-product";
import EditCustomer from "pages/edit-customer";
import CreateProduct from "pages/create-product";
import CreateCustomer from "pages/create-customer";
import { Login } from "pages/login";
import Home from "pages/home";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

function App() {
  const authProvider: AuthProvider = {
      login: async ({ credential }: CredentialResponse) => {
          const profileObj = credential ? parseJwt(credential) : null;

          if (profileObj) {
              const response = await fetch(
                  "http://localhost:8080/api/v1/users",
                  {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                          name: profileObj.name,
                          email: profileObj.email,
                          avatar: profileObj.picture,
                      }),
                  },
              );

              const data = await response.json();

              if (response.status === 200) {
                  localStorage.setItem(
                      "user",
                      JSON.stringify({
                          ...profileObj,
                          avatar: profileObj.picture,
                          userid: data._id,
                      }),
                  );
              } else {
                  return Promise.reject();
              }
          }
          localStorage.setItem("token", `${credential}`);

          return Promise.resolve();
      },
    logout: () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return Promise.resolve();
        });
      }

      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return Promise.resolve();
      }
      return Promise.reject();
    },

    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return Promise.resolve(JSON.parse(user));
      }
    },
  };

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("http://localhost:8080/api/v1")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "customers",
              list: Customers, 
              edit: EditCustomer,
              create: CreateCustomer,
              icon: <PeopleAltOutlined />, 
            },
            {
              name: "products",
              list: Products,
              edit: EditProduct,
              create: CreateProduct,
              icon: <PostAddOutlined />, 
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          routerProvider={routerProvider}
          authProvider={authProvider}
          LoginPage={Login}
          DashboardPage={Home}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
