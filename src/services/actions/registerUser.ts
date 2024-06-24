export const registerSeller = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-seller`,
    {
      method: "POST",
      body: data,
      cache: "no-store",
    }
  );
  const userInfo = await res.json();
  return userInfo;
  return res;
};

export const registerBuyer = async (formData: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-buyer`,
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
