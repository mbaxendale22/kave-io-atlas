import axios from "axios";
import { setItemToLocalStorage, getTokenFromLocalStorage } from "./auth";
import useQueryClient from "react-query";
import { getPayload } from "./auth";

export const getCoffees = async () => {
  const { data } = await axios.get("/api/coffee");
  return data;
};
export const testRoute = async (params) => {
  const { origin, process, profile } = params;
  const { data } = await axios.get(
    `/api/coffee/test?origin=${origin}&process=${process}&profile=${profile}`
  );
  return data;
};

export const postLogin = async (login) => {
  const { data } = await axios.post("/api/login", login);
  setItemToLocalStorage(data.token);
  return data.userToLogin._id;
};

export const postRegister = async (register) => {
  await axios.post("/api/register/", register);
};

export const getUserJournal = async (page) => {
  const token = getTokenFromLocalStorage();
  const limit = 5;
  const { data } = await axios.get(`/api/journal?page=${page}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

//single journal entry
export const getUserJournalEntry = async (id) => {
  const token = getTokenFromLocalStorage();
  const { data } = await axios.get(`/api/journal/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const [entry] = data;
  return entry;
};

// update a single journal entry
export const updateUserJournalEntry = async (id, updatedEntry) => {
  const token = getTokenFromLocalStorage();
  const { data } = await axios.put(`/api/journal/${id}`, updatedEntry, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteUserJournalEntry = async (id) => {
  const token = getTokenFromLocalStorage();
  const { data } = await axios.delete(`/api/journal/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const addToJournal = async (coffeeData) => {
  const token = getTokenFromLocalStorage();
  const { data } = await axios.post("/api/journal/", coffeeData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
