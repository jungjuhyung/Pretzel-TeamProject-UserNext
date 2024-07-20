export const loadState = (key) => {
  try {
    if (typeof window === "undefined") {
      return undefined;
    }
    const jsonOfState = localStorage.getItem(key);
    if (jsonOfState === null) {
      return undefined;
    }
    return JSON.parse(jsonOfState);
  } catch (err) {
    console.error("불러오는 중 오류 발생", err);
    return undefined;
  }
};

export const saveState = (key, state) => {
  try {
    const jsonOfState = JSON.stringify(state);
    localStorage.setItem(key, jsonOfState);
  } catch (err) {
    console.error("저장 중 오류 발생", err);
  }
};

export const deleteState = (key) => {
  try {
    localStorage.removeItem(key);
    return 1;
  } catch (err) {
    console.error("삭제 중 오류 발생", err);
    return 0;
  }
};