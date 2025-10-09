import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import useApps from "./useApps";

const useAppLogic = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);
  const app = apps.find((a) => a.id === Number(id));
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    ratings,
    downloads,
  } = app || {};
  const chartData = ratings ? [...ratings].reverse() : [];

  useEffect(() => {
    if (app) {
      const existingAppList = JSON.parse(localStorage.getItem("installedApp"));
      const isCurrentlyInstalled =
        existingAppList && existingAppList.find((p) => p.id === app.id);

      setIsInstalled(!!isCurrentlyInstalled);
    }
  }, [app]);
  const installApp = () => {
    if (!app) {
      toast.error("Application data is not available.");
      return;
    }

    const existingAppList = JSON.parse(localStorage.getItem("installedApp"));
    let updatedAppList = [];

    if (existingAppList) {
      const isDuplicate = existingAppList.find((p) => p.id === app.id);
      if (isDuplicate) {
        return;
      }
      updatedAppList = [...existingAppList, app];
    } else {
      updatedAppList.push(app);
    }

    localStorage.setItem("installedApp", JSON.stringify(updatedAppList));
    setIsInstalled(true);
    toast.success(`'${title}' has been successfully installed!`);
  };

  return {
    app,
    loading,
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    chartData,
    isInstalled,
    installApp,
  };
};

export default useAppLogic;
