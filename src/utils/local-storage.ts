/* export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return null;
  }
  return localStorage.setItem(key, token);
  
}; */

export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return ""; // key না থাকলে বা window না থাকলে খালি স্ট্রিং রিটার্ন করবে
  }

  // টোকেন ডিকোড করার চেষ্টা করছি (যদি JWT টোকেন হয়)
  try {
    const tokenPayload = JSON.parse(atob(token.split(".")[1])); // JWT ডিকোড
    const currentTime = Math.floor(Date.now() / 1000); // বর্তমান সময় সেকেন্ডে
    console.log(tokenPayload.exp, currentTime);
    // টোকেন যদি মেয়াদোত্তীর্ণ না হয়, তবে সেট করতে হবে
    if (tokenPayload.exp && tokenPayload.exp > currentTime) {
      localStorage.setItem(key, token); // টোকেন লোকাল স্টোরেজে সেট করছে
    } 
    /*  if (tokenPayload.exp && tokenPayload.exp > currentTime) {
      localStorage.removeItem(key);// টোকেন লোকাল স্টোরেজে সেট করছে
    } */
  } catch (error) {
    // যদি টোকেন ঠিকমত ডিকোড না হয়, সেটা উপেক্ষা করা হবে
    console.error("Invalid token");
  }
  return token; // টোকেনই রিটার্ন করবে, মেয়াদ থাক বা না থাক
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(key);
};
