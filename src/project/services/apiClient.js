export const response = {
  data: {
    id: "DatabaseSync",
    name: "LogicApps-DatabaseSync",
    provisioningState: "Succeeded",
    state: "Enabled",
  },
  message: {
    messageType: "Success",
    text: "Data read successfully",
  },
};

export const apiClient = {
  getData: ()=>{
    return response;
  },
  setState: (state) => {
    console.log({ ...response, data: { ...response.data, state } })
    return { ...response, data: { ...response.data, state } };
  },
};
