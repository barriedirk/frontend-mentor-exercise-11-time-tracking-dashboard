export const acme = "Acme";

export const getData = async () => {
  const response = await fetch(`./data.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  // emulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log({ data });

  return data;
};
