import { ServiceResponseErrorType, ServiceResponseSuccessType } from '../types/serviceResponse';

function mapStatusHTTP(
  type: ServiceResponseErrorType | ServiceResponseSuccessType,
): number {
  const statusHTTPMap: Record<ServiceResponseErrorType | ServiceResponseSuccessType, number> = {
    NOT_FOUND: 404,
    SUCCESS: 200,
    CREATED: 201,
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    INCOMPLETE_DATA: 422,
  };

  return statusHTTPMap[type] || 500;
}

export default mapStatusHTTP;