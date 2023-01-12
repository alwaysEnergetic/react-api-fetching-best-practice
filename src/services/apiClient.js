import { post, get } from "./base";

export const apiClient = {
  getData: (data)=>post('/', {...data}).then((res)=> {return res}),
 
};
