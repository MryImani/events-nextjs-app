import MainLayout from "@/components/layout/main";
import "@/styles/globals.css";
import { NotificationContextProvider } from "../store/notification-context";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NotificationContextProvider>
  );
}
