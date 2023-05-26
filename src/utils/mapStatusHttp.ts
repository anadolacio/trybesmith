import { ServiceResponseErrorType, ServiceResponseSuccessType } from '../types/serviceResponse';

function mapStatusHTTP(
  type: ServiceResponseErrorType | ServiceResponseSuccessType,
): number {
  const statusHTTPMap: Record<ServiceResponseErrorType | ServiceResponseSuccessType, number> = {
    NOT_FOUND: 404,
    SUCCESSFUL: 201,
    CREATED: 202,
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
  };

  return statusHTTPMap[type] || 500;
}

export default mapStatusHTTP;