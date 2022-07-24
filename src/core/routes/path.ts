const path: IPath = {
  swagger: "/swagger",
  swaggerDoc: "/swagger.json",
  patient: "/patients",
  baseUrl: "/api/v1",
};

interface IPath {
  swagger: string;
  swaggerDoc: string;
  baseUrl: string;
  patient: string;
}

export default path;
