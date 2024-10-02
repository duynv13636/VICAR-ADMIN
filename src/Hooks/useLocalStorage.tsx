import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: unknown) => {
  // Lấy giá trị từ localStorage hoặc dùng giá trị mặc định
  const [storedValue, setStoredValue] = useState<unknown>(() => {
    try {
      const item = localStorage.getItem(key) || "";
      console.log("🚀 ~ useLocalStorage ~ item:", item)
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Hàm để lưu giá trị vào localStorage
  const setValue = (value: unknown | ((val: unknown) => unknown)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  // Xóa giá trị từ localStorage
  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(error);
    }
  };

  return { storedValue, setValue, removeValue };
};

export default useLocalStorage;
