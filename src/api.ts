import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, UsersState } from "./interface/interfase";
import i18n from "./i18next/i18next";
export const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/users?limit=6`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

export const sendMessage = async (messageData: any) => {
  try {
    const response = await axios.post(
      `https://fakestoreapi.com/carts`,
      messageData
    );
    console.log("Message sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const getProduct = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const deleteProduct = async (postId: number) => {
  try {
    const response = await axios.delete(
      `https://fakestoreapi.com/products/${postId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postProduct = async (postData: any) => {
  try {
    const response = await axios.post(
      `https://fakestoreapi.com/products`,
      postData
    );
    console.log("send message", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const patchPatchs = async (postId: any, postData: any) => {
  try {
    const response = await axios.patch(
      `https://fakestoreapi.com/products/${postId}`,
      {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
        ...postData,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = createAsyncThunk(
  i18n.t("users/createUser"),
  async (userData: any) => {
    try {
      const response = await axios.post<User>(
        "https://fakestoreapi.com/users",
        userData
      );
      return response.data;
    } catch (error) {
      throw new Error(i18n.t("api.createError"));
    }
  }
);

export const getUser = createAsyncThunk(i18n.t("users/getUser"), async () => {
  try {
    const response = await axios.get<UsersState>(
      "https://fakestoreapi.com/users"
    );
    return response.data;
  } catch (error) {
    throw new Error(i18n.t("api.getUserError"));
  }
});

export const deleteUser = createAsyncThunk(
  i18n.t("users/deleteUser"),
  async (id: number) => {
    try {
      await axios.delete(`https://fakestoreapi.com/users/${id}`);
      return id;
    } catch (error) {
      throw error;
    }
  }
);

export const patchUser: any = createAsyncThunk(
  i18n.t("users/patchUser"),
  async (userData: {
    id: number;
    username?: string;
    email?: string;
    phone?: string;
  }) => {
    const response = await axios.patch<User>(
      `https://fakestoreapi.com/users/${userData.id}`,
      userData
    );
    return response.data;
  }
);
