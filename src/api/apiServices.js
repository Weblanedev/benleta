import axios from "axios";

const webApi = axios.create({
  baseURL: "https://api.buytaja.com/",
});
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTY5NDU5NTAwOSwiZXhwIjoxNjk0NjAyMjA5fQ.zHLjvbtFfzm4xi5ooOjlqsqkZCiyqc1dukPqHz-M2hA",
};

export const createUser = async (data) => {
  try {
    const response = await webApi.post("/api/v1/web/auth/signup", data, {
      headers,
    });
    return response.data.code;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

export const userDetails = async (data) => {
  try {
    const response = await webApi.post("/api/v1/web/pay", data, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    // throw new Error()
  }
};

export const validateBankDetails = async (data) => {
    try {
      const response = await webApi.post("/api/v1/web/resolve-account", data, { headers });
      return response.data;
    } catch (error) {
      console.log(error);
      // throw new Error()
    }
  };

export const getStores = async () => {
  try {
    const response = await webApi.get("/api/v1/store?limit=25", {
      headers,
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBanks = async () => {
    try {
      const response = await webApi.get("/api/v1/banks", {
        headers,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getMarketPromotions = async () => {
    try {
      const response = await webApi.get("/api/v1/web/marketing-promotions", {
        headers,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
