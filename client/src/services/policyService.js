import axios from "axios";

console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);

const API_URL = `${import.meta.env.VITE_API_URL}/policies`;

console.log("API_URL =", API_URL);

// ==========================================
// GET TOKEN
// ==========================================

const getToken = () => {

  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  return user?.token;

};


// ==========================================
// GET CONFIG
// ==========================================

const getConfig = () => {

  return {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
  };

};


// ==========================================
// GET ALL POLICIES
// ==========================================

export const getPolicies = async () => {

  console.log("Calling API:", API_URL);


  const response = await axios.get(
    API_URL,
    getConfig()
  );

  return response.data;

};


// ==========================================
// CREATE POLICY
// ==========================================

export const createPolicy = async (policyData) => {

  const response = await axios.post(
    API_URL,
    policyData,
    getConfig()
  );

  return response.data;

};


// ==========================================
// UPDATE POLICY
// ==========================================

export const updatePolicy = async (id, policyData) => {

  const response = await axios.put(
    `${API_URL}/${id}`,
    policyData,
    getConfig()
  );

  return response.data;

};


// ==========================================
// DELETE POLICY
// ==========================================

export const deletePolicy = async (id) => {

  const response = await axios.delete(
    `${API_URL}/${id}`,
    getConfig()
  );

  return response.data;

};
