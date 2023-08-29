const getHrDataFromDb = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/hr", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default getHrDataFromDb;
