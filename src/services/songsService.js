const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/songs`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(error);
  }
};

export { index };
