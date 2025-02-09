import { axiosJWT } from "./UserService";

export const createOrder = async (data, access_token) => {
  console.log("access_token", { access_token, data });
  const res = await axiosJWT.post(
    `${process.env.REACT_APP_API_URL}/order/create`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const getOrderByUserId = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API_URL}/order/get-all-order/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const getDetailsOrder = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API_URL}/order/get-details-order/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const cancelOrder = async (id, access_token, orderItems, userId) => {
  const data = { orderItems, orderId: id };
  const res = await axiosJWT.delete(
    `${process.env.REACT_APP_API_URL}/order/cancel-order/${userId}`,
    { data },
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const getAllOrder = async (access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API_URL}/order/get-all-order`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
export const successOrder = async (id, access_token) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_URL}/order/update-order/${id}`,
    {
      isDelivered: true,
      isPaid: true,
    },
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );

  return res.data;
};
