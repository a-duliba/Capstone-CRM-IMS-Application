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
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import StarOutlineRounded from "@mui/icons-material/StarOutlineRounded";
import VillaOutlined from "@mui/icons-material/VillaOutlined";

import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import axios, { AxiosRequestConfig } from "axios";
import { Header, Layout, Sider, Title } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";

/* Local imports */
import { 
  Login, 
  Home,
  Agents,
  MyProfile,
  PropertyDetails,
  AllProperties,
  CreateProperty,
  AgentProfile,
  EditProperty,
} from "pages";


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
              name: "properties", //all the files in pages for their functionality
              list: AllProperties, 
              show: PropertyDetails,
              create: CreateProperty, //refine audo implements CRUD functionality you just have in link the pages and design UI
              edit: EditProperty, 
              icon: <VillaOutlined />,
          },
          {
              name: "agents",
              list: Agents,
              show: AgentProfile,
              icon: <PeopleAltOutlined />,
          },
          {
              name: "reviews",
              list: Home,
              icon: <StarOutlineRounded />,
          },
          {
              name: "messages",
              list: Home,
              icon: <ChatBubbleOutline />,
          },
          {
              name: "my-profile",
              options: { label: "My Profile " },
              list: MyProfile,
              icon: <AccountCircleOutlined />,
          },
          ]}
          //each of these are imports to other components
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
