import { GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import { dataProvider , } from "./providers/dataProvider";
import Dashboard from "./pages/dashboard";
import { BookOpen, Home } from "lucide-react";
import { Layout } from "./components/refine-ui/layout/layout";
import SubjectsList from "./pages/subjects/list";
import SubjectsCreate from "./pages/subjects/create";
import logoSvg from "./assets/sap.svg";
function App() {
  return (
    <BrowserRouter>
      {/* <GitHubBanner /> */}
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "c5Cwup-i9ll8w-3fat75",
                title: { 
                  text: "Uni Class App",
                  icon: <img src={logoSvg} alt="Project Logo Here" style={{ width: "24px", height: "24px", marginRight: "8px" }} />
                  // icon: <img src="../src/assets/logo1.png" alt="Project Logo Here"               />
                 }
              }}
              

              resources={
                [
                  {
                    name: "dashboard",
                    list: "/", 
                    meta: { label: "Home", icon: <Home /> }
                  },
                  {
                    name: "subjects",
                    list: "/subjects",
                    create: "/subjects/create",
                    edit: "/subjects/edit/:id",
                    meta: { label: "Subjects" , icon: <BookOpen />}
                  }
                ]
              }
            >
              <Routes>
                
                <Route element={
                  <Layout>
                      <Outlet />
                  </Layout>
                  
                } >
                <Route path="/" element={<Dashboard />} />
                <Route path="/subjects" >
                  <Route index element={<SubjectsList />} />
                  <Route path="create" element={<SubjectsCreate />} />
                </Route>
                </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            {/* <DevtoolsPanel /> */}
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
