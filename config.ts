type _Config = {
    apiUrl: string;
  }
  
  const Config: _Config = {
    apiUrl: process.env.REACT_APP_BACK_PATH || ""
  }
  
  export default Config