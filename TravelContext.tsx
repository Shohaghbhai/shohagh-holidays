import React, { createContext, useContext, useState, useEffect } from 'react';
import { TourPackage, BusService, ShipService, TravelTip } from './types';
import { INITIAL_PACKAGES, INITIAL_BUS_SERVICES, INITIAL_SHIPS, INITIAL_TIPS } from './initialData';

const WHATSAPP_NUMBER = '8801572596078'; // +8801572596078

interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface TravelContextType {
  packages: TourPackage[];
  busServices: BusService[];
  shipServices: ShipService[];
  travelTips: TravelTip[];
  selectedPackage: TourPackage | null;
  setSelectedPackage: (pkg: TourPackage | null) => void;
  selectedTip: TravelTip | null;
  setSelectedTip: (tip: TravelTip | null) => void;
  isAdminLoggedIn: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  showAdminModal: boolean;
  setShowAdminModal: (show: boolean) => void;
  // Package CRUD
  addPackage: (pkg: Omit<TourPackage, 'id'>) => void;
  updatePackage: (id: string, pkg: Partial<TourPackage>) => void;
  deletePackage: (id: string) => void;
  // Bus CRUD
  addBusService: (bus: Omit<BusService, 'id'>) => void;
  updateBusService: (id: string, bus: Partial<BusService>) => void;
  deleteBusService: (id: string) => void;
  // Ship CRUD
  addShipService: (ship: Omit<ShipService, 'id'>) => void;
  updateShipService: (id: string, ship: Partial<ShipService>) => void;
  deleteShipService: (id: string) => void;
  // Tips CRUD
  addTip: (tip: Omit<TravelTip, 'id'>) => void;
  updateTip: (id: string, tip: Partial<TravelTip>) => void;
  deleteTip: (id: string) => void;
  // System
  resetToDefaults: () => void;
  getWhatsAppPackageUrl: (packageName: string, price: number | string) => string;
  getWhatsAppCustomUrl: (message: string) => string;
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const TravelContext = createContext<TravelContextType | undefined>(undefined);

export const TravelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [packages, setPackages] = useState<TourPackage[]>(() => {
    try {
      const saved = localStorage.getItem('greenbelt_packages');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_PACKAGES;
  });

  const [busServices, setBusServices] = useState<BusService[]>(() => {
    try {
      const saved = localStorage.getItem('greenbelt_bus_services');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_BUS_SERVICES;
  });

  const [shipServices, setShipServices] = useState<ShipService[]>(() => {
    try {
      const saved = localStorage.getItem('greenbelt_ships');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_SHIPS;
  });

  const [travelTips, setTravelTips] = useState<TravelTip[]>(() => {
    try {
      const saved = localStorage.getItem('greenbelt_tips');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_TIPS;
  });

  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [selectedTip, setSelectedTip] = useState<TravelTip | null>(null);
  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('greenbelt_admin_auth') === 'true';
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('greenbelt_packages', JSON.stringify(packages));
    } catch (e) {
      console.error(e);
    }
  }, [packages]);

  useEffect(() => {
    try {
      localStorage.setItem('greenbelt_bus_services', JSON.stringify(busServices));
    } catch (e) {
      console.error(e);
    }
  }, [busServices]);

  useEffect(() => {
    try {
      localStorage.setItem('greenbelt_ships', JSON.stringify(shipServices));
    } catch (e) {
      console.error(e);
    }
  }, [shipServices]);

  useEffect(() => {
    try {
      localStorage.setItem('greenbelt_tips', JSON.stringify(travelTips));
    } catch (e) {
      console.error(e);
    }
  }, [travelTips]);

  // Admin Auth
  const loginAdmin = (password: string): boolean => {
    if (password === 'admin123' || password === 'greenbelt2026') {
      setIsAdminLoggedIn(true);
      localStorage.setItem('greenbelt_admin_auth', 'true');
      addToast('Welcome back, Admin! Real-time dashboard unlocked.', 'success');
      return true;
    }
    addToast('Incorrect admin passkey. Default is: admin123', 'error');
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('greenbelt_admin_auth');
    addToast('Logged out of Admin Dashboard', 'info');
  };

  // WhatsApp helper as requested:
  // "Book via WhatsApp" button linked to WhatsApp (+8801572596078) with auto-filled text: "Hello, I want to book: [Package Name] - Price: [Price]"
  const getWhatsAppPackageUrl = (packageName: string, price: number | string) => {
    const formattedPrice = typeof price === 'number' ? `৳${price.toLocaleString()}` : price;
    const text = `Hello, I want to book: ${packageName} - Price: ${formattedPrice}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const getWhatsAppCustomUrl = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  // Package CRUD
  const addPackage = (newPkg: Omit<TourPackage, 'id'>) => {
    const id = 'pkg-' + Date.now();
    const pkg: TourPackage = { ...newPkg, id };
    setPackages((prev) => [pkg, ...prev]);
    addToast(`Package "${pkg.title}" published successfully!`, 'success');
  };

  const updatePackage = (id: string, updated: Partial<TourPackage>) => {
    setPackages((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
    if (selectedPackage && selectedPackage.id === id) {
      setSelectedPackage((prev) => (prev ? { ...prev, ...updated } : null));
    }
    addToast('Package updated in real-time!', 'success');
  };

  const deletePackage = (id: string) => {
    setPackages((prev) => prev.filter((item) => item.id !== id));
    if (selectedPackage?.id === id) {
      setSelectedPackage(null);
    }
    addToast('Package deleted successfully', 'info');
  };

  // Bus CRUD
  const addBusService = (newBus: Omit<BusService, 'id'>) => {
    const id = 'bus-' + Date.now();
    setBusServices((prev) => [...prev, { ...newBus, id }]);
    addToast(`Bus route "${newBus.route}" added!`, 'success');
  };

  const updateBusService = (id: string, updated: Partial<BusService>) => {
    setBusServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
    addToast('Bus schedule & pricing updated!', 'success');
  };

  const deleteBusService = (id: string) => {
    setBusServices((prev) => prev.filter((item) => item.id !== id));
    addToast('Bus route deleted', 'info');
  };

  // Ship CRUD
  const addShipService = (newShip: Omit<ShipService, 'id'>) => {
    const id = 'ship-' + Date.now();
    setShipServices((prev) => [...prev, { ...newShip, id }]);
    addToast(`Ship "${newShip.shipName}" added!`, 'success');
  };

  const updateShipService = (id: string, updated: Partial<ShipService>) => {
    setShipServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
    addToast('Ship service updated!', 'success');
  };

  const deleteShipService = (id: string) => {
    setShipServices((prev) => prev.filter((item) => item.id !== id));
    addToast('Ship service deleted', 'info');
  };

  // Tips CRUD
  const addTip = (newTip: Omit<TravelTip, 'id'>) => {
    const id = 'tip-' + Date.now();
    setTravelTips((prev) => [ { ...newTip, id }, ...prev ]);
    addToast('New travel tip published!', 'success');
  };

  const updateTip = (id: string, updated: Partial<TravelTip>) => {
    setTravelTips((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
    if (selectedTip && selectedTip.id === id) {
      setSelectedTip((prev) => (prev ? { ...prev, ...updated } : null));
    }
    addToast('Travel tip updated!', 'success');
  };

  const deleteTip = (id: string) => {
    setTravelTips((prev) => prev.filter((item) => item.id !== id));
    if (selectedTip?.id === id) {
      setSelectedTip(null);
    }
    addToast('Travel tip removed', 'info');
  };

  const resetToDefaults = () => {
    setPackages(INITIAL_PACKAGES);
    setBusServices(INITIAL_BUS_SERVICES);
    setShipServices(INITIAL_SHIPS);
    setTravelTips(INITIAL_TIPS);
    localStorage.removeItem('greenbelt_packages');
    localStorage.removeItem('greenbelt_bus_services');
    localStorage.removeItem('greenbelt_ships');
    localStorage.removeItem('greenbelt_tips');
    addToast('Reset to official Shohagh Holidays domestic catalog defaults', 'info');
  };

  return (
    <TravelContext.Provider
      value={{
        packages,
        busServices,
        shipServices,
        travelTips,
        selectedPackage,
        setSelectedPackage,
        selectedTip,
        setSelectedTip,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        showAdminModal,
        setShowAdminModal,
        addPackage,
        updatePackage,
        deletePackage,
        addBusService,
        updateBusService,
        deleteBusService,
        addShipService,
        updateShipService,
        deleteShipService,
        addTip,
        updateTip,
        deleteTip,
        resetToDefaults,
        getWhatsAppPackageUrl,
        getWhatsAppCustomUrl,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export const useTravel = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error('useTravel must be used within a TravelProvider');
  }
  return context;
};
