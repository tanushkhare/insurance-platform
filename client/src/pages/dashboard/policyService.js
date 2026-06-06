import axios from "axios";

const API_URL = "http://localhost:5000/api/policies";


// ==========================================
// GET TOKEN
// ==========================================

const getToken = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return user?.token;

};


// ==========================================
// GET CONFIG
// ==========================================

const getConfig = () => {

  return {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };

};


// ==========================================
// GET ALL POLICIES
// ==========================================

export const getPolicies = async () => {

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